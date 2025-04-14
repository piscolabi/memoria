---
date: 2025-04-14
linkTitle: "Final G3"
title: Final Prácticas Programación II - Grupo 3
description: ""
math: true
sidebar:
  exclude: true
  hide: true
toc: true
---

{{% details title="Exame sen formato" closed="true" %}}

Grupo 3-Curso 2023-2024

EJERCICIO 1 (7 PUNTOS)

La organización del festival "O Son do Camiño" tiene todos los años el mismo problema: Componer el cartel más atractivo con el menor gasto posible. Todos los artistas tienen un coste asociado dependiendo de varias variables. Necesitan de la programación y la inteligencia artificial para tomar decisiones y conformar el mejor cartel posible para realizar un gran festival. El presupuesto para artistas del festival es 2 Millones de €.

La información se presenta en dos archivos de texto:

- Artistas.txt con las siguientes cabeceras: nombre, país, tipo (solista/grupo/electrónica), duracion_show, asistentes_concierto.

- Costes.txt con las siguientes cabeceras: nombre, coste_viaje, coste_concierto, coste_camerino/coste_alojamiento, coste_artificios.

Crea un programa utilizando Programación Orientada a Objetos que lea la información de los archivos proporcionados y cree instancias de las clases pertinentes. Es obligatorio el uso de herencia y composición en la implementación de las clases. Fíjate que existen algunos costes propios del tipo de artista (solistas-coste_alojamiento, grupo-coste_camerino, electronica-coste_artificios), es decir, si alguno de estos valores aparece con valor O en el archivo, no existe ese coste para ese artista.

Mostrar los artistas que compongan el cartel completo, sin sobrepasar el presupuesto del festival y, además, debe existir un número equilibrado de solistas, grupos y electrónica, es decir no puede diferir en más de 2 la cantidad (p. ej. 20 grupos, 21 solitas y 19 electrónica es válido).

EJERCICIO 2 (3 PUNTOS)

Los organizadores se acaban de dar cuenta que no solo deben tener en cuenta el coste total de cada uno de los artistas, sino que la elección también depende del impacto que tenga cada uno de ellos. Modifica el programa anterior para que muestre una lista de ordenada de artistas dependiendo de su impacto, que se calcula de la siguiente forma:

impacto_artista duracion_show*asistentes_concierto / coste_total

Escribe el resultado en un fichero de salida con todos los valores obtenidos.

Para la gestión inicial de los objetos no se puede utilizar las listas de Python, habrá que escoger una de las estructuras vistas en clase (cola, pila, lista enlazada, árbol binario, etc.) que mejor se adapte. Si se podrán utilizar para cálculos intermedios.

{{% /details %}}


# Enunciado  
**Grupo 3 - Curso 2023-2024**

---

### EJERCICIO 1 (7 PUNTOS)

La organización del festival "O Son do Camiño" tiene todos los años el mismo problema: Componer el cartel más atractivo con el menor gasto posible. Todos los artistas tienen un coste asociado dependiendo de varias variables. Necesitan de la programación y la inteligencia artificial para tomar decisiones y conformar el mejor cartel posible para realizar un gran festival. El presupuesto para artistas del festival es 2 Millones de €.

La información se presenta en dos archivos de texto:

1. **`Artistas.txt`** con los siguientes campos:  
   `nombre`, `país`, `tipo` (solista/grupo/electrónica), `duracion_show`, `asistentes_concierto`.

2. **`Costes.txt`** con los siguientes campos:  
   `nombre`, `coste_viaje`, `coste_concierto`, `coste_camerino`/`coste_alojamiento`, `coste_artificios`.

---

#### Objetivo:

Crea un programa con **Programación Orientada a Objetos (POO)** que:

- Lea la información de los archivos proporcionados.
- Cree instancias de las clases que propongas.
- Use **herencia** y **composición** obligatoriamente.
- Tenga en cuenta costes específicos de cada tipo:
  - Solistas → coste_alojamiento
  - Grupos → coste_camerino
  - Electrónica → coste_artificios

> Nota: Si alguno de estos valores aparece con valor 0 en el archivo, no existe ese coste para ese artista.

---

#### Funcionalidad requerida:

El programa debe mostrar los artistas que compongan el cartel completo, cumpliendo:

- Sin sobrepasar el presupuesto del festival (2 millones de €)
- Debe existir un número equilibrado de solistas, grupos y electrónica (la diferencia no puede ser mayor a 2)

---

<br>

### EJERCICIO 2 (3 PUNTOS)

Los organizadores se acaban de dar cuenta que no solo deben tener en cuenta el coste total de cada uno de los artistas, sino que la elección también depende del impacto que tenga cada uno de ellos.

---

#### Fórmula de impacto:

La ordenación de los artistas se calculará en base a la siguiente fórmula:

$$
\text{impacto\_artista} = \frac{\text{duracion\_show} \times \text{asistentes\_concierto}}{\text{coste\_total}}
$$

---

#### Requisito adicional

Modifica el programa anterior para que muestre una lista ordenada de artistas dependiendo de su impacto.
Escribe el resultado en un fichero de salida con todos los valores obtenidos.

> **Importante:**  
> Para la **gestión inicial** de los objetos **no se puede utilizar listas de Python**.  
> Habrá que escoger una de las estructuras vistas en clase (**cola, pila, lista enlazada, árbol binario, etc.**) que mejor se adapte.  
>  
> **Sí se podrán usar listas para cálculos intermedios.**

---