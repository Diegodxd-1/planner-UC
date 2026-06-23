import { rest } from 'msw'
import type { Course } from '@/types/course'
import type { Room } from '@/types/room'
import type { ManagedUser } from '@/types/user-management'

const baseCourses: Course[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduccion a la Programacion',
    cycle: 1,
    blocks_per_week: 3,
    max_sections: 2,
    kind: 'carrera',
    description: 'Curso base para primer ciclo.',
    is_active: true,
    created_at: '2026-06-01T10:00:00.000Z',
    updated_at: '2026-06-01T10:00:00.000Z',
  },
  {
    id: 2,
    code: 'MAT201',
    name: 'Matematica Discreta',
    cycle: 2,
    blocks_per_week: 2,
    max_sections: 3,
    kind: 'general',
    description: null,
    is_active: true,
    created_at: '2026-06-02T10:00:00.000Z',
    updated_at: '2026-06-02T10:00:00.000Z',
  },
]

let courses = [...baseCourses]

const baseRooms: Room[] = [
  {
    id: 1,
    name: 'Aula 101',
    location: 'Pabellon A',
    capacity: 40,
    authorized_capacity: 35,
    room_type: 'Teórica',
    description: 'Salon principal',
    is_active: true,
    created_at: '2026-06-01T10:00:00.000Z',
    updated_at: '2026-06-01T10:00:00.000Z',
  },
  {
    id: 2,
    name: 'Lab 201',
    location: 'Pabellon B',
    capacity: 25,
    authorized_capacity: 25,
    room_type: 'Laboratorio de Cómputo',
    description: null,
    is_active: true,
    created_at: '2026-06-02T10:00:00.000Z',
    updated_at: '2026-06-02T10:00:00.000Z',
  },
]

const baseUsers: ManagedUser[] = [
  {
    id: 'admin-1',
    email: 'admin@uc.edu',
    full_name: 'Admin UC',
    role_id: 1,
    is_active: true,
    contract_type: null,
    category: null,
    created_at: '2026-06-01T10:00:00.000Z',
    updated_at: '2026-06-01T10:00:00.000Z',
    role: { id: 1, name: 'administrador', description: 'Admin' },
  },
  {
    id: 'teacher-1',
    email: 'profe@uc.edu',
    full_name: 'Ana Torres',
    role_id: 2,
    is_active: true,
    contract_type: 'TC',
    category: 'Principal',
    created_at: '2026-06-02T10:00:00.000Z',
    updated_at: '2026-06-02T10:00:00.000Z',
    role: { id: 2, name: 'profesor', description: 'Profesor' },
  },
]

const roleOptions = [
  { id: 2, name: 'profesor', description: 'Profesor de la universidad' },
  { id: 3, name: 'alumno', description: 'Alumno de la universidad' },
]

let rooms = [...baseRooms]
let users = [...baseUsers]

async function readJsonPayload<T>(req: Parameters<Parameters<typeof rest.post>[1]>[0]) {
  return (await req.json()) as T
}

export function resetCourseFixtures() {
  courses = [...baseCourses]
  rooms = [...baseRooms]
  users = [...baseUsers]
}

export const handlers = [
  rest.get('*/api/courses', async (req, res, ctx) => {
    const url = new URL(req.url.toString())
    const page = Math.max(1, Number(url.searchParams.get('page') ?? '1'))
    const limit = Math.max(1, Number(url.searchParams.get('limit') ?? '5'))
    const offset = (page - 1) * limit
    const paginatedCourses = courses.slice(offset, offset + limit)

    return res(
      ctx.delay(150),
      ctx.json({
        courses: paginatedCourses,
        pagination: {
          page,
          limit,
          total: courses.length,
          totalPages: Math.max(1, Math.ceil(courses.length / limit)),
        },
      }),
    )
  }),

  rest.post('*/api/courses', async (req, res, ctx) => {
    const payload = await readJsonPayload<{
      code: string
      name: string
      cycle: number
      blocks_per_week: number
      max_sections: number
      kind: 'general' | 'carrera'
      description?: string
      is_active: boolean
    }>(req)

    const newCourse: Course = {
      id: courses.length + 1,
      code: payload.code,
      name: payload.name,
      cycle: payload.cycle,
      blocks_per_week: payload.blocks_per_week,
      max_sections: payload.max_sections,
      kind: payload.kind,
      description: payload.description?.trim() ? payload.description : null,
      is_active: payload.is_active,
      created_at: '2026-06-08T12:00:00.000Z',
      updated_at: '2026-06-08T12:00:00.000Z',
    }

    courses = [newCourse, ...courses]

    return res(
      ctx.status(201),
      ctx.json({ course: newCourse }),
    )
  }),

  rest.put('*/api/courses/:id', async (req, res, ctx) => {
    const courseId = Number(req.params.id)
    const payload = await readJsonPayload<{
      code: string
      name: string
      cycle: number
      blocks_per_week: number
      max_sections: number
      kind: 'general' | 'carrera'
      description?: string
      is_active: boolean
    }>(req)

    const currentCourse = courses.find((course) => course.id === courseId)
    if (!currentCourse) {
      return res(ctx.status(404), ctx.json({ error: 'Curso no encontrado' }))
    }

    const updatedCourse: Course = {
      ...currentCourse,
      ...payload,
      description: payload.description?.trim() ? payload.description : null,
      updated_at: '2026-06-08T13:00:00.000Z',
    }

    courses = courses.map((course) => (course.id === courseId ? updatedCourse : course))

    return res(ctx.json({ course: updatedCourse }))
  }),

  rest.delete('*/api/courses/:id', (req, res, ctx) => {
    const courseId = Number(req.params.id)
    courses = courses.filter((course) => course.id !== courseId)

    return res(ctx.json({ success: true }))
  }),

  rest.get('*/api/rooms', async (req, res, ctx) => {
    const url = new URL(req.url.toString())
    const page = Math.max(1, Number(url.searchParams.get('page') ?? '1'))
    const limit = Math.max(1, Number(url.searchParams.get('limit') ?? '5'))
    const offset = (page - 1) * limit

    return res(
      ctx.json({
        rooms: rooms.slice(offset, offset + limit),
        pagination: {
          page,
          limit,
          total: rooms.length,
          totalPages: Math.max(1, Math.ceil(rooms.length / limit)),
        },
      }),
    )
  }),

  rest.post('*/api/rooms', async (req, res, ctx) => {
    const payload = await readJsonPayload<{
      name: string
      location: string
      capacity: number
      authorized_capacity: number
      room_type: Room['room_type']
      description?: string
      is_active: boolean
    }>(req)

    const newRoom: Room = {
      id: rooms.length + 1,
      name: payload.name,
      location: payload.location || null,
      capacity: payload.capacity,
      authorized_capacity: payload.authorized_capacity,
      room_type: payload.room_type,
      description: payload.description?.trim() ? payload.description : null,
      is_active: payload.is_active,
      created_at: '2026-06-08T12:00:00.000Z',
      updated_at: '2026-06-08T12:00:00.000Z',
    }

    rooms = [newRoom, ...rooms]

    return res(ctx.status(201), ctx.json({ room: newRoom }))
  }),

  rest.put('*/api/rooms/:id', async (req, res, ctx) => {
    const roomId = Number(req.params.id)
    const payload = await readJsonPayload<{
      name: string
      location: string
      capacity: number
      authorized_capacity: number
      room_type: Room['room_type']
      description?: string
      is_active: boolean
    }>(req)

    const currentRoom = rooms.find((room) => room.id === roomId)
    if (!currentRoom) {
      return res(ctx.status(404), ctx.json({ error: 'Aula no encontrada' }))
    }

    const updatedRoom: Room = {
      ...currentRoom,
      ...payload,
      location: payload.location || null,
      description: payload.description?.trim() ? payload.description : null,
      updated_at: '2026-06-08T13:00:00.000Z',
    }

    rooms = rooms.map((room) => (room.id === roomId ? updatedRoom : room))

    return res(ctx.json({ room: updatedRoom }))
  }),

  rest.delete('*/api/rooms/:id', (req, res, ctx) => {
    const roomId = Number(req.params.id)
    rooms = rooms.filter((room) => room.id !== roomId)

    return res(ctx.json({ success: true }))
  }),

  rest.get('*/api/users', async (req, res, ctx) => {
    const url = new URL(req.url.toString())
    const page = Math.max(1, Number(url.searchParams.get('page') ?? '1'))
    const limit = Math.max(1, Number(url.searchParams.get('limit') ?? '5'))
    const offset = (page - 1) * limit

    return res(
      ctx.json({
        users: users.slice(offset, offset + limit),
        roles: roleOptions,
        pagination: {
          page,
          limit,
          total: users.length,
          totalPages: Math.max(1, Math.ceil(users.length / limit)),
        },
      }),
    )
  }),

  rest.post('*/api/users', async (req, res, ctx) => {
    const payload = await readJsonPayload<{
      full_name: string
      email: string
      role: 'profesor' | 'alumno'
      is_active: boolean
      contract_type?: ManagedUser['contract_type']
      category?: ManagedUser['category']
    }>(req)

    const roleId = payload.role === 'profesor' ? 2 : 3
    const newUser: ManagedUser = {
      id: `user-${users.length + 1}`,
      email: payload.email,
      full_name: payload.full_name,
      role_id: roleId,
      is_active: payload.is_active,
      contract_type: payload.role === 'profesor' ? payload.contract_type ?? 'TC' : null,
      category: payload.role === 'profesor' ? payload.category ?? 'Auxiliar' : null,
      created_at: '2026-06-08T12:00:00.000Z',
      updated_at: '2026-06-08T12:00:00.000Z',
      role: {
        id: roleId,
        name: payload.role,
        description: payload.role === 'profesor' ? 'Profesor' : 'Alumno',
      },
    }

    users = [newUser, ...users]

    return res(ctx.status(201), ctx.json({ user: newUser }))
  }),

  rest.put('*/api/users/:id', async (req, res, ctx) => {
    const userId = String(req.params.id)
    const payload = await readJsonPayload<{
      full_name: string
      email: string
      role: 'profesor' | 'alumno'
      is_active: boolean
      contract_type?: ManagedUser['contract_type']
      category?: ManagedUser['category']
    }>(req)

    const currentUser = users.find((user) => user.id === userId)
    if (!currentUser) {
      return res(ctx.status(404), ctx.json({ error: 'Usuario no encontrado' }))
    }

    const roleId = payload.role === 'profesor' ? 2 : 3
    const updatedUser: ManagedUser = {
      ...currentUser,
      email: payload.email,
      full_name: payload.full_name,
      role_id: roleId,
      is_active: payload.is_active,
      contract_type: payload.role === 'profesor' ? payload.contract_type ?? 'TC' : null,
      category: payload.role === 'profesor' ? payload.category ?? 'Auxiliar' : null,
      updated_at: '2026-06-08T13:00:00.000Z',
      role: {
        id: roleId,
        name: payload.role,
        description: payload.role === 'profesor' ? 'Profesor' : 'Alumno',
      },
    }

    users = users.map((user) => (user.id === userId ? updatedUser : user))

    return res(ctx.json({ user: updatedUser }))
  }),

  rest.delete('*/api/users/:id', (req, res, ctx) => {
    const userId = String(req.params.id)
    users = users.filter((user) => user.id !== userId)

    return res(ctx.json({ success: true }))
  }),
]
