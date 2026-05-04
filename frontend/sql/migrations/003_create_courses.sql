-- Crear tabla de cursos para gestion academica
CREATE TABLE IF NOT EXISTS courses (
  id BIGSERIAL PRIMARY KEY,
  code VARCHAR(20) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  cycle INTEGER NOT NULL CHECK (cycle BETWEEN 1 AND 12),
  blocks_per_week INTEGER NOT NULL CHECK (blocks_per_week BETWEEN 1 AND 3),
  max_sections INTEGER NOT NULL CHECK (max_sections BETWEEN 1 AND 20),
  kind VARCHAR(20) NOT NULL CHECK (kind IN ('general', 'carrera')),
  description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_courses_code ON courses(code);
CREATE INDEX IF NOT EXISTS idx_courses_cycle ON courses(cycle);
CREATE INDEX IF NOT EXISTS idx_courses_kind ON courses(kind);
CREATE INDEX IF NOT EXISTS idx_courses_is_active ON courses(is_active);

CREATE TRIGGER update_courses_updated_at
BEFORE UPDATE ON courses
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Courses are readable by authenticated users" ON courses
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can insert courses" ON courses
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM user_profiles up
      JOIN roles r ON r.id = up.role_id
      WHERE up.id = auth.uid()
        AND r.name = 'administrador'
    )
  );

CREATE POLICY "Admins can update courses" ON courses
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1
      FROM user_profiles up
      JOIN roles r ON r.id = up.role_id
      WHERE up.id = auth.uid()
        AND r.name = 'administrador'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM user_profiles up
      JOIN roles r ON r.id = up.role_id
      WHERE up.id = auth.uid()
        AND r.name = 'administrador'
    )
  );

CREATE POLICY "Admins can delete courses" ON courses
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1
      FROM user_profiles up
      JOIN roles r ON r.id = up.role_id
      WHERE up.id = auth.uid()
        AND r.name = 'administrador'
    )
  );
