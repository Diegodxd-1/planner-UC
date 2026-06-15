const createClient = jest.fn();

jest.mock('@supabase/supabase-js', () => ({
  createClient: (...args: unknown[]) => createClient(...args),
}));

describe('supabase admin client', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('crea un cliente admin sin persistir sesion', async () => {
    const client = { auth: {} };
    createClient.mockReturnValue(client);
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co';
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'service-role';

    const { getAdminClient } = await import('../admin');

    expect(getAdminClient()).toBe(client);
    expect(createClient).toHaveBeenCalledWith('https://example.supabase.co', 'service-role', {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  });

  it('falla si faltan variables privadas', async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;

    const { getAdminClient } = await import('../admin');

    expect(() => getAdminClient()).toThrow('Missing Supabase environment variables');
  });
});
