import nextConfig from '../next.config';

describe('next security headers', () => {
  it('configura cabeceras defensivas globales', async () => {
    const headerRules = await nextConfig.headers?.();
    const headers = Object.fromEntries(
      headerRules?.[0].headers.map(({ key, value }) => [key, value]) ?? []
    );

    expect(headers['X-Content-Type-Options']).toBe('nosniff');
    expect(headers['X-Frame-Options']).toBe('DENY');
    expect(headers['Referrer-Policy']).toBe('strict-origin-when-cross-origin');
    expect(headers['Permissions-Policy']).toContain('camera=()');
    expect(headers['Content-Security-Policy']).toContain("frame-ancestors 'none'");
  });
});
