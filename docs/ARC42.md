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
Interacción entre los bloques en tiempo de ejecución.
*   **Flujo Principal**: El frontend (Next.js) solicita una solución al endpoint `/api/scheduling-demo`. El backend (FastAPI) construye el modelo matemático y lo resuelve usando Google OR-Tools (CP-SAT), devolviendo el JSON con la oferta óptima.

## 7. Vista de Despliegue
Infraestructura de hardware y software.
*   **Frontend**: Desplegado en Vercel para optimización de React.
*   **Backend**: Alojado en Render o AWS Lambda para ejecución de Python.
*   **Base de Datos**: MongoDB Atlas para persistencia escalable.

## 8. Conceptos Transversales
Reglas de negocio y arquitecturales de aplicación global.
*   **Seguridad**: Autenticación mediante JWT y protección de rutas en el middleware de Next.js.
*   **Manejo de Errores**: Middleware global en FastAPI para capturar excepciones del solver y devolver códigos HTTP adecuados.
*   **Logging**: Registro centralizado en consola y archivos de texto para auditoría de soluciones generadas.

## 9. Decisiones de Arquitectura
Registro de decisiones críticas (ADR) tomadas durante el proyecto.
*   **Decisión 1**: Uso de Stack FastAPI + OR-Tools para garantizar tiempos de respuesta en optimización combinatoria.
*   **Decisión 2**: Arquitectura desacoplada (Decoupled) para permitir escalabilidad independiente del motor de cálculo.

## 10. Requerimientos de Calidad
Atributos de calidad formulados bajo el enfoque **SMART**.
*   **Calidad de Software**: [Lista de RF y RNF](inicio/Lista%20preliminar%20de%20requerimientos%20funcionales%20y%20no%20funcionales.md)

## 11. Riesgos y Deuda Técnica
Identificación de riesgos técnicos y planes de mitigación.
*   *Riesgo 1: Complejidad del modelado matemático del algoritmo (Hito 3).*

## 12. Glosario
Términos técnicos y de negocio unificados.
*   [Glosario de Términos](otros/Glosario.md) (Actualizado)

---
*Documentación completa siguiendo el estándar arc42 para el Proyecto Planner-UC (2026).*
