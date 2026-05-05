export interface Room {
  id: number;
  name: string;
  location: string | null;
  capacity: number;
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface RoomInput {
  name: string;
  location: string;
  capacity: number;
  description: string;
  is_active: boolean;
}
