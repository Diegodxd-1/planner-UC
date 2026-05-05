CREATE TABLE IF NOT EXISTS rooms (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL UNIQUE,
  location VARCHAR(255),
  capacity INTEGER NOT NULL CHECK (capacity > 0 AND capacity <= 1000),
  description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_rooms_name ON rooms(name);
CREATE INDEX IF NOT EXISTS idx_rooms_capacity ON rooms(capacity);
CREATE INDEX IF NOT EXISTS idx_rooms_is_active ON rooms(is_active);

CREATE TRIGGER update_rooms_updated_at
BEFORE UPDATE ON rooms
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Rooms are readable by authenticated users" ON rooms
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can insert rooms" ON rooms
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

CREATE POLICY "Admins can update rooms" ON rooms
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

CREATE POLICY "Admins can delete rooms" ON rooms
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
