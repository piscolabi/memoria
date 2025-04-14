---
date: 2025-04-11
linkTitle: "Final G2"
title: Final Prácticas Programación II - Grupo 2
description: ""
math: true
sidebar:
  exclude: true
  hide: true
toc: true
---

{{% details title="Exame sen formato" closed="true" %}}

Grupo 2 - Curso 2023-2024

EJERCICIO 1 (7 PUNTOS)

The Rapants (grupo gallego de música indie afincados en Muros) van a girar todo este verano a lo largo y ancho de la península ibérica. Después del éxito de su último disco, se han dado cuenta de que tienen demasiadas peticiones de conciertos y no pueden ir a todos. Así que tienen que escoger en que salas tocan dependiendo de una serie de valores.

La información se presenta en dos archivos de texto:

- propuestas.txt con las siguientes cabeceras: nombre, asistentes, beneficio, tipo (sala/festival/evento), provincia, fecha. S

- costes.txt con las siguientes cabeceras: nombre, coste_viaje, coste_concierto, / coste_camerino, coste_alojamiento, coste_montaje.



Crea un programa utilizando Programación Orientada a Objetos que lea la información de los archivos proporcionados y cree instancias de las clases pertinentes. Es obligatorio el uso de herencia y composición en la implementación de las clases. Fíjate que existen algunos costes propios del tipo de artista (sala-coste_concierto, festival-coste_montaje, evento-coste_camerino), es decir, si alguno de estos valores aparece con valor O en el archivo, no existe ese coste para esa propuesta.

El programa debe implementar una funcionalidad que permita saber cuáles son los conciertos que pueden ofrecer el grupo. Para ello debe haber un numero equilibrado de conciertos en salas, festivales y eventos (máxima diferencia de 2 entre ellos) y el beneficio neto debe ser positivo y mayor a 1000€.

EJERCICIO 2 (3 PUNTOS)

El grupo ha visto los resultados y no les acaba de convencer del todo. Modifica el programa anterior para que muestre una lista de ordenada de propuestas dependiendo de la valoración completa del concierto, que se calcula de la siguiente forma:

valoración_concierto = beneficio- (coste_viaje+coste_alojameinto) * asistentes

Escribe el resultado en un fichero de salida con todos los valores obtenidos.

Para la gestión inicial de los objetos no se puede utilizar las listas de Python, habrá que escoger una de las estructuras vistas en clase (cola, pila, lista enlazada, árbol binario, etc.) que mejor se adapte. Si se podrán utilizar para cálculos intermedios.

{{% /details %}}


# Enunciado  
**Grupo 2 - Curso 2023-2024**

---

### EJERCICIO 1 (7 PUNTOS)

The Rapants (grupo gallego de música indie afincados en Muros) van a girar todo este verano a lo largo y ancho de la península ibérica. Después del éxito de su último disco, se han dado cuenta de que tienen demasiadas peticiones de conciertos y no pueden ir a todos. Así que tienen que escoger en que salas tocan dependiendo de una serie de valores.

La información se presenta en dos archivos de texto:

1. **`propuestas.txt`** con los siguientes campos:  
   `nombre`, `asistentes`, `beneficio`, `tipo` (sala/festival/evento), `provincia`, `fecha`.

2. **`costes.txt`** con los siguientes campos:  
   `nombre`, `coste_viaje`, `coste_concierto`, `coste_camerino`, `coste_alojamiento`, `coste_montaje`.

---

#### Objetivo:

Crea un programa con **Programación Orientada a Objetos (POO)** que:

- Lea la información de los archivos proporcionados.
- Cree instancias de las clases que propongas.
- Use **herencia** y **composición** obligatoriamente.
- Tenga en cuenta costes específicos de cada tipo:
  - Salas → coste_concierto
  - Festivales → coste_montaje
  - Eventos → coste_camerino

> Nota: Si alguno de estos valores aparece con valor 0 en el archivo, no existe ese coste para esa propuesta.

---

#### Funcionalidad requerida:

El programa debe implementar una funcionalidad que permita saber cuáles son los conciertos que pueden ofrecer el grupo. Para ello debe haber:

- Un número equilibrado de conciertos en salas, festivales y eventos (máxima diferencia de 2 entre ellos)
- El beneficio neto debe ser positivo y mayor a 1000€.

---

<br>

### EJERCICIO 2 (3 PUNTOS)

El grupo ha visto los resultados y no les acaba de convencer del todo. Modifica el programa anterior para que muestre una lista ordenada de propuestas dependiendo de la valoración completa del concierto.

---

#### Fórmula de valoración:

La ordenación de las propuestas se calculará en base a la siguiente fórmula:

$$
\text{valoración\_concierto} = \text{beneficio} - (\text{coste\_viaje} + \text{coste\_alojamiento}) \times \text{asistentes}
$$

---

#### Requisito adicional

Escribe el resultado en un fichero de salida con todos los valores obtenidos.

> **Importante:**  
> Para la **gestión inicial** de los objetos **no se puede utilizar listas de Python**.  
> Habrá que escoger una de las estructuras vistas en clase (**cola, pila, lista enlazada, árbol binario, etc.**) que mejor se adapte.  
>  
> **Sí se podrán usar listas para cálculos intermedios.**

---