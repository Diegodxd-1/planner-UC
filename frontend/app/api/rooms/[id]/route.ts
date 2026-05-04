import { NextRequest, NextResponse } from 'next/server';
import { requireAdminAccess } from '@/lib/auth/server-auth';
import { adminClient } from '@/utils/supabase/admin';
import { RoomInput } from '@/types/room';

function getRoomId(idParam: string) {
  const roomId = Number(idParam);
  if (!Number.isInteger(roomId) || roomId <= 0) {
    return null;
  }

  return roomId;
}

function normalizeRoomPayload(payload: Partial<RoomInput>) {
  const name = payload.name?.trim();
  const location = payload.location?.trim() ?? '';
  const description = payload.description?.trim() ?? '';
  const capacity = Number(payload.capacity);

  if (!name) {
    return { error: 'El nombre del aula es obligatorio' };
  }

  if (!Number.isInteger(capacity) || capacity <= 0 || capacity > 1000) {
    return { error: 'El aforo debe ser un entero entre 1 y 1000' };
  }

  return {
    data: {
      name,
      location: location || null,
      capacity,
      description: description || null,
      is_active: payload.is_active ?? true,
    },
  };
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdminAccess();
  if ('error' in auth) {
    return auth.error;
  }

  const { id } = await context.params;
  const roomId = getRoomId(id);
  if (!roomId) {
    return NextResponse.json({ error: 'ID de aula invalido' }, { status: 400 });
  }

  const payload = await request.json();
  const normalized = normalizeRoomPayload(payload);

  if ('error' in normalized) {
    return NextResponse.json({ error: normalized.error }, { status: 400 });
  }

  const { data, error } = await adminClient
    .from('rooms')
    .update(normalized.data)
    .eq('id', roomId)
    .select('*')
    .single();

  if (error) {
    const status = error.code === 'PGRST116' ? 404 : error.code === '23505' ? 409 : 500;
    return NextResponse.json({ error: error.message }, { status });
  }

  return NextResponse.json({ room: data });
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdminAccess();
  if ('error' in auth) {
    return auth.error;
  }

  const { id } = await context.params;
  const roomId = getRoomId(id);
  if (!roomId) {
    return NextResponse.json({ error: 'ID de aula invalido' }, { status: 400 });
  }

  const { error } = await adminClient.from('rooms').delete().eq('id', roomId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
