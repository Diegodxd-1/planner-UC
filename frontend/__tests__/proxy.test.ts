const updateSession = jest.fn();

jest.mock('@/utils/supabase/middleware', () => ({
  updateSession: (...args: unknown[]) => updateSession(...args),
}));

describe('proxy', () => {
  it('delega el refresco de sesion al middleware de Supabase', async () => {
    const response = { ok: true };
    const request = { url: 'http://localhost/dashboard' };
    updateSession.mockResolvedValue(response);

    const { proxy, config } = await import('../proxy');

    await expect(proxy(request)).resolves.toBe(response);
    expect(updateSession).toHaveBeenCalledWith(request);
    expect(config.matcher[0]).toContain('_next/static');
  });
});
