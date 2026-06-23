const createBrowserClient = jest.fn();

jest.mock('@supabase/ssr', () => ({
  createBrowserClient: (...args: unknown[]) => createBrowserClient(...args),
}));

describe('supabase browser client', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('crea y reutiliza el cliente del navegador', async () => {
    const client = { auth: {} };
    createBrowserClient.mockReturnValue(client);
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co';
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = 'publishable-key';

    const { createClient } = await import('../client');

    expect(createClient()).toBe(client);
    expect(createClient()).toBe(client);
    expect(createBrowserClient).toHaveBeenCalledTimes(1);
    expect(createBrowserClient).toHaveBeenCalledWith(
      'https://example.supabase.co',
      'publishable-key'
    );
  });

  it('falla si faltan variables publicas', async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    const { createClient } = await import('../client');

    expect(() => createClient()).toThrow('Missing Supabase browser environment variables');
  });
});
