# REGISTRO DE SUPUESTOS Y RESTRICCIONES

## Supuestos

Los supuestos representan condiciones que se consideran verdaderas para el desarrollo del proyecto, aunque no estén completamente validadas. Estos permiten establecer un marco de referencia para el modelado del problema y la implementación del sistema.

- La universidad dispone de una estructura académica organizada en términos de cursos, docentes y aulas, lo cual permite modelar las entidades principales del sistema.
- Cada curso tiene asignado al menos un docente responsable, lo que permite establecer relaciones claras entre cursos y recursos humanos dentro del sistema.
- Los docentes cuentan con horarios de disponibilidad previamente definidos, lo cual es necesario para modelar restricciones y evitar conflictos en la asignación de horarios.
- Cada aula puede ser utilizada por un solo curso en un mismo horario, lo que constituye una restricción fundamental en el problema de generación de horarios.
- Los cursos tienen una duración definida dentro del horario académico, lo que permite estructurar bloques de tiempo para la asignación.
- Los coordinadores académicos son responsables de la planificación de horarios y actuarán como principales usuarios del sistema, validando los resultados generados.
- Se contará con datos representativos (aunque no completos) para modelar el problema y realizar pruebas del sistema en un entorno controlado.
- Los integrantes del equipo cuentan con conocimientos en desarrollo web, lo que permite implementar el sistema utilizando tecnologías modernas sin una curva de aprendizaje elevada.
- El equipo tiene acceso a herramientas de desarrollo como repositorios de código, entornos de programación y plataformas de despliegue.

**Restricciones**

Las restricciones representan condiciones que limitan o condicionan el desarrollo del proyecto, influyendo directamente en su alcance, diseño e implementación.

- El proyecto debe desarrollarse dentro del periodo académico establecido de 16 semanas, lo que limita el alcance del sistema y exige una planificación adecuada del tiempo.
- El sistema será desarrollado como un Producto Mínimo Viable (PMV), por lo que se implementarán únicamente las funcionalidades esenciales para la generación de horarios.
- El sistema deberá desarrollarse utilizando el stack tecnológico MERN (MongoDB, Express, React y Node.js), debido a la experiencia del equipo y la necesidad de reducir la complejidad técnica.
- El desarrollo se realizará en equipo, lo que implica la necesidad de coordinación, control de versiones y organización del trabajo.
- El proyecto debe gestionarse utilizando metodologías ágiles, específicamente Scrum, permitiendo iteraciones cortas y adaptación a cambios.
- El código fuente deberá almacenarse en un repositorio de GitHub, utilizando Git como sistema de control de versiones.
- El repositorio deberá evidenciar el trabajo colaborativo mediante el uso de commits, ramas y pull requests.
- El sistema deberá implementar una arquitectura separada en frontend y backend, garantizando organización y escalabilidad básica.
- La documentación del proyecto deberá estructurarse en archivos independientes en formato Markdown, accesibles desde un archivo principal README.
- El sistema deberá ser accesible desde navegadores web modernos, sin requerir instalación adicional.
- No se contará con integración a sistemas institucionales reales ni con datos completos en producción, por lo que el sistema será validado en un entorno controlado.

**Validación de las restricciones**

Las restricciones del proyecto han sido definidas considerando factores técnicos, académicos y organizacionales. En particular, se han tomado en cuenta el tiempo disponible del proyecto (16 semanas), la experiencia del equipo en tecnologías web y los lineamientos establecidos por el curso.

Asimismo, estas restricciones han sido contrastadas con la naturaleza del problema, asegurando su viabilidad y pertinencia. Por ejemplo, la elección del stack MERN responde a la necesidad de reducir la curva de aprendizaje, mientras que el enfoque PMV permite ajustar el alcance del sistema al tiempo disponible.

En este sentido, las restricciones no solo limitan el proyecto, sino que también orientan la toma de decisiones técnicas y metodológicas, contribuyendo a un desarrollo realista y alcanzable.

**Coherencia entre supuestos y restricciones**

Se evidencia coherencia entre los supuestos y las restricciones del proyecto, ya que ambos elementos se complementan en la definición del alcance y enfoque del sistema.

Por ejemplo, el supuesto de que el equipo cuenta con conocimientos en desarrollo web es consistente con la restricción de utilizar el stack MERN, lo cual reduce la complejidad técnica y facilita la implementación.

Asimismo, el supuesto de disponibilidad de datos representativos se relaciona con la restricción de no contar con datos reales completos, lo que implica que el sistema será evaluado en un entorno controlado.

Finalmente, la decisión de desarrollar el sistema como un Producto Mínimo Viable (PMV) es coherente con la restricción del tiempo disponible (16 semanas), lo que implica priorizar funcionalidades esenciales y evitar una expansión innecesaria del alcance.

En conjunto, no se identifican contradicciones entre los supuestos y las restricciones, lo que garantiza la consistencia del planteamiento del proyecto.