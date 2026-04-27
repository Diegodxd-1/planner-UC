# CP-SAT en este proyecto

Este documento explica especificamente que es `CP-SAT`, que algoritmos o tecnicas usa, y como se aplica en este proyecto de generacion de oferta horaria.

## Que es CP-SAT

`CP-SAT` es el solver principal de optimizacion combinatoria de `Google OR-Tools`.

El nombre viene de:

- `CP`: `Constraint Programming`
- `SAT`: `Boolean Satisfiability`

Dicho de forma simple:

- `Constraint Programming` significa modelar un problema con reglas o restricciones
- `SAT` significa resolver decisiones logicas del tipo verdadero o falso

Entonces, `CP-SAT` combina:

- programacion por restricciones
- satisfaccion booleana
- programacion entera

para resolver problemas donde hay muchas decisiones discretas y muchas reglas que deben cumplirse al mismo tiempo.

## Como explicarlo en una frase

Una forma clara de decirlo es:

> CP-SAT es un motor de optimizacion que prueba combinaciones posibles de decisiones discretas, descarta las que rompen restricciones y busca la mejor solucion segun una funcion objetivo.

## Que tipo de problemas resuelve bien

CP-SAT funciona muy bien cuando el problema tiene:

- decisiones de si o no
- asignaciones de recursos
- horarios
- choques entre actividades
- limites de capacidad
- reglas logicas entre variables

Por eso es muy usado en:

- timetabling
- scheduling
- asignacion de personal
- produccion
- ruteo con reglas discretas
- apertura de secciones o cursos

## Que algoritmo usa realmente CP-SAT

`CP-SAT` no es un unico algoritmo sencillo como:

- bubble sort
- dijkstra
- greedy puro

Mas bien es un solver hibrido que combina varias ideas.

## Tecnicas internas que usa CP-SAT

### 1. Propagacion de restricciones

Esta es una de las ideas centrales de `Constraint Programming`.

Cuando una variable toma cierto valor, muchas otras opciones dejan de ser posibles.

Ejemplo didactico:

- si una seccion ocupa `Aula 101` en `Lun 07:00`
- entonces cualquier otra seccion que quiera usar esa misma aula en ese mismo bloque queda prohibida

Eso se llama `propagacion`: una decision reduce automaticamente el espacio de busqueda.

## 2. Variables booleanas y logica SAT

Muchas decisiones del modelo se representan como variables booleanas:

- `1`: abrir una seccion
- `0`: no abrirla

CP-SAT transforma gran parte del problema en relaciones logicas entre booleanos y usa tecnicas de solucion de problemas `SAT`.

Eso lo vuelve muy potente para manejar:

- implicaciones
- exclusiones
- decisiones mutuamente incompatibles

## 3. Branch and bound

Cuando el problema es de optimizacion, no basta con encontrar cualquier solucion.
Hay que encontrar la mejor.

Para eso CP-SAT usa ideas de `branch and bound`:

- explora ramas del espacio de soluciones
- calcula cuando una rama ya no puede mejorar la mejor solucion actual
- corta esa rama y deja de perder tiempo alli

Didacticamente:

- no revisa todo a ciegas
- poda muchas opciones malas antes de terminarlas

## 4. Busqueda en arbol

Internamente el solver explora un arbol de decisiones.

Cada nodo del arbol representa elecciones parciales, por ejemplo:

- abrir cierto curso
- elegir cierta aula
- descartar cierto patron horario

A medida que avanza:

- algunas ramas quedan invalidadas por restricciones
- otras siguen vivas
- otras se podan porque ya son peores que una solucion encontrada

## 5. Programacion entera

CP-SAT tambien trabaja con variables enteras, no solo booleanas.

En este proyecto aparecen variables como:

- demanda no cubierta
- exceso de capacidad

Esas variables se usan para medir calidad de la solucion y construir la funcion objetivo.

## 6. Corte de soluciones imposibles o poco utiles

El solver usa muchas tecnicas internas para detectar rapidamente:

- contradicciones
- simetrias innecesarias
- ramas que no pueden mejorar el objetivo

No hace fuerza bruta pura.

Lo importante para explicar es:

- explora inteligentemente
- propaga restricciones
- poda ramas
- busca un optimo o una buena solucion factible

## Entonces CP-SAT que hace en si

En palabras simples, `CP-SAT` hace esto:

1. Recibe variables, restricciones y una funcion objetivo.
2. Convierte el problema a una forma interna adecuada para el solver.
3. Explora combinaciones posibles de valores.
4. Elimina temprano combinaciones imposibles.
5. Compara soluciones factibles encontradas.
6. Se queda con la mejor segun el objetivo definido.

## Diferencia entre encontrar una solucion y optimizar

Hay dos niveles:

- `satisfaccion`: encontrar una solucion que cumpla todas las restricciones
- `optimizacion`: encontrar la mejor solucion entre todas las factibles

En este proyecto usamos el segundo caso.

No queremos solo un horario valido.
Queremos el horario valido mas conveniente segun ciertos criterios.

## Que significa que sea un solver exacto

CP-SAT es un solver exacto de optimizacion discreta.

Eso significa que, si tiene tiempo suficiente, puede demostrar:

- que encontro la solucion optima
- o que cierta solucion no existe

En la practica, a veces se le da un limite de tiempo.
En ese caso puede devolver:

- la solucion optima
- o una solucion factible muy buena encontrada dentro del tiempo dado

En este proyecto se usa:

- `max_time_in_seconds = 10`

Entonces el solver tiene hasta 10 segundos para buscar.

## Que significa el estado de solucion

En OR-Tools normalmente aparecen estados como:

- `OPTIMAL`: encontro y demostro la mejor solucion posible
- `FEASIBLE`: encontro una solucion valida, aunque no necesariamente pudo probar que es la mejor
- `INFEASIBLE`: no existe solucion que cumpla las restricciones

En este proyecto se acepta:

- `OPTIMAL`
- `FEASIBLE`

## Como se usa CP-SAT en este proyecto

El archivo principal es:

- [backend/app/scheduling_demo.py](/e:/Me/2026-1/planner-UC/backend/app/scheduling_demo.py)

La libreria se importa asi:

```python
from ortools.sat.python import cp_model
```

Luego se crea el modelo:

```python
model = cp_model.CpModel()
```

Y al final se crea el solver:

```python
solver = cp_model.CpSolver()
status = solver.Solve(model)
```

## Como esta modelado el problema aqui

En este proyecto, cada posible apertura de seccion se modela como una variable booleana.

Esa variable responde a algo como:

- abrir o no abrir el curso
- en cierta seccion
- en cierta aula
- con cierto patron horario

Ejemplo conceptual:

- abrir `CS101`, seccion 1, en `Aula 101`, martes y jueves a cierta hora

Eso se representa como una decision binaria.

## Restricciones que CP-SAT hace cumplir aqui

### 1. No choque de aulas

Si dos secciones quieren la misma aula en el mismo bloque, el modelo obliga a que como maximo una quede activa.

### 2. Maximo de secciones por curso

Cada curso tiene un limite de secciones y el modelo no puede superarlo.

### 3. Consistencia de numeracion

No se permite abrir seccion 2 si no se abrio antes la seccion 1.

### 4. Una misma seccion no puede existir en dos variantes al mismo tiempo

La misma seccion numerada no puede estar a la vez en varias aulas o con varios patrones horarios.

## Funcion objetivo en este proyecto

Aqui CP-SAT no solo busca una solucion valida.
Busca minimizar una funcion objetivo que combina:

- demanda no cubierta
- capacidad excedente
- cantidad de secciones abiertas
- penalizacion por horarios poco convenientes
- penalizacion por patrones poco compactos

Y ademas se favorece ligeramente abrir mas cursos distintos.

## Como interpretarlo

Eso significa que el solver intenta:

- cubrir la mayor cantidad posible de demanda
- no abrir demasiada capacidad ociosa
- evitar abrir secciones innecesarias
- preferir mejores horarios
- preferir patrones mas ordenados

## Que NO hace CP-SAT por si solo

CP-SAT no sabe nada de universidades por defecto.

No entiende automaticamente:

- que es un curso
- que es una seccion
- que significa una demanda
- que horario es mejor

Todo eso lo define el programador mediante:

- variables
- restricciones
- penalizaciones
- funcion objetivo

O sea:

- `CP-SAT` pone el motor matematico
- el modelo del negocio lo ponemos nosotros

## Como explicarselo al ingeniero

Una version tecnica pero clara podria ser:

> Estamos usando OR-Tools CP-SAT, que es un solver de optimizacion combinatoria basado en programacion por restricciones, SAT y programacion entera. Modelamos cada posible seccion como una variable booleana y agregamos restricciones de capacidad, no superposicion y consistencia. Luego optimizamos una funcion objetivo que prioriza cubrir demanda y mantener horarios razonables.

Una version mas simple:

> No usamos una regla manual para armar horarios. Usamos un solver matematico que evalua combinaciones posibles, elimina las que violan reglas y elige la mejor segun cobertura de demanda, capacidad y calidad del horario.

## Como defender por que se eligio CP-SAT

Se puede justificar asi:

- el problema tiene muchas decisiones discretas
- hay bastantes restricciones logicas
- las combinaciones crecen muy rapido
- una solucion manual o greedy puede perder calidad facilmente
- CP-SAT esta diseñado precisamente para ese tipo de problemas

## Palabras clave correctas para mencionarlo

Si te preguntan por el nombre tecnico, puedes decir:

- `Constraint Programming`
- `SAT solving`
- `combinatorial optimization`
- `integer optimization`
- `constraint-based scheduling`

Si quieres una frase corta y fuerte:

> Es un problema de optimizacion combinatoria resuelto con OR-Tools CP-SAT.

## Limites de este enfoque

Aunque CP-SAT es muy potente, la calidad depende de:

- como se modele el problema
- que restricciones se definan
- como se pondera la funcion objetivo
- cuanto tiempo de busqueda se le permita

Si el modelo esta mal planteado, el solver igual optimizara algo, pero no necesariamente lo que realmente queremos.

## Resumen final

`CP-SAT` en este proyecto es el motor que decide la mejor combinacion de secciones, aulas y patrones horarios cumpliendo restricciones.

No es una heuristica simple.
Es un solver exacto de optimizacion discreta que combina:

- propagacion de restricciones
- logica booleana tipo SAT
- busqueda en arbol
- poda de ramas
- optimizacion entera

Y todo eso se aplica para encontrar una oferta horaria factible y conveniente.
