-- Añadir campos para docentes (RF-NEW-04, RF-NEW-06)
ALTER TABLE user_profiles
ADD COLUMN contract_type VARCHAR(20) CHECK (contract_type IN ('TC', 'TP', 'Por Horas')),
ADD COLUMN category VARCHAR(50) CHECK (category IN ('Principal', 'Asociado', 'Auxiliar', 'Contratado', 'Jefe de Práctica'));

-- Añadir campos para aulas (RF-NEW-09, RF-NEW-17)
ALTER TABLE rooms
ADD COLUMN authorized_capacity INTEGER CHECK (authorized_capacity > 0 AND authorized_capacity <= 1000),
ADD COLUMN room_type VARCHAR(50) CHECK (room_type IN ('Teórica', 'Laboratorio de Cómputo', 'Laboratorio de Ciencias', 'Auditorio', 'Taller'));

-- Crear tabla de fechas bloqueadas (RF-NEW-21)
CREATE TABLE IF NOT EXISTS blocked_dates (
  id BIGSERIAL PRIMARY KEY,
  date DATE NOT NULL UNIQUE,
  description VARCHAR(255),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_blocked_dates_date ON blocked_dates(date);
CREATE INDEX IF NOT EXISTS idx_blocked_dates_is_active ON blocked_dates(is_active);

CREATE TRIGGER update_blocked_dates_updated_at
BEFORE UPDATE ON blocked_dates
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE blocked_dates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blocked dates are readable by authenticated users" ON blocked_dates
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can insert blocked dates" ON blocked_dates
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

CREATE POLICY "Admins can update blocked dates" ON blocked_dates
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

CREATE POLICY "Admins can delete blocked dates" ON blocked_dates
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
