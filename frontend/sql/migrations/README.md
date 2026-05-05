# Migraciones de Base de Datos para Supabase

Este directorio contiene las migraciones SQL necesarias para configurar la autenticación y roles en Supabase.

## Orden de ejecución

1. **001_create_roles.sql** - Crea las tablas de roles y perfiles de usuario
   - Tabla `roles` con roles predeterminados (administrador, profesor, alumno)
   - Tabla `user_profiles` vinculada a auth.users de Supabase
   - Índices para optimización
   - Trigger para actualizar `updated_at`

2. **002_setup_rls_policies.sql** - Configura las políticas de Row Level Security (RLS)
   - Políticas de lectura para roles (pública)
   - Políticas de lectura para perfiles (usuario propio + admins)
   - Políticas de actualización y eliminación (solo admins)

## Cómo ejecutar

### Opción 1: Usar Supabase Dashboard

1. Ve a tu proyecto en Supabase Console
2. Navega a `SQL Editor`
3. Copia y pega el contenido de cada archivo en orden
4. Ejecuta cada migración

### Opción 2: Usar Supabase CLI

```bash
# Instalar Supabase CLI (si no lo tienes)
npm install -g supabase

# Conectar a tu proyecto
supabase link --project-ref YOUR_PROJECT_REF

# Ejecutar migraciones
supabase db push
```

## Estructura de datos

### Tabla: roles
```sql
- id: SERIAL (PK)
- name: VARCHAR(50) UNIQUE
- description: TEXT
- created_at: TIMESTAMP
```

### Tabla: user_profiles
```sql
- id: UUID (FK -> auth.users.id)
- email: VARCHAR(255) UNIQUE
- full_name: VARCHAR(255)
- role_id: INTEGER (FK -> roles.id)
- phone: VARCHAR(20)
- is_active: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

## Roles disponibles

1. **administrador** - Acceso total al sistema
2. **profesor** - Acceso a gestión de cursos y calificaciones
3. **alumno** - Acceso a ver horarios y calificaciones

## Notas de seguridad

- RLS está habilitado en todas las tablas
- Los usuarios solo pueden ver/modificar su propio perfil
- Los administradores tienen acceso total
- Los roles se actualiza automáticamente
- Las contraseñas se manejan mediante auth.users de Supabase
