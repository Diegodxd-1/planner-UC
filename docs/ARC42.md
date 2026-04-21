# Arquitectura del Sistema - Estándar ARC42

Este documento centraliza la documentación técnica del sistema **Planner-UC** siguiendo las directrices del estándar **arc42** para asegurar claridad, consistencia y trazabilidad.

---

## 1. Introducción y Metas
Describe los objetivos del sistema y las metas de calidad.
*   **Visión**: [Declaración de la Visión](inicio/Declaración%20de%20la%20visión%20del%20proyecto.md)
*   **Problema Real**: [Análisis del Problema Complejo](inicio/Documento%20inicial%20del%20problema%20(primer%20borrador).md)

## 2. Restricciones de Arquitectura
Limitaciones de diseño, técnicas o de negocio validadas con stakeholders.
*   **Restricciones**: [Registro de Supuestos y Restricciones](inicio/Registro%20de%20supuestos%20y%20restricciones.md)

## 3. Contexto y Alcance
Delimitación de las fronteras operativas y de negocio.
*   **Alcance y Metas**: [Project Charter](inicio/Project%20Charter.md)

## 4. Estrategia de Solución
Decisiones tecnológicas fundamentales y justificaciones.
*   **Justificación Técnica**: [Documento de Selección del Enfoque](inicio/Documento%20de%20selección%20del%20enfoque%20del%20proyecto.md)

## 5. Vista de Bloques
Descomposición lógica en módulos principales (React, Node.js, MongoDB).
*   *Nota: El detalle de componentes internos se desarrollará en la Fase de Elaboración.*

## 6. Vista de Ejecución
Interacción entre los bloques en tiempo de ejecución (Ej: Generación de horario).
*   *TBD: Se definirá mediante diagramas de secuencia en el Sprint 1.*

## 7. Vista de Despliegue
Infraestructura de hardware y software (Vercel, Render, MongoDB Atlas).
*   *TBD: Documentación de despliegue en etapa de pruebas.*

## 8. Conceptos Transversales
Reglas de negocio y arquitecturales de aplicación global.
*   *TBD: Seguridad (JWT), Manejo de Errores y Logging.*

## 9. Decisiones de Arquitectura
Registro de decisiones críticas (ADR) tomadas durante el proyecto.
*   *Decisión 1: Uso de Stack MERN para agilidad de desarrollo.*

## 10. Requerimientos de Calidad
Atributos de calidad formulados bajo el enfoque **SMART**.
*   **Calidad de Software**: [Lista de RF y RNF](inicio/Lista%20preliminar%20de%20requerimientos%20funcionales%20y%20no%20funcionales.md)
*   **Priorización de Valor**: [Product Backlog](inicio/Product%20Backlog.md)


## 11. Riesgos y Deuda Técnica
Identificación de riesgos técnicos y planes de mitigación.
*   *Riesgo 1: Complejidad del modelado matemático del algoritmo (Hito 3).*

## 12. Glosario
Términos técnicos y de negocio unificados.
*   [Glosario de Términos](otros/Glosario.md) (En construcción)

---
*Documentación completa siguiendo el estándar arc42 para el Proyecto Planner-UC (2026).*
