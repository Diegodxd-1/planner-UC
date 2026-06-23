const createServerClient = jest.fn();
const responseCookiesSet = jest.fn();

jest.mock('@supabase/ssr', () => ({
  createServerClient: (...args: unknown[]) => createServerClient(...args),
}));

jest.mock('next/server', () => ({
  NextResponse: {
    next: jest.fn(() => ({
      cookies: {
        set: responseCookiesSet,
      },
    })),
  },
}));

describe('supabase middleware session refresh', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('refresca sesion y propaga cookies nuevas', async () => {
    const getUser = jest.fn().mockResolvedValue({ data: { user: { id: 'u1' } } });
    createServerClient.mockReturnValue({ auth: { getUser } });
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co';
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = 'publishable-key';
    const requestCookieSet = jest.fn();
    const request = {
      headers: new Headers(),
      cookies: {
        getAll: jest.fn(() => [{ name: 'old', value: '1' }]),
        set: requestCookieSet,
      },
    };

    const { updateSession } = await import('../middleware');
    await updateSession(request);
    const [, , options] = createServerClient.mock.calls[0];

    expect(options.cookies.getAll()).toEqual([{ name: 'old', value: '1' }]);
    options.cookies.setAll([{ name: 'new', value: '2', options: { path: '/' } }]);
    expect(requestCookieSet).toHaveBeenCalledWith('new', '2');
    expect(responseCookiesSet).toHaveBeenCalledWith('new', '2', { path: '/' });
    expect(getUser).toHaveBeenCalled();
  });
});
