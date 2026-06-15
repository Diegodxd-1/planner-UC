import { normalizeRoomPayload } from '../room-payload';

describe('normalizeRoomPayload', () => {
  it('rechaza aforo autorizado mayor que el aforo total', () => {
    expect(
      normalizeRoomPayload({
        name: 'Laboratorio 101',
        capacity: 30,
        authorized_capacity: 40,
      })
    ).toEqual({
      error: 'El aforo autorizado debe ser un entero positivo menor o igual al aforo total',
    });
  });

  it('acepta aforo autorizado valido', () => {
    expect(
      normalizeRoomPayload({
        name: 'Laboratorio 101',
        capacity: 30,
        authorized_capacity: 25,
      })
    ).toEqual({
      data: {
        name: 'Laboratorio 101',
        location: null,
        capacity: 30,
        authorized_capacity: 25,
        room_type: null,
        description: null,
        is_active: true,
      },
    });
  });
});
