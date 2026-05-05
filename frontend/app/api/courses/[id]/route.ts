import { NextRequest, NextResponse } from 'next/server';
import { getAdminClient } from '@/utils/supabase/admin';
import { requireAdminAccess } from '@/lib/auth/server-auth';
import { CourseInput, CourseKind } from '@/types/course';

function getCourseId(idParam: string) {
  const courseId = Number(idParam);

  if (!Number.isInteger(courseId) || courseId <= 0) {
    return null;
  }

  return courseId;
}

function normalizeCoursePayload(payload: Partial<CourseInput>) {
  const code = payload.code?.trim().toUpperCase();
  const name = payload.name?.trim();
  const description = payload.description?.trim() ?? '';
  const cycle = Number(payload.cycle);
  const blocksPerWeek = Number(payload.blocks_per_week);
  const maxSections = Number(payload.max_sections);
  const kind = payload.kind;

  if (!code || !name) {
    return { error: 'Codigo y nombre son obligatorios' };
  }

  if (!Number.isInteger(cycle) || cycle < 1 || cycle > 12) {
    return { error: 'El ciclo debe ser un entero entre 1 y 12' };
  }

  if (!Number.isInteger(blocksPerWeek) || blocksPerWeek < 1 || blocksPerWeek > 3) {
    return { error: 'Los bloques por semana deben estar entre 1 y 3' };
  }

  if (!Number.isInteger(maxSections) || maxSections < 1 || maxSections > 20) {
    return { error: 'El maximo de secciones debe estar entre 1 y 20' };
  }

  if (kind !== 'general' && kind !== 'carrera') {
    return { error: 'El tipo de curso no es valido' };
  }

  return {
    data: {
      code,
      name,
      cycle,
      blocks_per_week: blocksPerWeek,
      max_sections: maxSections,
      kind: kind as CourseKind,
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
  const adminClient = getAdminClient();

  const { id } = await context.params;
  const courseId = getCourseId(id);
  if (!courseId) {
    return NextResponse.json({ error: 'ID de curso invalido' }, { status: 400 });
  }

  const payload = await request.json();
  const normalized = normalizeCoursePayload(payload);

  if ('error' in normalized) {
    return NextResponse.json({ error: normalized.error }, { status: 400 });
  }

  const { data, error } = await adminClient
    .from('courses')
    .update(normalized.data)
    .eq('id', courseId)
    .select('*')
    .single();

  if (error) {
    const status = error.code === 'PGRST116' ? 404 : error.code === '23505' ? 409 : 500;
    return NextResponse.json({ error: error.message }, { status });
  }

  return NextResponse.json({ course: data });
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdminAccess();
  if ('error' in auth) {
    return auth.error;
  }
  const adminClient = getAdminClient();

  const { id } = await context.params;
  const courseId = getCourseId(id);
  if (!courseId) {
    return NextResponse.json({ error: 'ID de curso invalido' }, { status: 400 });
  }

  const { error } = await adminClient.from('courses').delete().eq('id', courseId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
