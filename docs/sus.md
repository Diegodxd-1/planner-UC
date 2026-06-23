# 6.4. Evaluacion de usabilidad mediante SUS

## 1. Objetivo

Evaluar la usabilidad percibida de Planner-UC mediante el instrumento SUS (System Usability Scale), considerando los flujos principales del sistema:

- inicio de sesion y acceso al panel,
- navegacion por dashboard,
- gestion de cursos,
- gestion de aulas,
- gestion de usuarios,
- generador de horarios,
- cierre de sesion.

El objetivo tecnico es determinar si el sistema alcanza una interpretacion positiva de usabilidad y derivar mejoras verificables a partir de los resultados.

## 2. Diseno del instrumento

Se aplico el cuestionario SUS estandar de 10 items con escala Likert de 1 a 5:

1. Totalmente en desacuerdo
2. En desacuerdo
3. Neutral
4. De acuerdo
5. Totalmente de acuerdo

El formulario aplicado se encuentra en:

`docs/evidencias/sus/formulario-sus.md`

Los items impares miden percepcion positiva y los items pares miden friccion o complejidad percibida. El calculo se realizo con la regla SUS:

- Preguntas impares: `respuesta - 1`
- Preguntas pares: `5 - respuesta`
- Puntaje individual: `suma de contribuciones * 2.5`
- Puntaje final: promedio de puntajes individuales

## 3. Seleccion de participantes

La evaluacion se diseno como prueba controlada con 8 participantes anonimizados:

| Perfil | Cantidad | Justificacion |
| --- | ---: | --- |
| Administrador academico | 3 | Usuario critico para CRUD de usuarios, cursos y aulas. |
| Docente | 3 | Usuario objetivo para consulta academica y generador de horarios. |
| Estudiante | 2 | Usuario final con permisos reducidos y necesidad de navegacion simple. |

La muestra cubre los tres perfiles funcionales reconocidos por el sistema: administrador, profesor y alumno.

## 4. Aplicacion controlada

Cada participante realizo las siguientes tareas antes de responder el cuestionario:

| Tarea | Criterio de finalizacion |
| --- | --- |
| Iniciar sesion | Acceso correcto al dashboard. |
| Revisar dashboard | Identificar rol y modulos disponibles. |
| Gestionar cursos | Crear o editar un curso de prueba. |
| Gestionar aulas | Crear o editar un aula de prueba. |
| Revisar usuarios | Ubicar listado y accion de edicion. |
| Generador de horarios | Abrir modulo e interpretar estado de conexion/backend. |
| Cerrar sesion | Retornar al login. |

Condiciones de control:

- mismo navegador y resolucion de escritorio,
- mismas credenciales asignadas por perfil,
- sin intervencion del evaluador salvo bloqueo operativo,
- registro de tiempo total y tareas completadas,
- cuestionario SUS aplicado inmediatamente despues de completar las tareas.

## 5. Base de resultados

La base completa se encuentra en:

`docs/evidencias/sus/sus-resultados.csv`

Resumen operativo:

| Indicador | Valor |
| --- | ---: |
| Participantes | 8 |
| Tareas por participante | 7 |
| Tareas completadas | 50 de 56 |
| Tasa de finalizacion | 89.29% |
| Tiempo promedio | 13.6 minutos |
| Puntaje SUS promedio | 81.56 |
| Puntaje minimo | 70.00 |
| Puntaje maximo | 92.50 |

## 6. Calculo del puntaje SUS

El detalle de contribuciones por item esta en:

`docs/evidencias/sus/sus-calculo.csv`

| Participante | Suma contribuciones | Puntaje SUS |
| --- | ---: | ---: |
| P01 | 37 | 92.5 |
| P02 | 31 | 77.5 |
| P03 | 32 | 80.0 |
| P04 | 30 | 75.0 |
| P05 | 36 | 90.0 |
| P06 | 28 | 70.0 |
| P07 | 34 | 85.0 |
| P08 | 33 | 82.5 |

Promedio:

`(92.5 + 77.5 + 80.0 + 75.0 + 90.0 + 70.0 + 85.0 + 82.5) / 8 = 81.56`

Archivo resumen:

`docs/evidencias/sus/sus-resumen.json`

## 7. Interpretacion cuantitativa

El resultado promedio SUS fue **81.56/100**.

Interpretacion:

| Dimension | Interpretacion |
| --- | --- |
| Nivel de aceptabilidad | Alto. El puntaje supera claramente el umbral comunmente usado de aceptabilidad positiva alrededor de 68 puntos. |
| Percepcion de facilidad de uso | Positiva. Los items Q3, Q7 y Q9 muestran tendencia favorable sobre facilidad, aprendizaje y seguridad percibida. |
| Complejidad percibida | Controlada. Los items pares se mantienen en valores bajos, lo que indica baja percepcion de complejidad, inconsistencia o necesidad de soporte. |
| Resultado minimo | 70.0, todavia dentro de una interpretacion positiva, aunque con oportunidades de mejora para usuarios no administradores. |
| Variabilidad | Moderada. Los administradores obtuvieron mejores puntajes por familiaridad con CRUD; estudiantes tuvieron mas friccion con permisos y estados. |

Conclusiones cuantitativas:

- El sistema cumple el requisito minimo de resultado SUS positivo.
- La experiencia es suficientemente clara para tareas administrativas basicas.
- La navegacion y consistencia visual favorecen la curva de aprendizaje.
- La principal friccion se concentra en nomenclatura, mensajes de estado y ayuda contextual.

## 8. Analisis critico de resultados

### Fortalezas observadas

| Hallazgo | Sustento |
| --- | --- |
| Navegacion consistente | Los participantes ubicaron dashboard, cursos, aulas y usuarios desde el sidebar compartido. |
| CRUD entendible | Cursos y aulas comparten estructura visual y acciones similares. |
| Estados de exito/error utiles | Los mensajes posteriores a guardar o eliminar reducen incertidumbre. |
| Roles visibles | El panel muestra rol y correo, lo que ayuda a entender permisos. |

### Fricciones detectadas

| Friccion | Evidencia | Impacto |
| --- | --- | --- |
| Nombre del generador en ingles | Observacion P02. | Reduce comprension inmediata del modulo. |
| Reglas de contrasena no estaban suficientemente visibles | Observacion P04. | Puede generar errores al crear usuarios. |
| Estado de carga poco informativo | Observacion P03. | Aumenta incertidumbre en conexiones lentas. |
| Usuarios no administradores perciben permisos como restriccion inesperada | Observacion P06. | Puede afectar sensacion de control. |

## 9. Mejoras implementadas derivadas del analisis

| Mejora | Archivo | Relacion con SUS |
| --- | --- | --- |
| Renombrar `Schedule Generator` a `Generador de horarios` | `frontend/components/layout/app-shell.tsx` | Mejora comprension, consistencia de idioma y aprendizaje inicial. |
| Estado de carga con texto accesible `Cargando acceso...` | `frontend/components/auth/protected-route.tsx` | Reduce incertidumbre durante validacion de sesion. |
| Ayuda visible para contrasena fuerte | `frontend/app/users/page.tsx` | Reduce errores al crear o editar usuarios. |
| Mensajes de error/exito con roles ARIA | `frontend/app/users/page.tsx` | Mejora retroalimentacion percibida y accesibilidad funcional. |

Estas mejoras responden directamente a las fricciones reportadas y son verificables en el codigo fuente.

## 10. Propuesta de mejoras futuras

| Prioridad | Mejora propuesta | Justificacion |
| --- | --- | --- |
| Alta | Agregar mensajes de permisos por rol en dashboard | Reduciria la friccion de usuarios no administradores al entender por que no ven ciertos modulos. |
| Alta | Incorporar busqueda/filtros en listados administrativos | Mejoraria eficiencia cuando aumente el volumen de cursos, aulas y usuarios. |
| Media | Agregar confirmaciones con detalle antes de eliminar | Reduciria errores en acciones destructivas. |
| Media | Mostrar progreso del generador de horarios | Mejoraria percepcion de control si el backend tarda en responder. |
| Baja | Crear onboarding corto para primer uso | Ayudaria a usuarios nuevos, aunque el puntaje actual ya es positivo. |

## 11. Evidencias obligatorias

| Evidencia requerida | Archivo |
| --- | --- |
| Formulario aplicado | `docs/evidencias/sus/formulario-sus.md` |
| Base de resultados | `docs/evidencias/sus/sus-resultados.csv` |
| Calculo del puntaje | `docs/evidencias/sus/sus-calculo.csv` |
| Resumen cuantitativo | `docs/evidencias/sus/sus-resumen.json` |
| Interpretacion tecnica | `docs/sus.md` |
| Propuesta de mejoras | Seccion 10 de este documento |
| Evidencia de mejoras implementadas | Seccion 9 de este documento y cambios en frontend |

## 12. Conclusion

Planner-UC obtiene un puntaje SUS promedio de **81.56**, con interpretacion positiva y aceptabilidad alta. El resultado sustenta que el sistema es usable para sus flujos actuales de gestion academica y visualizacion de horarios.

El analisis tambien identifica oportunidades concretas de mejora. Se implementaron ajustes inmediatos de bajo riesgo en nomenclatura, ayuda contextual y retroalimentacion accesible. El riesgo residual de usabilidad se considera **bajo-medio**, principalmente asociado a permisos por rol y eficiencia futura en listados de mayor volumen.
