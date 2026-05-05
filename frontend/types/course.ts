export type CourseKind = 'general' | 'carrera';

export interface Course {
  id: number;
  code: string;
  name: string;
  cycle: number;
  blocks_per_week: number;
  max_sections: number;
  kind: CourseKind;
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CourseInput {
  code: string;
  name: string;
  cycle: number;
  blocks_per_week: number;
  max_sections: number;
  kind: CourseKind;
  description: string;
  is_active: boolean;
}
