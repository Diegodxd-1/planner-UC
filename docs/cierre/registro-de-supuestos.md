# 5. Registro de Supuestos

## 5.1. Objetivo

Registrar las condiciones consideradas verdaderas durante la planificación, evaluar su validación durante la ejecución y documentar su impacto.

## 5.2. Estados

| Estado | Significado |
| --- | --- |
| Validado | Existe evidencia suficiente. |

## 5.3. Registro

| ID | Supuesto | Impacto potencial | Validación | Estado |
| --- | --- | --- | --- | --- |
| SUP-02 | Cada curso tiene un docente responsable. | Permite establecer responsabilidad académica sobre cada curso. | La regla fue ratificada dentro del modelo de dominio y de los perfiles docentes administrados por el sistema. | Validado |
| SUP-03 | Los docentes tienen disponibilidad definida. | Permite planificar asignaciones compatibles con la jornada académica. | La disponibilidad fue confirmada como información de entrada necesaria para la planificación académica. | Validado |
| SUP-04 | Un aula solo puede usarse por una sección en un bloque. | Evita conflictos físicos. | Restricción implementada y probada. | Validado |
| SUP-06 | El administrador será el usuario principal de gestión. | Define permisos y CRUD. | Operaciones sensibles exclusivas del administrador. | Validado |
| SUP-18 | Las pruebas controlarían las regresiones principales. | Reduce la probabilidad de reintroducir defectos corregidos. | Las suites frontend y backend finalizaron sin fallos y SonarQube reportó 80.1% de cobertura global. | Validado |

## 5.4. Resultado de validación

Los cinco supuestos conservados fueron validados dentro del alcance del MVP mediante reglas de dominio, controles administrativos, restricciones del solver y pruebas automatizadas.

---

# 6. Conclusión general

Los registros muestran que los principales problemas técnicos del MVP fueron tratados mediante pruebas, análisis estático, controles de seguridad, accesibilidad y refactorización.

Los 11 incidentes registrados están cerrados, los 15 defectos documentados fueron corregidos y los cinco supuestos conservados fueron validados dentro del alcance del MVP. De los ocho impedimentos registrados, cinco fueron resueltos, dos fueron mitigados total o parcialmente y uno permanece abierto. Las acciones posteriores deben administrarse como iniciativas de mejora y no como defectos o supuestos pendientes de este cierre.
