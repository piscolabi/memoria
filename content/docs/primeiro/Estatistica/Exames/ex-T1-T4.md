---
date: 2025-04-01
linkTitle: "Examen T1-T4"
title: Examen T1-T4 resolto e explicado
description: Correción dos exercicios do exame de Estadística Tema 1 ao Tema 4
math: true
sidebar:
  exclude: true
  hide: true
toc: true
---

## Exercicio 1
{{% details title="Exercicio 1" closed="true" %}}

### Probabilidad de eventos en un conjunto eléctrico

#### **Enunciado**

Un conjunto eléctrico consta de dos componentes $A$ y $B$. Se nos proporcionan las siguientes probabilidades:  
- Probabilidad de que falle $A$: $P(A) = 0.30$  
- Probabilidad de que falle $B$: $P(B) = 0.20$  
- Probabilidad de que fallen ambos simultáneamente: $P(A \cap B) = 0.20$  

Se nos pide calcular la probabilidad de que falle **sólo $A$** y justificar cuál de las opciones es correcta:  
a) 0.30, b) 0.06, c) 0.10, d) 0.06 si son independientes.

#### **Desarrollo**

Definimos los eventos:  
$A$: "El componente $A$ falla"  
$B$: "El componente $B$ falla"  

La probabilidad de que **sólo falle $A$** significa que $A$ ocurre, pero $B$ no ocurre, es decir, $P(A \cap B^c)$, donde $B^c$ es el evento complementario de $B$ ("$B$ no falla").

**Paso 1: Expresión de la probabilidad de que sólo falle $A$**  
$P(A \cap B^c) = P(A) - P(A \cap B)$  

**Paso 2: Sustitución de los datos**  
$P(A \cap B^c) = 0.30 - 0.20 = 0.10$  

**Paso 3: Análisis de la independencia**  
Para evaluar la opción d) ("0.06 si son independientes"), verificamos si los eventos $A$ y $B$ son independientes. Dos eventos son independientes si:  
$P(A \cap B) = P(A) \cdot P(B)$  

Calculamos:  
$P(A) \cdot P(B) = 0.30 \cdot 0.20 = 0.06$  

Comparamos con el dato dado:  
$P(A \cap B) = 0.20 \neq 0.06$  

Por lo tanto, $A$ y $B$ **no son independientes**. Esto descarta la opción d), ya que la condición de independencia no se cumple.

**Paso 4: Cálculo bajo la hipótesis de independencia (para justificar la opción d))**  
Si $A$ y $B$ fueran independientes, tendríamos:  
$P(A \cap B) = P(A) \cdot P(B) = 0.06$  

Entonces, la probabilidad de que sólo falle $A$ sería:  
$P(A \cap B^c) = P(A) - P(A \cap B) = 0.30 - 0.06 = 0.24$  

Sin embargo, este resultado (0.24) no coincide con ninguna de las opciones, y además, ya hemos establecido que $A$ y $B$ no son independientes, por lo que este cálculo es irrelevante para los datos dados.

**Paso 5: Selección de la opción correcta**  
De acuerdo con el cálculo en el paso 2, la probabilidad de que sólo falle $A$ es $P(A \cap B^c) = 0.10$. Comparando con las opciones:  
- a) 0.30: Incorrecta, ya que $P(A) = 0.30$ incluye los casos en que falla $B$.  
- b) 0.06: Incorrecta, ya que no coincide con el cálculo.  
- c) 0.10: Correcta, coincide con nuestro resultado.  
- d) 0.06 si son independientes: Incorrecta, ya que $A$ y $B$ no son independientes, y el cálculo bajo independencia no da 0.06 para $P(A \cap B^c)$.  

### Resultado final

La probabilidad de que sólo falle $A$ es:  
$P(A \cap B^c) = 0.10$  

La opción correcta es: **c) 0.10**.
{{% /details %}}

## Exercicio 2
{{% details title="Exercicio 2" closed="true" %}}

### Probabilidad condicional en un conjunto eléctrico

#### **Enunciado**

Con los datos del ejercicio anterior, se nos pide calcular la probabilidad de que no falle $A$, sabiendo que no ha fallado $B$, y justificar cuál de las opciones es correcta:  
a) $7/8$, b) $0.70$, c) $7/6$, d) Ninguna de las otras respuestas.  

Los datos del ejercicio anterior son:  
- Probabilidad de que falle $A$: $P(A) = 0.30$  
- Probabilidad de que falle $B$: $P(B) = 0.20$  
- Probabilidad de que fallen ambos simultáneamente: $P(A \cap B) = 0.20$  

#### **Desarrollo**

Definimos los eventos:  
$A$: "El componente $A$ falla"  
$B$: "El componente $B$ falla"  
$A^c$: "El componente $A$ no falla"  
$B^c$: "El componente $B$ no falla"  

Se nos pide calcular la probabilidad condicional de que no falle $A$, dado que no ha fallado $B$, es decir, $P(A^c | B^c)$.

**Paso 1: Expresión de la probabilidad condicional**  
Por definición de probabilidad condicional:  
$P(A^c | B^c) = \frac{P(A^c \cap B^c)}{P(B^c)}$  

**Paso 2: Cálculo de $P(B^c)$**  
$P(B^c) = 1 - P(B) = 1 - 0.20 = 0.80$  

**Paso 3: Cálculo de $P(A^c \cap B^c)$**  
Usamos el principio de inclusión-exclusión para eventos complementarios. Primero, calculamos $P(A \cup B)$, la probabilidad de que falle al menos uno de los componentes:  
$P(A \cup B) = P(A) + P(B) - P(A \cap B)$  
$\phantom{P(A \cup B)} = 0.30 + 0.20 - 0.20 = 0.30$  

Luego, $P(A^c \cap B^c)$ es la probabilidad de que no falle ninguno, es decir, el complemento de $P(A \cup B)$:  
$P(A^c \cap B^c) = 1 - P(A \cup B) = 1 - 0.30 = 0.70$  

**Paso 4: Sustitución en la fórmula de probabilidad condicional**  
$P(A^c | B^c) = \frac{P(A^c \cap B^c)}{P(B^c)} = \frac{0.70}{0.80} = \frac{7}{8}$  

**Paso 5: Selección de la opción correcta**  
Comparamos el resultado $P(A^c | B^c) = \frac{7}{8}$ con las opciones:  
- a) $7/8$: Correcta, coincide con nuestro resultado.  
- b) $0.70$: Incorrecta, ya que $0.70 \neq \frac{7}{8} \approx 0.875$.  
- c) $7/6$: Incorrecta, ya que $7/6 \approx 1.167$ no es una probabilidad válida (es mayor que 1).  
- d) Ninguna de las otras respuestas: Incorrecta, ya que la opción a) es correcta.  

### Resultado final

La probabilidad de que no falle $A$, sabiendo que no ha fallado $B$, es:  
$P(A^c | B^c) = \frac{7}{8}$  

La opción correcta es: **a) $7/8$**.
{{% /details %}}

## Exercicio 3
{{% details title="Exercicio 3" closed="true" %}}

### Probabilidades en una empresa informática

#### **Enunciado**

Según su empleo y titulación, los trabajadores de una empresa informática se distribuyen de la siguiente forma:  
- De los 52 matemáticos, 12 son analistas, 25 programadores y 15 se ocupan de servicios.  
- De los 63 informáticos, 18 son analistas, 35 programadores y 10 se ocupan de servicios.  

Si se elige un empleado al azar, calcular:  
a) La probabilidad de que sea matemático pero no programador.  
b) La probabilidad de que, siendo informático, no sea de servicios.  
c) Determinar razonadamente si son independientes los sucesos "ser analista" y "ser matemático".  

#### **Desarrollo**

**Definición de eventos y datos iniciales**  
Definimos los eventos:  
$M$: "El empleado es matemático"  
$I$: "El empleado es informático"  
$A$: "El empleado es analista"  
$P$: "El empleado es programador"  
$S$: "El empleado es de servicios"  

Construimos una tabla de contingencia para organizar los datos:  
| Titulación   | Analistas ($A$) | Programadores ($P$) | Servicios ($S$) | Total |  
|--------------|-----------------|---------------------|-----------------|-------|  
| Matemáticos ($M$) | 12             | 25                 | 15             | 52    |  
| Informáticos ($I$) | 18             | 35                 | 10             | 63    |  
| **Total**        | 30             | 60                 | 25             | 115   |  

El total de empleados es $52 + 63 = 115$. Todas las probabilidades se calcularán dividiendo entre este total, ya que se elige un empleado al azar.

**a) Probabilidad de que sea matemático pero no programador**  
Queremos calcular $P(M \cap P^c)$, donde $P^c$ es el evento "no es programador".  
Un matemático puede ser analista, programador o de servicios. Los matemáticos que no son programadores son los que son analistas o de servicios:  
$P(M \cap P^c) = \frac{\text{Número de matemáticos que no son programadores}}{\text{Total de empleados}}$  
$\phantom{P(M \cap P^c)} = \frac{\text{Matemáticos analistas} + \text{Matemáticos de servicios}}{115} = \frac{12 + 15}{115} = \frac{27}{115}$  

**b) Probabilidad de que, siendo informático, no sea de servicios**  
Queremos calcular $P(S^c | I)$, la probabilidad condicional de no ser de servicios dado que es informático, donde $S^c$ es el evento "no es de servicios".  
Por definición de probabilidad condicional:  
$P(S^c | I) = \frac{P(S^c \cap I)}{P(I)}$  

- $P(I)$ es la probabilidad de ser informático:  
$P(I) = \frac{\text{Número de informáticos}}{\text{Total de empleados}} = \frac{63}{115}$  

- $P(S^c \cap I)$ es la probabilidad de ser informático y no ser de servicios. Los informáticos que no son de servicios son los que son analistas o programadores:  
$P(S^c \cap I) = \frac{\text{Informáticos analistas} + \text{Informáticos programadores}}{\text{Total de empleados}} = \frac{18 + 35}{115} = \frac{53}{115}$  

- Sustituimos:  
$P(S^c | I) = \frac{P(S^c \cap I)}{P(I)} = \frac{\frac{53}{115}}{\frac{63}{115}} = \frac{53}{63}$  

**c) Independencia de los sucesos "ser analista" y "ser matemático"**  
Dos eventos $A$ y $M$ son independientes si $P(A \cap M) = P(A) \cdot P(M)$. Verifiquemos:  

- $P(A)$ es la probabilidad de ser analista:  
$P(A) = \frac{\text{Número de analistas}}{\text{Total de empleados}} = \frac{30}{115}$  

- $P(M)$ es la probabilidad de ser matemático:  
$P(M) = \frac{\text{Número de matemáticos}}{\text{Total de empleados}} = \frac{52}{115}$  

- $P(A \cap M)$ es la probabilidad de ser analista y matemático:  
$P(A \cap M) = \frac{\text{Número de matemáticos analistas}}{\text{Total de empleados}} = \frac{12}{115}$  

- Calculamos $P(A) \cdot P(M)$:  
$P(A) \cdot P(M) = \frac{30}{115} \cdot \frac{52}{115} = \frac{30 \cdot 52}{115 \cdot 115} = \frac{1560}{13225}$  

- Comparamos:  
$P(A \cap M) = \frac{12}{115} = \frac{12 \cdot 115}{115 \cdot 115} = \frac{1380}{13225}$  
$P(A) \cdot P(M) = \frac{1560}{13225}$  

Dado que $P(A \cap M) \neq P(A) \cdot P(M)$, los eventos $A$ y $M$ **no son independientes**. Esto tiene sentido intuitivamente, ya que la proporción de analistas entre matemáticos ($12/52$) es diferente a la proporción de analistas entre informáticos ($18/63$), lo que indica que la titulación afecta la probabilidad de ser analista.

### Resultado final

a) $P(M \cap P^c) = \frac{27}{115}$  
b) $P(S^c | I) = \frac{53}{63}$  
c) Los eventos "ser analista" y "ser matemático" **no son independientes**, ya que $P(A \cap M) \neq P(A) \cdot P(M)$.
{{% /details %}}

## Exercicio 4
{{% details title="Exercicio 4" closed="true" %}}

### Probabilidades en una población de usuarios de material informático

#### **Enunciado**

En una población, el 5% de las personas son usuarios de material informático. Calcular:  
a) Si seleccionamos aleatoriamente 10 personas con reemplazo, la probabilidad de que como máximo 3 sean usuarios.  
b) Si escogemos personas con reemplazo, la probabilidad de que tengamos que escoger cuatro personas antes de encontrar el tercer usuario.  

#### **Desarrollo**

**Definición de variables y parámetros**  
Definimos:  
- $p = 0.05$: Probabilidad de que una persona sea usuario (éxito).  
- $q = 1 - p = 0.95$: Probabilidad de que una persona no sea usuario (fracaso).  

**a) Probabilidad de que como máximo 3 de 10 personas sean usuarios**  
Seleccionar personas con reemplazo implica que cada selección es independiente, y el número de usuarios en 10 selecciones sigue una distribución binomial:  
$X = \text{"Número de usuarios en 10 selecciones"}$  
$X \sim \text{Binomial}(n, p)$ con $n = 10$, $p = 0.05$.  

Queremos calcular $P(X \leq 3)$, es decir, la probabilidad de que haya 0, 1, 2 o 3 usuarios:  
$P(X \leq 3) = P(X = 0) + P(X = 1) + P(X = 2) + P(X = 3)$  

La fórmula de la probabilidad binomial es:  
$P(X = k) = \binom{n}{k} p^k q^{n-k}$  

Calculamos cada término:  
- $P(X = 0) = \binom{10}{0} (0.05)^0 (0.95)^{10} = 1 \cdot 1 \cdot (0.95)^{10}$  
$\phantom{P(X = 0)} \approx 1 \cdot 1 \cdot 0.5987 = 0.5987$  

- $P(X = 1) = \binom{10}{1} (0.05)^1 (0.95)^9 = 10 \cdot 0.05 \cdot (0.95)^9$  
$\phantom{P(X = 1)} \approx 10 \cdot 0.05 \cdot 0.6302 = 0.3151$  

- $P(X = 2) = \binom{10}{2} (0.05)^2 (0.95)^8 = \frac{10 \cdot 9}{2} \cdot (0.05)^2 \cdot (0.95)^8$  
$\phantom{P(X = 2)} = 45 \cdot 0.0025 \cdot 0.6634 \approx 45 \cdot 0.0025 \cdot 0.6634 = 0.0746$  

- $P(X = 3) = \binom{10}{3} (0.05)^3 (0.95)^7 = \frac{10 \cdot 9 \cdot 8}{6} \cdot (0.05)^3 \cdot (0.95)^7$  
$\phantom{P(X = 3)} = 120 \cdot 0.000125 \cdot 0.6983 \approx 120 \cdot 0.000125 \cdot 0.6983 = 0.0105$  

Sumamos:  
$P(X \leq 3) = 0.5987 + 0.3151 + 0.0746 + 0.0105 \approx 0.9989$  

**b) Probabilidad de que tengamos que escoger cuatro personas antes de encontrar el tercer usuario**  
La frase "escoger cuatro personas antes de encontrar el tercer usuario" implica que el tercer usuario se encuentra exactamente en la cuarta selección. Esto sugiere un modelo de distribución binomial negativa (o distribución de Pascal), que cuenta el número de ensayos necesarios para obtener un número fijo de éxitos.  

Definimos:  
$Y = \text{"Número de selecciones necesarias para encontrar el tercer usuario"}$  
$Y \sim \text{Binomial Negativa}(r, p)$ con $r = 3$ (queremos el tercer éxito), $p = 0.05$.  

Queremos la probabilidad de que el tercer éxito ocurra exactamente en la cuarta selección, es decir, $P(Y = 4)$. Esto significa que en las primeras 3 selecciones hubo exactamente 2 éxitos, y la cuarta selección es un éxito. La fórmula de la binomial negativa es:  
$P(Y = k) = \binom{k-1}{r-1} p^r q^{k-r}$  
donde $k$ es el número de ensayos, $r$ es el número de éxitos, $p$ es la probabilidad de éxito, y $q = 1 - p$.  

Sustituimos $k = 4$, $r = 3$, $p = 0.05$, $q = 0.95$:  
$P(Y = 4) = \binom{4-1}{3-1} (0.05)^3 (0.95)^{4-3} = \binom{3}{2} (0.05)^3 (0.95)^1$  
$\phantom{P(Y = 4)} = 3 \cdot 0.000125 \cdot 0.95 = 3 \cdot 0.00011875 \approx 0.00035625$  

### Resultado final

a) $P(X \leq 3) \approx 0.9989$  
b) $P(Y = 4) \approx 0.000356$
{{% /details %}}

## Exercicio 5
{{% details title="Exercicio 5" closed="true" %}}

### Tiempo de ejecución de un algoritmo de generación de imágenes

#### **Enunciado**

Una empresa ha desarrollado un modelo de generación de imágenes y estudia el tiempo de ejecución del algoritmo. Para un *prompt* concreto ($i$), el tiempo de ejecución sigue una distribución normal con media $\mu_i$ y varianza $\sigma^2 = 4 \, \text{ms}^2$ (independientemente del *prompt*). Se pide determinar el valor $t$ tal que la empresa pueda asegurar que el tiempo de ejecución superará a $\mu$ en más de $t$ ms solo en un 1% de los casos.

#### **Desarrollo**

**Definición de variables y parámetros**  
Para un *prompt* $i$, definimos:  
$X_i = \text{"Tiempo de ejecución del algoritmo para el prompt } i\text{"}$  
$X_i \sim N(\mu_i, \sigma^2)$ con $\sigma^2 = 4 \, \text{ms}^2$, por lo que $\sigma = \sqrt{4} = 2 \, \text{ms}$.  

La empresa quiere encontrar $t$ tal que el tiempo de ejecución $X_i$ supere a $\mu_i$ en más de $t$ ms solo en un 1% de los casos. Esto se traduce en:  
$P(X_i > \mu_i + t) = 0.01$  

**Paso 1: Estandarización de la distribución**  
Para resolver este problema, estandarizamos $X_i$ a una distribución normal estándar $Z \sim N(0, 1)$:  
$Z = \frac{X_i - \mu_i}{\sigma}$  

Sustituimos en la probabilidad:  
$P(X_i > \mu_i + t) = P\left(\frac{X_i - \mu_i}{\sigma} > \frac{\mu_i + t - \mu_i}{\sigma}\right) = P\left(Z > \frac{t}{\sigma}\right) = 0.01$  

Dado que $\sigma = 2$, tenemos:  
$P\left(Z > \frac{t}{2}\right) = 0.01$  

**Paso 2: Determinación del valor crítico de $Z$**  
Queremos encontrar $z$ tal que:  
$P(Z > z) = 0.01$  

Esto implica que $P(Z \leq z) = 1 - 0.01 = 0.99$. Usamos la tabla de la distribución normal estándar para encontrar el valor crítico $z$ correspondiente al percentil 99%. El valor de $z$ que satisface $P(Z \leq z) = 0.99$ es aproximadamente:  
$z \approx 2.326$  

Por lo tanto:  
$\frac{t}{2} = 2.326$  

**Paso 3: Resolución para $t$**  
Despejamos $t$:  
$t = 2 \cdot 2.326 \approx 4.652$  

**Paso 4: Interpretación**  
El valor $t \approx 4.652$ significa que, para cualquier *prompt* $i$, la empresa puede asegurar que el tiempo de ejecución $X_i$ superará a $\mu_i$ en más de $4.652 \, \text{ms}$ solo en el 1% de los casos. Este valor $t$ es independiente de $\mu_i$ porque la varianza es constante para todos los *prompts*.

### Resultado final

El valor $t$ es:  
$t \approx 4.652 \, \text{ms}$
{{% /details %}}

## Exercicio 6
{{% details title="Exercicio 6" closed="true" %}}

### Intervalos de confianza para el tiempo de entrenamiento de un modelo

#### **Enunciado**

En un proyecto de clasificación automática de textos, el tiempo necesario para completar cada entrenamiento sigue una distribución normal con media $\mu = 10$ horas y desviación estándar $\sigma = 2.5$ horas. Se pide:  
a) Determinar cuántas ejecuciones del modelo se deben realizar para que el intervalo de confianza del 95% tenga un margen de error de $\pm 3$ horas.  
b) Dados los tiempos de ejecución de 5 entrenamientos (9.3, 11.8, 8.7, 12.5, 10.2 horas), calcular el intervalo de confianza del 90% para la media del tiempo de entrenamiento, suponiendo que la desviación estándar es desconocida y debe estimarse a partir de los datos, en dos escenarios (aunque el enunciado no especifica explícitamente los escenarios, asumiremos que se refiere a usar la distribución normal y la distribución t de Student, que son los enfoques estándar en este contexto).

#### **Desarrollo**

**Definición de variables y parámetros**  
$X = \text{"Tiempo de entrenamiento de un modelo (en horas)"}$  
$X \sim N(\mu, \sigma^2)$ con $\mu = 10$, $\sigma = 2.5$.  

**a) Tamaño de la muestra para un margen de error de $\pm 3$ horas al 95% de confianza**  
El intervalo de confianza del 95% para la media $\mu$ cuando $\sigma$ es conocida está dado por:  
$\bar{X} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$  

El margen de error $E$ es:  
$E = z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$  

Queremos $E = 3$ y el nivel de confianza es 95%, por lo que $\alpha = 0.05$ y $\alpha/2 = 0.025$. El valor crítico $z_{\alpha/2}$ es el percentil 97.5% de la distribución normal estándar $Z \sim N(0, 1)$, que es:  
$z_{\alpha/2} \approx 1.96$  

Sustituimos los valores dados:  
$3 = 1.96 \cdot \frac{2.5}{\sqrt{n}}$  

Despejamos $\sqrt{n}$:  
$\sqrt{n} = \frac{1.96 \cdot 2.5}{3} = \frac{4.9}{3} \approx 1.6333$  

Elevamos al cuadrado para obtener $n$:  
$n = (1.6333)^2 \approx 2.6678$  

Dado que $n$ debe ser un entero, tomamos el siguiente entero mayor:  
$n = 3$  

Verificamos si $n = 3$ satisface el margen de error:  
$E = 1.96 \cdot \frac{2.5}{\sqrt{3}} \approx 1.96 \cdot \frac{2.5}{1.732} \approx 1.96 \cdot 1.443 \approx 2.83$  

El margen de error es 2.83, que es menor que 3, por lo que $n = 3$ es suficiente.  

**b) Intervalo de confianza del 90% con $\sigma$ desconocida**  
Tenemos una muestra de $n = 5$ tiempos de ejecución: $9.3, 11.8, 8.7, 12.5, 10.2$. Queremos calcular el intervalo de confianza del 90% para la media $\mu$, suponiendo que $\sigma$ es desconocida y debe estimarse a partir de los datos. Consideraremos dos escenarios:  
1. Usar la distribución normal estándar $Z$ (aunque esto es menos común cuando $\sigma$ es desconocida y $n$ es pequeño).  
2. Usar la distribución t de Student, que es el enfoque correcto para muestras pequeñas con $\sigma$ desconocida.  

**Paso 1: Cálculo de la media muestral y la desviación estándar muestral**  
Calculamos la media muestral $\bar{x}$:  
$\bar{x} = \frac{9.3 + 11.8 + 8.7 + 12.5 + 10.2}{5} = \frac{52.5}{5} = 10.5$  

Calculamos la varianza muestral $s^2$ (usando $n-1$ en el denominador, ya que es una estimación insesgada):  
$s^2 = \frac{1}{n-1} \sum_{i=1}^n (x_i - \bar{x})^2$  

Primero, calculamos las desviaciones al cuadrado:  
$(9.3 - 10.5)^2 = (-1.2)^2 = 1.44$  
$(11.8 - 10.5)^2 = (1.3)^2 = 1.69$  
$(8.7 - 10.5)^2 = (-1.8)^2 = 3.24$  
$(12.5 - 10.5)^2 = (2.0)^2 = 4.00$  
$(10.2 - 10.5)^2 = (-0.3)^2 = 0.09$  

Sumamos:  
$\sum_{i=1}^n (x_i - \bar{x})^2 = 1.44 + 1.69 + 3.24 + 4.00 + 0.09 = 10.46$  

Entonces:  
$s^2 = \frac{10.46}{5-1} = \frac{10.46}{4} \approx 2.615$  

La desviación estándar muestral es:  
$s = \sqrt{2.615} \approx 1.617$  

**Paso 2: Intervalo de confianza del 90% – Escenario 1 (usando $Z$)**  
Si asumimos que la distribución normal $Z$ es adecuada (aunque esto es cuestionable con $n$ pequeño y $\sigma$ desconocida), el intervalo de confianza del 90% para $\mu$ está dado por:  
$\bar{x} \pm z_{\alpha/2} \cdot \frac{s}{\sqrt{n}}$  

El nivel de confianza es 90%, por lo que $\alpha = 0.10$ y $\alpha/2 = 0.05$. El valor crítico $z_{\alpha/2}$ es el percentil 95% de $Z \sim N(0, 1)$, que es:  
$z_{\alpha/2} \approx 1.645$  

El error estándar de la media es:  
$\frac{s}{\sqrt{n}} = \frac{1.617}{\sqrt{5}} \approx \frac{1.617}{2.236} \approx 0.723$  

El margen de error es:  
$z_{\alpha/2} \cdot \frac{s}{\sqrt{n}} \approx 1.645 \cdot 0.723 \approx 1.189$  

El intervalo de confianza es:  
$\bar{x} \pm 1.189 = 10.5 \pm 1.189 = (10.5 - 1.189, 10.5 + 1.189) = (9.311, 11.689)$  

**Paso 3: Intervalo de confianza del 90% – Escenario 2 (usando $t$)**  
Dado que $\sigma$ es desconocida y $n$ es pequeño, el enfoque correcto es usar la distribución t de Student con $n-1$ grados de libertad. El intervalo de confianza del 90% para $\mu$ está dado por:  
$\bar{x} \pm t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}$  

Con $n = 5$, los grados de libertad son $n-1 = 4$. El nivel de confianza es 90%, por lo que $\alpha = 0.10$ y $\alpha/2 = 0.05$. El valor crítico $t_{\alpha/2, 4}$ es el percentil 95% de la distribución t con 4 grados de libertad, que es aproximadamente:  
$t_{\alpha/2, 4} \approx 2.132$  

El error estándar de la media es el mismo que antes:  
$\frac{s}{\sqrt{n}} \approx 0.723$  

El margen de error es:  
$t_{\alpha/2, 4} \cdot \frac{s}{\sqrt{n}} \approx 2.132 \cdot 0.723 \approx 1.541$  

El intervalo de confianza es:  
$\bar{x} \pm 1.541 = 10.5 \pm 1.541 = (10.5 - 1.541, 10.5 + 1.541) = (8.959, 12.041)$  

**Nota sobre los escenarios**  
El escenario 2 (usando $t$) es el más adecuado, ya que $\sigma$ es desconocida y la muestra es pequeña. El escenario 1 (usando $Z$) se incluye solo para ilustrar la diferencia, pero no es estadísticamente correcto en este contexto.

### Resultado final

a) El número de ejecuciones necesarias es:  
$n = 3$  

b) Intervalos de confianza del 90% para la media del tiempo de entrenamiento:  
- Escenario 1 (usando $Z$, menos adecuado): $(9.311, 11.689)$  
- Escenario 2 (usando $t$, correcto): $(8.959, 12.041)$
{{% /details %}}

