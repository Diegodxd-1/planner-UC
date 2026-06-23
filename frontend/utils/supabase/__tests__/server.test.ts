const createServerClient = jest.fn();

jest.mock('@supabase/ssr', () => ({
  createServerClient: (...args: unknown[]) => createServerClient(...args),
}));

describe('supabase server client', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('configura el adaptador de cookies del servidor', async () => {
    const client = { auth: {} };
    createServerClient.mockReturnValue(client);
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co';
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = 'publishable-key';
    const cookieStore = {
      getAll: jest.fn(() => [{ name: 'session', value: 'abc' }]),
      set: jest.fn(),
    };

    const { createClient } = await import('../server');
    const result = createClient(cookieStore);
    const [, , options] = createServerClient.mock.calls[0];

    expect(result).toBe(client);
    expect(options.cookies.getAll()).toEqual([{ name: 'session', value: 'abc' }]);
    options.cookies.setAll([{ name: 'session', value: 'xyz', options: { path: '/' } }]);
    expect(cookieStore.set).toHaveBeenCalledWith('session', 'xyz', { path: '/' });
  });

  it('ignora errores de setAll llamados desde server components', async () => {
    createServerClient.mockReturnValue({ auth: {} });
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co';
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = 'publishable-key';
    const cookieStore = {
      getAll: jest.fn(() => []),
      set: jest.fn(() => {
        throw new Error('readonly cookies');
      }),
    };

    const { createClient } = await import('../server');
    createClient(cookieStore);
    const [, , options] = createServerClient.mock.calls[0];

    expect(() =>
      options.cookies.setAll([{ name: 'session', value: 'xyz', options: {} }])
    ).not.toThrow();
  });
});
