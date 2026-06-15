const cookies = jest.fn();
const getAdminClient = jest.fn();
const createServerClient = jest.fn();
const json = jest.fn((body, init) => ({ body, status: init?.status ?? 200 }));

jest.mock('next/headers', () => ({
  cookies: (...args: unknown[]) => cookies(...args),
}));

jest.mock('next/server', () => ({
  NextResponse: {
    json: (...args: unknown[]) => json(...args),
  },
}));

jest.mock('@/utils/supabase/admin', () => ({
  getAdminClient: (...args: unknown[]) => getAdminClient(...args),
}));

jest.mock('@/utils/supabase/server', () => ({
  createClient: (...args: unknown[]) => createServerClient(...args),
}));

function profileQuery(profile: unknown, error: unknown = null) {
  const single = jest.fn().mockResolvedValue({ data: profile, error });
  const eq = jest.fn(() => ({ single }));
  const select = jest.fn(() => ({ eq }));
  return { from: jest.fn(() => ({ select })) };
}

describe('requireAdminAccess', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    cookies.mockResolvedValue({ getAll: jest.fn() });
  });

  it('permite usuarios administradores activos', async () => {
    createServerClient.mockReturnValue({
      auth: {
        getUser: jest.fn().mockResolvedValue({ data: { user: { id: 'u1' } }, error: null }),
      },
    });
    getAdminClient.mockReturnValue(
      profileQuery({ is_active: true, role: { name: 'administrador' } })
    );

    const { requireAdminAccess } = await import('../server-auth');

    await expect(requireAdminAccess()).resolves.toEqual({ user: { id: 'u1' } });
  });

  it('rechaza sesiones no autenticadas', async () => {
    createServerClient.mockReturnValue({
      auth: {
        getUser: jest.fn().mockResolvedValue({ data: { user: null }, error: null }),
      },
    });
    getAdminClient.mockReturnValue(profileQuery(null));

    const { requireAdminAccess } = await import('../server-auth');
    const result = await requireAdminAccess();

    expect(result).toEqual({ error: { body: { error: 'No autenticado' }, status: 401 } });
  });

  it('rechaza administradores inactivos o roles no autorizados', async () => {
    createServerClient.mockReturnValue({
      auth: {
        getUser: jest.fn().mockResolvedValue({ data: { user: { id: 'u2' } }, error: null }),
      },
    });
    getAdminClient.mockReturnValue(
      profileQuery({ is_active: false, role: { name: 'administrador' } })
    );

    const { requireAdminAccess } = await import('../server-auth');
    const result = await requireAdminAccess();

    expect(result).toEqual({ error: { body: { error: 'Acceso denegado' }, status: 403 } });
  });
});
