import type { NextRequest } from 'next/server';
import { parseJsonObject } from '../admin-mutations';

describe('admin mutation helpers', () => {
  it('acepta cuerpos JSON de tipo objeto', async () => {
    const request = {
      json: async () => ({ name: 'Curso Seguro' }),
    } as unknown as NextRequest;

    await expect(parseJsonObject(request)).resolves.toEqual({
      data: { name: 'Curso Seguro' },
    });
  });

  it('rechaza JSON invalido sin lanzar excepcion', async () => {
    const request = {
      json: async () => {
        throw new SyntaxError('Unexpected token');
      },
    } as unknown as NextRequest;

    await expect(parseJsonObject(request)).resolves.toEqual({
      error: 'JSON invalido en el cuerpo de la solicitud',
    });
  });

  it('rechaza arreglos como payload administrativo', async () => {
    const request = {
      json: async () => [{ name: 'Curso Seguro' }],
    } as unknown as NextRequest;

    await expect(parseJsonObject(request)).resolves.toEqual({
      error: 'El cuerpo de la solicitud debe ser un objeto JSON',
    });
  });
});
