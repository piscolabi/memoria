---
date: 2025-04-11
linkTitle: "Final G1"
title: Final Prácticas Programación II - Grupo 1
description: ""
math: true
sidebar:
  exclude: true
  hide: true
toc: true
---


{{% details title="Exame sen formato" closed="true" %}}
Grupo 1-Curso 2023-2024

EJERCICIO 1 (7 PUNTOS)

En el baloncesto, las estadísticas son muy importantes a la hora de analizar los rivales y preparar los partidos. Los jugadores del equipo del Obradoiro C.A.B de baloncesto de Santiago de Compostela necesitan de la programación e inteligencia artificial para procesar los datos del equipo y así planificar el siguiente partido debidamente.

La información del equipo se presenta en dos archivos de texto diferentes.

1) Jugadores.txt con los siguientes campos: nombre, edad, altura, peso, posición (base, alero o pivot).

2) Estadísticas.txt con los siguientes campos: nombre, puntos_partido, minutos_en_pista, rebotes, asistencias, porcentaje_triples, sueldo.

Crea un programa con Programación Orientada a Objetos que lea la información de los archivos proporcionados y cree instancias de las clases que propongas. Es obligatorio el uso de herencia y composición en la implementación de las clases. Fijate que existen algunas estadísticas propias de cada posición (bases-asistencias, aleros-% de triples, pivots-rebotes), es decir, si aparecen con valor O en el archivo, no existe esa estadística para ese jugador.

El programa debe implementar una funcionalidad que nos diga cuales son los jugadores jóvenes (<25 años) que más puntos anotan por partido con un sueldo bajo (<555000).

EJERCICIO 2 (3 PUNTOS)

Ha llegado el final de la temporada y el director deportivo y el entrenador deben conformar la plantilla de la temporada siguiente. Para ello deben ordenar a los jugadores de mejor a peor, teniendo en cuenta su rendimiento de la temporada, para saber si pueden renovarlos o no. La ordenación de los jugadores se calculará en base a la siguiente fórmula:

Valor_jugador = puntos_partido/sueldo + minutos_en_pista*edad

Donde a más valoración, más importante debe ser ese jugador. Imprime los jugadores de más valorados a menos valorados.


<u> Para la gestión inicial de los objetos no se puede utilizar las listas de Python, habrá que escoger una de las estructuras vistas en clase (cola, pila, lista enlazada, árbol binario, etc.) que mejor se adapte. Si se podrán utilizar para cálculos intermedios. </u>
{{% /details %}}


## Enunciado  
**Grupo 1 - Curso 2023-2024**

---

### EJERCICIO 1 (7 PUNTOS)

En el baloncesto, las estadísticas son muy importantes a la hora de analizar los rivales y preparar los partidos. Los jugadores del equipo del **Obradoiro C.A.B.** de baloncesto de Santiago de Compostela necesitan de la programación e inteligencia artificial para procesar los datos del equipo y así planificar el siguiente partido debidamente.

La información del equipo se presenta en dos archivos de texto diferentes:

1. **`Jugadores.txt`** con los siguientes campos:  
   `nombre`, `edad`, `altura`, `peso`, `posición` (base, alero o pívot).

2. **`Estadísticas.txt`** con los siguientes campos:  
   `nombre`, `puntos_partido`, `minutos_en_pista`, `rebotes`, `asistencias`, `porcentaje_triples`, `sueldo`.

---

#### Objetivo:

Crea un programa con **Programación Orientada a Objetos (POO)** que:

- Lea la información de los archivos proporcionados.
- Cree instancias de las clases que propongas.
- Use **herencia** y **composición** obligatoriamente.
- Tenga en cuenta estadísticas específicas de cada posición:
  - Bases → asistencias
  - Aleros → porcentaje de triples
  - Pívots → rebotes

> Nota: Si alguna estadística no aplica a la posición, su valor será `0` en el archivo.

---

#### Funcionalidad requerida:

El programa debe implementar una funcionalidad que indique:

¿Cuáles son los jugadores jóvenes (<25 años) que más puntos anotan por partido con un sueldo bajo (<555000)?

---

<br>

### EJERCICIO 2 (3 PUNTOS)

Ha llegado el final de la temporada y el director deportivo y el entrenador deben conformar la plantilla de la temporada siguiente. Para ello deben **ordenar a los jugadores de mejor a peor**, teniendo en cuenta su rendimiento de la temporada, para saber si pueden renovarlos o no.

---

#### Fórmula de valoración:

La ordenación de los jugadores se calculará en base a la siguiente fórmula:

$$
\text{Valor\_jugador} = \frac{\text{puntos\_partido}}{\text{sueldo}} + \text{minutos\_en\_pista} \times \text{edad}
$$

> Cuanto **mayor** sea la valoración, **más importante** debe ser ese jugador.

---

#### Requisito adicional

Imprime los jugadores **de más valorados a menos valorados**.

> **Importante:**  
> Para la **gestión inicial** de los objetos **no se puede utilizar listas de Python**.  
> Habrá que escoger una de las estructuras vistas en clase (**cola, pila, lista enlazada, árbol binario, etc.**) que mejor se adapte.  
>  
> **Sí se podrán usar listas para cálculos intermedios.**

---