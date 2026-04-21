# Backend

Backend basico con FastAPI.

## Como correrlo por el momento

Desde la carpeta `backend`, ejecuta:

```powershell
uv run uvicorn app.main:app --reload
```

El servidor queda corriendo en:

```text
http://127.0.0.1:8000
```

Para probar que esta funcionando, abre:

```text
http://127.0.0.1:8000/
```

Deberias ver una respuesta como:

```json
{
  "message": "Esta corriendo"
}
```
