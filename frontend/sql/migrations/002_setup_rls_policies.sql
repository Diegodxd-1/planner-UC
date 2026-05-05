-- Habilitar Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;

-- Políticas para tabla roles (lectura pública para usuarios autenticados)
CREATE POLICY "Roles are readable by authenticated users" ON roles
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Políticas para tabla user_profiles
-- Los usuarios pueden ver su propio perfil
CREATE POLICY "Users can view their own profile" ON user_profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Los usuarios pueden actualizar su propio perfil (excepto el rol)
CREATE POLICY "Users can update their own profile" ON user_profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id 
    AND role_id = (
      SELECT role_id FROM user_profiles WHERE id = auth.uid()
    )
  );
