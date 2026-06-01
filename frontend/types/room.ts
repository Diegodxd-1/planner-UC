export type RoomType = 'Teórica' | 'Laboratorio de Cómputo' | 'Laboratorio de Ciencias' | 'Auditorio' | 'Taller';

export interface Room {
  id: number;
  name: string;
  location: string | null;
  capacity: number;
  authorized_capacity: number | null;
  room_type: RoomType | null;
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface RoomInput {
  name: string;
  location: string;
  capacity: number;
  authorized_capacity: number;
  room_type: RoomType;
  description: string;
  is_active: boolean;
}
