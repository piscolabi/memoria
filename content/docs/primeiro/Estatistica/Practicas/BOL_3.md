---
linkTitle: "Boletín 3"
title: ''
description: "Guía con todos os conceptos e circuítos traballados nas prácticas de laboratorio"
toc: true
math: true
sidebar:
  exclude: true
  hide: true
---

<!-- 
<div style="overflow-x: auto; max-width: 100%; padding: 0.5em 0;">
</div> 
-->
# Boletín 3

A partir do exercicio 6 están mellor resoltos, pero para guiarse e ir entendendo están todas ben

## Exercicio 1
{{% details title="Exercicio 1 paso a paso" closed="true" %}}
### **a) La función de masa de probabilidad**

La función de masa de probabilidad $f(x) = P(X = x)$ describe la probabilidad de que $X$ tome cada valor posible. En este caso, $X$ puede tomar valores de 1 a 6, ya que es el menor valor de los dos dados.

Para calcular $P(X = x)$, consideramos los posibles resultados al lanzar dos dados. Hay $6 \times 6 = 36$ resultados igualmente probables. Ahora, $X = x$ ocurre si el menor de los dos valores es $x$, lo que significa que al menos uno de los dados debe ser $x$ y el otro debe ser mayor o igual a $x$.

- **Caso 1: Ambos dados muestran $x$**  
  Esto ocurre solo en el par $(x, x)$. Hay 1 forma de que esto ocurra.

- **Caso 2: Un dado muestra $x$ y el otro un valor mayor que $x$**  
  Hay dos configuraciones posibles: $(x, y)$ o $(y, x)$, donde $y > x$. Los valores posibles de $y$ son $x+1, x+2, \ldots, 6$, es decir, hay $6 - x$ valores posibles para $y$. Por lo tanto, hay $2 \times (6 - x)$ formas de que esto ocurra.

- **Total de casos favorables para $X = x$:**  
  Sumamos los casos: $1 + 2(6 - x) = 1 + 12 - 2x = 13 - 2x$.

- **Probabilidad $P(X = x)$:**  
  La probabilidad es el número de casos favorables dividido por el total de casos posibles (36):  
  $$
  P(X = x) = \frac{13 - 2x}{36}, \quad x = 1, 2, 3, 4, 5, 6
  $$

Ahora calculamos $P(X = x)$ para cada $x$:

- $$ P(X = 1) = \frac{13 - 2 \cdot 1}{36} = \frac{11}{36} $$
- $$ P(X = 2) = \frac{13 - 2 \cdot 2}{36} = \frac{9}{36} = \frac{1}{4} $$
- $$ P(X = 3) = \frac{13 - 2 \cdot 3}{36} = \frac{7}{36} $$
- $$ P(X = 4) = \frac{13 - 2 \cdot 4}{36} = \frac{5}{36} $$
- $$ P(X = 5) = \frac{13 - 2 \cdot 5}{36} = \frac{3}{36} = \frac{1}{12} $$
- $$ P(X = 6) = \frac{13 - 2 \cdot 6}{36} = \frac{1}{36} $$

Por lo tanto, la función de masa de probabilidad es:

$$
f(x) = P(X = x) = \frac{13 - 2x}{36}, \quad x = 1, 2, 3, 4, 5, 6
$$

---

### **b) La función de distribución**

La función de distribución $F(x)=P(X\leq x)$ es la probabilidad acumulada hasta $x$. Para una variable discreta, se calcula sumando las probabilidades $P(X=k)$ para $k\leq x$.

- Para $x<1$, $F(x)=0$, ya que $X\geq 1$.
- Para $1\leq x<2$, $F(x)=P(X=1)=\frac{11}{36}$.
- Para $2\leq x<3$, $F(x)=P(X=1)+P(X=2)=\frac{11}{36}+\frac{9}{36}=\frac{20}{36}=\frac{5}{9}$.
- Para $3\leq x<4$, $F(x)=P(X=1)+P(X=2)+P(X=3)=\frac{11}{36}+\frac{9}{36}+\frac{7}{36}=\frac{27}{36}=\frac{3}{4}$.
- Para $4\leq x<5$, $F(x)=P(X=1)+P(X=2)+P(X=3)+P(X=4)=\frac{11}{36}+\frac{9}{36}+\frac{7}{36}+\frac{5}{36}=\frac{32}{36}=\frac{8}{9}$.
- Para $5\leq x<6$, $F(x)=P(X=1)+P(X=2)+P(X=3)+P(X=4)+P(X=5)=\frac{11}{36}+\frac{9}{36}+\frac{7}{36}+\frac{5}{36}+\frac{3}{36}=\frac{35}{36}$.
- Para $x\geq 6$, $F(x)=P(X=1)+P(X=2)+P(X=3)+P(X=4)+P(X=5)+P(X=6)=\frac{11}{36}+\frac{9}{36}+\frac{7}{36}+\frac{5}{36}+\frac{3}{36}+\frac{1}{36}=1$.


Por lo tanto, la función de distribución es:

$$
F(x) = 
\begin{cases} 
0 & \text{si } x < 1 \\
\frac{11}{36} & \text{si } 1 \leq x < 2 \\
\frac{20}{36} = \frac{5}{9} & \text{si } 2 \leq x < 3 \\
\frac{27}{36} = \frac{3}{4} & \text{si } 3 \leq x < 4 \\
\frac{32}{36} = \frac{8}{9} & \text{si } 4 \leq x < 5 \\
\frac{35}{36} & \text{si } 5 \leq x < 6 \\
1 & \text{si } x \geq 6 
\end{cases}
$$

---

### **c) La media y la varianza de $X$**

#### **Media de $X$:**

La media de una variable aleatoria discreta se calcula como:

$$
E(X) = \sum_{x=1}^{6} x \cdot P(X = x)
$$

Usamos las probabilidades calculadas en el inciso a):

$$
E(X) = 1 \cdot \frac{11}{36} + 2 \cdot \frac{9}{36} + 3 \cdot \frac{7}{36} + 4 \cdot \frac{5}{36} + 5 \cdot \frac{3}{36} + 6 \cdot \frac{1}{36}
$$

$$
E(X) = \frac{11}{36} + \frac{18}{36} + \frac{21}{36} + \frac{20}{36} + \frac{15}{36} + \frac{6}{36} = \frac{11 + 18 + 21 + 20 + 15 + 6}{36} = \frac{91}{36}
$$

Por lo tanto, la media es:

$$
E(X) = \frac{91}{36} \approx 2.5278
$$

#### **Varianza de $X$:**

La varianza se calcula como:

$$
\text{Var}(X) = E(X^2) - [E(X)]^2
$$

Primero calculamos $E(X^2)$:

$$
E(X^2) = \sum_{x=1}^{6} x^2 \cdot P(X = x)
$$

$$
E(X^2) = 1^2 \cdot \frac{11}{36} + 2^2 \cdot \frac{9}{36} + 3^2 \cdot \frac{7}{36} + 4^2 \cdot \frac{5}{36} + 5^2 \cdot \frac{3}{36} + 6^2 \cdot \frac{1}{36}
$$

$$
E(X^2) = 1 \cdot \frac{11}{36} + 4 \cdot \frac{9}{36} + 9 \cdot \frac{7}{36} + 16 \cdot \frac{5}{36} + 25 \cdot \frac{3}{36} + 36 \cdot \frac{1}{36}
$$

Realizamos la suma:

$$
E(X^2) = \frac{11}{36} + \frac{36}{36} + \frac{63}{36} + \frac{80}{36} + \frac{75}{36} + \frac{36}{36}
$$

Sumamos los numeradores: $11 + 36 + 63 + 80 + 75 + 36 = 301$. Entonces:

$$
E(X^2) = \frac{301}{36}
$$

Ahora calculamos la varianza $\text{Var}(X) = E(X^2) - [E(X)]^2$:

$$
[E(X)]^2 = \left( \frac{91}{36} \right)^2 = \frac{8281}{1296}
$$

Entonces:

$$
\text{Var}(X) = \frac{301}{36} - \frac{8281}{1296}
$$

Para restar, necesitamos un denominador común. Convertimos $\frac{301}{36}$ a un denominador de 1296 (multiplicamos numerador y denominador por 36):

$$
\frac{301}{36} = \frac{301 \cdot 36}{36 \cdot 36} = \frac{10836}{1296}
$$

Ahora realizamos la resta:

$$
\text{Var}(X) = \frac{10836}{1296} - \frac{8281}{1296} = \frac{10836 - 8281}{1296} = \frac{2555}{1296}
$$

Por lo tanto, la varianza es:

$$
\text{Var}(X) = \frac{2555}{1296} \approx 1.971
$$

**Respuesta del inciso c:**

- Media: $E(X) = \frac{91}{36} \approx 2.5278$
- Varianza: $\text{Var}(X) = \frac{2555}{1296} \approx 1.971$

---

### **d) La probabilidad de que $X$ sea par**

Queremos calcular $P(X \text{ es par})$, es decir, la probabilidad de que el menor valor de los dos dados sea un número par. Los valores pares posibles para $X$ son 2, 4 y 6. Sumamos sus probabilidades usando la función de masa de probabilidad del inciso a):

$$
P(X \text{ es par}) = P(X = 2) + P(X = 4) + P(X = 6)
$$

$$
P(X \text{ es par}) = \frac{9}{36} + \frac{5}{36} + \frac{1}{36} = \frac{9 + 5 + 1}{36} = \frac{15}{36} = \frac{5}{12}
$$

**Respuesta del inciso d:**

$$
P(X \text{ es par}) = \frac{5}{12}
$$

---

### **e) $P(X \leq 4)$ y $P(3 < X \leq 5)$**

#### **Cálculo de $P(X \leq 4)$:**

Usamos la función de distribución del inciso b). Para $X \leq 4$, simplemente tomamos $F(4)$, que es la probabilidad acumulada hasta $x = 4$:

$$
P(X \leq 4) = F(4) = \frac{32}{36} = \frac{8}{9}
$$

Alternativamente, podemos sumar las probabilidades individuales:

$$
P(X \leq 4) = P(X = 1) + P(X = 2) + P(X = 3) + P(X = 4)
$$

$$
P(X \leq 4) = \frac{11}{36} + \frac{9}{36} + \frac{7}{36} + \frac{5}{36} = \frac{11 + 9 + 7 + 5}{36} = \frac{32}{36} = \frac{8}{9}
$$

#### **Cálculo de $P(3 < X \leq 5)$:**

La expresión $3 < X \leq 5$ significa que $X$ puede tomar los valores 4 o 5 (ya que $X$ es una variable discreta, $3 < X$ implica $X \geq 4$, y $X \leq 5$). Entonces:

$$
P(3 < X \leq 5) = P(X = 4) + P(X = 5)
$$

$$
P(3 < X \leq 5) = \frac{5}{36} + \frac{3}{36} = \frac{5 + 3}{36} = \frac{8}{36} = \frac{2}{9}
$$

Alternativamente, podemos usar la función de distribución:

$$
P(3 < X \leq 5) = P(X \leq 5) - P(X \leq 3)
$$

$$
P(X \leq 5) = F(5) = \frac{35}{36}, \quad P(X \leq 3) = F(3) = \frac{27}{36}
$$

$$
P(3 < X \leq 5) = \frac{35}{36} - \frac{27}{36} = \frac{8}{36} = \frac{2}{9}
$$

**Respuesta del inciso e:**

- $P(X \leq 4) = \frac{8}{9}$
- $P(3 < X \leq 5) = \frac{2}{9}$

---

### **Resumen final de las respuestas:**

a) Función de masa de probabilidad:

$$
f(x) = P(X = x) = \frac{13 - 2x}{36}, \quad x = 1, 2, 3, 4, 5, 6
$$

b) Función de distribución:

$$
F(x) = 
\begin{cases} 
0 & \text{si } x < 1 \\
\frac{11}{36} & \text{si } 1 \leq x < 2 \\
\frac{20}{36} = \frac{5}{9} & \text{si } 2 \leq x < 3 \\
\frac{27}{36} = \frac{3}{4} & \text{si } 3 \leq x < 4 \\
\frac{32}{36} = \frac{8}{9} & \text{si } 4 \leq x < 5 \\
\frac{35}{36} & \text{si } 5 \leq x < 6 \\
1 & \text{si } x \geq 6 
\end{cases}
$$

c) Media y varianza:

- $E(X) = \frac{91}{36} \approx 2.5278$
- $\text{Var}(X) = \frac{2555}{1296} \approx 1.971$

d) Probabilidad de que $X$ sea par:

$$
P(X \text{ es par}) = \frac{5}{12}
$$

e) Probabilidades solicitadas:

- $P(X \leq 4)$ = $\frac{8}{9}$
- $P(3 < X \leq 5)$ = $\frac{2}{9}$

{{% /details %}}

## Exercicio 2
{{% details title="Exercicio 2 paso a paso" closed="true" %}}

### **Datos iniciales**
La variable aleatoria $X$ representa el número de semáforos detectados, con valores posibles $x_i = 0, 1, 2, 3, 4$ y probabilidades asociadas $p_i$. La tabla de distribución es:

| $x_i$ | 0    | 1    | 2    | 3    | 4    |
|-------|------|------|------|------|------|
| $p_i$ | 0.85 | 0.08 | ?    | 0.015| 0.005|

Primero, necesitamos determinar el valor de $p_2$ (la probabilidad de $X=2$). Como la suma de las probabilidades debe ser 1, tenemos:

$$
\sum_{i=0}^{4} p_i = 1
$$

Sustituyendo los valores conocidos:

$$
0.85 + 0.08 + p_2 + 0.015 + 0.005 = 1
$$

Sumamos los términos conocidos:

$$
0.85 + 0.08 = 0.93
$$

$$
0.93 + p_2 + 0.015 + 0.005 = 1
$$

$$
0.93 + 0.015 + 0.005 = 0.95
$$

Entonces:

$$
p_2 = 1 - 0.95 = 0.05
$$

Por lo tanto, la probabilidad de $X=2$ es $p_2 = 0.05$. La tabla completa queda:

| $x_i$ | 0    | 1    | 2    | 3    | 4    |
|-------|------|------|------|------|------|
| $p_i$ | 0.85 | 0.08 | 0.05 | 0.015| 0.005|

---

### **a) Calcular el número medio de semáforos detectados, $E(X)$**

La esperanza (o valor esperado) de una variable aleatoria discreta se calcula como:

$$
E(X) = \sum_{x=0}^{4} x \cdot P(X = x)
$$

Sustituyendo los valores de la tabla:

$$
E(X) = 0 \cdot 0.85 + 1 \cdot 0.08 + 2 \cdot 0.05 + 3 \cdot 0.015 + 4 \cdot 0.005
$$

Realizamos los cálculos paso a paso:

- $0 \cdot 0.85 = 0$
- $1 \cdot 0.08 = 0.08$
- $2 \cdot 0.05 = 0.1$
- $3 \cdot 0.015 = 0.045$
- $4 \cdot 0.005 = 0.02$

Sumamos:

$$
E(X) = 0 + 0.08 + 0.1 + 0.045 + 0.02 = 0.245
$$

Por lo tanto, el número medio de semáforos detectados es:

$$
E(X) = 0.245
$$

---

### **b) Calcular la varianza, $Var(X)$**

La varianza de una variable aleatoria discreta se calcula como:

$$
Var(X) = E(X^2) - [E(X)]^2
$$

Primero, calculamos $E(X^2)$:

$$
E(X^2) = \sum_{x=0}^{4} x^2 \cdot P(X = x)
$$

Sustituyendo los valores:

$$
E(X^2) = 0^2 \cdot 0.85 + 1^2 \cdot 0.08 + 2^2 \cdot 0.05 + 3^2 \cdot 0.015 + 4^2 \cdot 0.005
$$

Realizamos los cálculos paso a paso:

- $0^2 \cdot 0.85 = 0$
- $1^2 \cdot 0.08 = 1 \cdot 0.08 = 0.08$
- $2^2 \cdot 0.05 = 4 \cdot 0.05 = 0.2$
- $3^2 \cdot 0.015 = 9 \cdot 0.015 = 0.135$
- $4^2 \cdot 0.005 = 16 \cdot 0.005 = 0.08$

Sumamos:

$$
E(X^2) = 0 + 0.08 + 0.2 + 0.135 + 0.08 = 0.495
$$

Ahora, usamos el valor de $E(X)$ calculado en el apartado a) para obtener la varianza:

$$
Var(X) = E(X^2) - [E(X)]^2
$$

Sustituyendo:

$$
Var(X) = 0.495 - (0.245)^2
$$

Calculamos $(0.245)^2$:

$$
(0.245)^2 = 0.060025
$$

Entonces:

$$
Var(X) = 0.495 - 0.060025 = 0.434975
$$

Por lo tanto, la varianza es:

$$
Var(X) \approx 0.435
$$

---

### **c) Obtener la función de distribución, $F(x)$**

La función de distribución $F(x) = P(X \leq x)$ es la probabilidad acumulada hasta $x$. Para una variable discreta, se calcula sumando las probabilidades $P(X = k)$ para $k \leq x$. La función de distribución se define por tramos según los valores posibles de $X$:

- Para $x < 0$, $F(x) = 0$, ya que $X \geq 0$.
- Para $0 \leq x < 1$, $F(x) = P(X = 0) = 0.85$.
- Para $1 \leq x < 2$, $F(x) = P(X = 0) + P(X = 1) = 0.85 + 0.08 = 0.93$.
- Para $2 \leq x < 3$, $F(x) = P(X = 0) + P(X = 1) + P(X = 2) = 0.85 + 0.08 + 0.05 = 0.98$.
- Para $3 \leq x < 4$, $F(x) = P(X = 0) + P(X = 1) + P(X = 2) + P(X = 3) = 0.85 + 0.08 + 0.05 + 0.015 = 0.995$.
- Para $x \geq 4$, $F(x) = P(X = 0) + P(X = 1) + P(X = 2) + P(X = 3) + P(X = 4) = 0.85 + 0.08 + 0.05 + 0.015 + 0.005 = 1$.

Por lo tanto, la función de distribución es:

$$
F(x) = 
\begin{cases} 
0 & \text{si } x < 0 \\
0.85 & \text{si } 0 \leq x < 1 \\
0.93 & \text{si } 1 \leq x < 2 \\
0.98 & \text{si } 2 \leq x < 3 \\
0.995 & \text{si } 3 \leq x < 4 \\
1 & \text{si } x \geq 4 
\end{cases}
$$

---

### **d) Calcular $P(X \leq 2)$ y $P(X > 3)$**

#### **i) $P(X \leq 2)$**

La probabilidad $P(X \leq 2)$ es la suma de las probabilidades de $X = 0$, $X = 1$ y $X = 2$:

$$
P(X \leq 2) = P(X = 0) + P(X = 1) + P(X = 2)
$$

Sustituyendo los valores:

$$
P(X \leq 2) = 0.85 + 0.08 + 0.05 = 0.98
$$

Por lo tanto:

$$
P(X \leq 2) = 0.98
$$

#### **ii) $P(X > 3)$**

La probabilidad $P(X > 3)$ es la suma de las probabilidades de los valores de $X$ mayores que 3. En este caso, solo $X = 4$ cumple esa condición:

$$
P(X > 3) = P(X = 4)
$$

Sustituyendo:

$$
P(X > 3) = 0.005
$$

Por lo tanto:

$$
P(X > 3) = 0.005
$$

---

### **Respuesta final**

a) El número medio de semáforos detectados es:

$$
E(X) = 0.245
$$

b) La varianza es:

$$
Var(X) \approx 0.435
$$

c) La función de distribución es:

$$
F(x) = 
\begin{cases} 
0 & \text{si } x < 0 \\
0.85 & \text{si } 0 \leq x < 1 \\
0.93 & \text{si } 1 \leq x < 2 \\
0.98 & \text{si } 2 \leq x < 3 \\
0.995 & \text{si } 3 \leq x < 4 \\
1 & \text{si } x \geq 4 
\end{cases}
$$

d) Las probabilidades son:

$$
P(X \leq 2) = 0.98
$$

$$
P(X > 3) = 0.005
$$
{{% /details %}}

## Exercicio 3
{{% details title="Exercicio 3 paso a paso" closed="true" %}}
### **Datos iniciales**
La función de densidad $f(x)$ de la variable aleatoria $X$ está definida por tramos como:

$$
f(x) = 
\begin{cases} 
0 & \text{si } x \leq a \\
k(x^2 - 1) & \text{si } a < x \leq b \\
0 & \text{si } x > b 
\end{cases}
$$

---

### **a) Determinar el soporte de $X$ y maximizar su amplitud, y calcular $k$ para que $f$ sea una función de densidad**

#### **i) Determinar el soporte de $X$ si $k < 0$**

El soporte de $X$ es el intervalo donde $f(x) > 0$, ya que $f(x)$ debe ser no negativa para ser una función de densidad válida. Analizamos la expresión $f(x) = k(x^2 - 1)$ en el intervalo $a < x \leq b$:

Dado que $k < 0$, para que $f(x) \geq 0$, el término $(x^2 - 1)$ debe ser no positivo:

$$
x^2 - 1 \leq 0
$$

Resolviendo la desigualdad:

$$
x^2 \leq 1
$$

$$
-1 \leq x \leq 1
$$

Por lo tanto, el soporte de $X$ debe estar contenido en el intervalo $[-1, 1]$, ya que fuera de este intervalo $x^2 - 1 > 0$, lo que haría que $f(x) < 0$ (inaceptable para una función de densidad). Así, el soporte de $X$ es $[a, b]$, donde:

$$
-1 \leq a < b \leq 1
$$

#### **ii) Maximizar la amplitud del soporte**

La amplitud del soporte es la longitud del intervalo $[a, b]$, es decir, $b - a$. Para maximizar esta amplitud, debemos elegir $a$ y $b$ dentro de los límites $[-1, 1]$ de manera que $b - a$ sea lo mayor posible. Esto ocurre cuando:

- $a = -1$
- $b = 1$

En este caso, la amplitud del soporte es:

$$
b - a = 1 - (-1) = 2
$$

Por lo tanto, el soporte máximo es $[-1, 1]$, con $a = -1$ y $b = 1$.

#### **iii) Calcular $k$ para que $f$ sea una función de densidad**

Para que $f(x)$ sea una función de densidad válida, debe cumplir:

1. $f(x) \geq 0$ en todo su dominio (ya asegurado por el soporte $[-1, 1]$ y $k < 0$).
2. La integral de $f(x)$ sobre todo el dominio debe ser igual a 1:

$$
\int_{-\infty}^{\infty} f(x) \, dx = 1
$$

Dado que $f(x) = 0$ fuera del intervalo $[-1, 1]$, la integral se reduce a:

$$
\int_{-1}^{1} k(x^2 - 1) \, dx = 1
$$

Calculamos la integral:

$$
\int_{-1}^{1} (x^2 - 1) \, dx
$$

Primero, integramos término a término:

- $\int_{-1}^{1} x^2 \, dx$:

La función $x^2$ es par, por lo que:

$$
\int_{-1}^{1} x^2 \, dx = 2 \int_{0}^{1} x^2 \, dx
$$

Calculamos $\int_{0}^{1} x^2 \, dx$:

$$
\int_{0}^{1} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{0}^{1} = \frac{1^3}{3} - \frac{0^3}{3} = \frac{1}{3}
$$

Entonces:

$$
\int_{-1}^{1} x^2 \, dx = 2 \cdot \frac{1}{3} = \frac{2}{3}
$$

- $\int_{-1}^{1} (-1) \, dx$:

La función $-1$ es constante, por lo que:

$$
\int_{-1}^{1} (-1) \, dx = -1 \cdot (1 - (-1)) = -1 \cdot 2 = -2
$$

Sumamos ambos resultados:

$$
\int_{-1}^{1} (x^2 - 1) \, dx = \frac{2}{3} - 2 = \frac{2}{3} - \frac{6}{3} = -\frac{4}{3}
$$

Ahora, resolvemos para $k$:

$$
k \int_{-1}^{1} (x^2 - 1) \, dx = 1
$$

Sustituyendo el valor de la integral:

$$
k \cdot \left( -\frac{4}{3} \right) = 1
$$

Despejamos $k$:

$$
k = \frac{1}{-\frac{4}{3}} = -\frac{3}{4}
$$

Por lo tanto, $k = -\frac{3}{4}$, que cumple con la condición $k < 0$.

#### **Respuesta del apartado a)**

El soporte de $X$ es $[-1, 1]$, con $a = -1$ y $b = 1$ para maximizar la amplitud, y el valor de $k$ es:

$$
k = -\frac{3}{4}
$$

La función de densidad queda:

$$
f(x) = 
\begin{cases} 
0 & \text{si } x \leq -1 \\
-\frac{3}{4}(x^2 - 1) & \text{si } -1 < x \leq 1 \\
0 & \text{si } x > 1 
\end{cases}
$$

---

### **b) Calcular $P(-0.5 < X \leq 0.5)$ y $P(-2 < X \leq 0)$**

Para calcular estas probabilidades, usamos la definición de probabilidad para una variable continua, que es la integral de la función de densidad sobre el intervalo correspondiente.

#### **i) $P(-0.5 < X \leq 0.5)$**

La probabilidad se calcula como:

$$
P(-0.5 < X \leq 0.5) = \int_{-0.5}^{0.5} f(x) \, dx
$$

Sustituimos $f(x)$ en el intervalo $[-1, 1]$:

$$
P(-0.5 < X \leq 0.5) = \int_{-0.5}^{0.5} -\frac{3}{4}(x^2 - 1) \, dx
$$

Expandimos la integral:

$$
= -\frac{3}{4} \int_{-0.5}^{0.5} (x^2 - 1) \, dx
$$

Calculamos $\int_{-0.5}^{0.5} (x^2 - 1) \, dx$:

- $\int_{-0.5}^{0.5} x^2 \, dx$:

La función $x^2$ es par, por lo que:

$$
\int_{-0.5}^{0.5} x^2 \, dx = 2 \int_{0}^{0.5} x^2 \, dx
$$

Calculamos $\int_{0}^{0.5} x^2 \, dx$:

$$
\int_{0}^{0.5} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{0}^{0.5} = \frac{(0.5)^3}{3} - \frac{0^3}{3} = \frac{0.125}{3} = \frac{1}{24}
$$

Entonces:

$$
\int_{-0.5}^{0.5} x^2 \, dx = 2 \cdot \frac{1}{24} = \frac{1}{12}
$$

- $\int_{-0.5}^{0.5} (-1) \, dx$:

La función $-1$ es constante, por lo que:

$$
\int_{-0.5}^{0.5} (-1) \, dx = -1 \cdot (0.5 - (-0.5)) = -1 \cdot 1 = -1
$$

Sumamos ambos resultados:

$$
\int_{-0.5}^{0.5} (x^2 - 1) \, dx = \frac{1}{12} - 1 = \frac{1}{12} - \frac{12}{12} = -\frac{11}{12}
$$

Ahora, calculamos la probabilidad:

$$
P(-0.5 < X \leq 0.5) = -\frac{3}{4} \cdot \left( -\frac{11}{12} \right) = \frac{3}{4} \cdot \frac{11}{12} = \frac{33}{48} = \frac{11}{16}
$$

Por lo tanto:

$$
P(-0.5 < X \leq 0.5) = \frac{11}{16}
$$

#### **ii) $P(-2 < X \leq 0)$**

La probabilidad se calcula como:

$$
P(-2 < X \leq 0) = \int_{-2}^{0} f(x) \, dx
$$

Dado que $f(x) = 0$ para $x \leq -1$, la integral se reduce a:

$$
P(-2 < X \leq 0) = \int_{-1}^{0} f(x) \, dx
$$

Sustituimos $f(x)$:

$$
P(-2 < X \leq 0) = \int_{-1}^{0} -\frac{3}{4}(x^2 - 1) \, dx
$$

Expandimos la integral:

$$
= -\frac{3}{4} \int_{-1}^{0} (x^2 - 1) \, dx
$$

Calculamos $\int_{-1}^{0} (x^2 - 1) \, dx$:

- $\int_{-1}^{0} x^2 \, dx$:

$$
\int_{-1}^{0} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{-1}^{0} = \frac{0^3}{3} - \frac{(-1)^3}{3} = 0 - \left( -\frac{1}{3} \right) = \frac{1}{3}
$$

- $\int_{-1}^{0} (-1) \, dx$:

$$
\int_{-1}^{0} (-1) \, dx = -1 \cdot (0 - (-1)) = -1 \cdot 1 = -1
$$

Sumamos ambos resultados:

$$
\int_{-1}^{0} (x^2 - 1) \, dx = \frac{1}{3} - 1 = \frac{1}{3} - \frac{3}{3} = -\frac{2}{3}
$$

Ahora, calculamos la probabilidad:

$$
P(-2 < X \leq 0) = -\frac{3}{4} \cdot \left( -\frac{2}{3} \right) = \frac{3}{4} \cdot \frac{2}{3} = \frac{6}{12} = \frac{1}{2}
$$

Por lo tanto:

$$
P(-2 < X \leq 0) = \frac{1}{2}
$$

#### **Respuesta del apartado b)**

$$
P(-0.5 < X \leq 0.5) = \frac{11}{16}
$$

$$
P(-2 < X \leq 0) = \frac{1}{2}
$$

---

### **c) Calcular la función de distribución asociada, $F(x)$**

La función de distribución $F(x) = P(X \leq x)$ se define como:

$$
F(x) = \int_{-\infty}^{x} f(t) \, dt
$$

Dado que $f(x) = 0$ fuera del intervalo $[-1, 1]$, calculamos $F(x)$ por tramos:

#### **i) Para $x \leq -1$**

Si $x \leq -1$, entonces $f(t) = 0$ para todo $t \leq x$, por lo que:

$$
F(x) = \int_{-\infty}^{x} f(t) \, dt = 0
$$

#### **ii) Para $-1 < x \leq 1$**

Si $-1 < x \leq 1$, entonces $f(t) = 0$ para $t \leq -1$, y $f(t) = -\frac{3}{4}(t^2 - 1)$ para $-1 < t \leq x$. Por lo tanto:

$$
F(x) = \int_{-\infty}^{x} f(t) \, dt = \int_{-1}^{x} -\frac{3}{4}(t^2 - 1) \, dt
$$

Calculamos la integral:

$$
F(x) = -\frac{3}{4} \int_{-1}^{x} (t^2 - 1) \, dt
$$

Integramos $(t^2 - 1)$:

- $\int (t^2 - 1) \, dt = \int t^2 \, dt - \int 1 \, dt = \frac{t^3}{3} - t + C$

Evaluamos la integral definida de $-1$ a $x$:

$$
\int_{-1}^{x} (t^2 - 1) \, dt = \left[ \frac{t^3}{3} - t \right]_{-1}^{x}
$$

Sustituimos los límites:

- En $t = x$:

$$
\frac{x^3}{3} - x
$$

- En $t = -1$:

$$
\frac{(-1)^3}{3} - (-1) = -\frac{1}{3} + 1 = -\frac{1}{3} + \frac{3}{3} = \frac{2}{3}
$$

Entonces:

$$
\int_{-1}^{x} (t^2 - 1) \, dt = \left( \frac{x^3}{3} - x \right) - \left( \frac{2}{3} \right) = \frac{x^3}{3} - x - \frac{2}{3}
$$

Sustituimos en $F(x)$:

$$
F(x) = -\frac{3}{4} \cdot \left( \frac{x^3}{3} - x - \frac{2}{3} \right)
$$

Distribuimos $-\frac{3}{4}$:

$$
F(x) = -\frac{3}{4} \cdot \frac{x^3}{3} + \frac{3}{4} \cdot x + \frac{3}{4} \cdot \frac{2}{3}
$$

Simplificamos cada término:

- $-\frac{3}{4} \cdot \frac{x^3}{3} = -\frac{x^3}{4}$
- $\frac{3}{4} \cdot x = \frac{3}{4}x$
- $\frac{3}{4} \cdot \frac{2}{3} = \frac{6}{12} = \frac{1}{2}$

Entonces:

$$
F(x) = -\frac{x^3}{4} + \frac{3}{4}x + \frac{1}{2}
$$

#### **iii) Para $x > 1$**

Si $x > 1$, entonces $f(t) = 0$ para $t > 1$, y $F(x)$ incluye toda la densidad hasta $x = 1$:

$$
F(x) = \int_{-\infty}^{1} f(t) \, dt
$$

Esto es igual a 1, ya que $f(x)$ es una función de densidad y la integral sobre todo el soporte debe ser 1:

$$
F(x) = 1 \quad \text{para } x > 1
$$

#### **Respuesta del apartado c)**

La función de distribución es:

$$
F(x) = 
\begin{cases} 
0 & \text{si } x \leq -1 \\
-\frac{x^3}{4} + \frac{3}{4}x + \frac{1}{2} & \text{si } -1 < x \leq 1 \\
1 & \text{si } x > 1 
\end{cases}
$$

---

### **d) Comprobar que $P(-2 < X \leq 0)$ puede obtenerse como $F(0) - F(-2)$**

La probabilidad $P(-2 < X \leq 0)$ se puede expresar usando la función de distribución como:

$$
P(-2 < X \leq 0) = F(0) - F(-2)
$$

Evaluamos $F(0)$ y $F(-2)$ usando la función de distribución obtenida en el apartado c):

- $F(0)$:

Como $0$ está en el intervalo $-1 < x \leq 1$, usamos la expresión correspondiente:

$$
F(x) = -\frac{x^3}{4} + \frac{3}{4}x + \frac{1}{2}
$$

Sustituimos $x = 0$:

$$
F(0) = -\frac{0^3}{4} + \frac{3}{4} \cdot 0 + \frac{1}{2} = \frac{1}{2}
$$

- $F(-2)$:

Como $-2 \leq -1$, usamos la expresión correspondiente:

$$
F(-2) = 0
$$

Entonces:

$$
P(-2 < X \leq 0) = F(0) - F(-2) = \frac{1}{2} - 0 = \frac{1}{2}
$$

Este resultado coincide con el calculado en el apartado b), donde obtuvimos $P(-2 < X \leq 0) = \frac{1}{2}$.

#### **Respuesta del apartado d)**

Se verifica que:

$$
P(-2 < X \leq 0) = F(0) - F(-2) = \frac{1}{2}
$$
{{% /details %}}

## Exercicio 4
{{% details title="Exercicio 4 paso a paso" closed="true" %}}

El objetivo es encontrar la probabilidad de que el diámetro de una pieza, modelado por la función $f(x) = k(x - 1)(x - 3)$ en el intervalo $1 \leq x \leq 3$, esté dentro del rango útil $[1.9, 2.1]$.

---

**Paso 1: Entender el problema**
La función $f(x) = k(x - 1)(x - 3)$ describe la densidad de probabilidad del diámetro $x$ de la pieza en el intervalo $[1, 3]$. Para que $f(x)$ sea una función de densidad de probabilidad válida, debe cumplir que la integral de $f(x)$ sobre el intervalo $[1, 3]$ sea igual a 1, es decir:

$$
\int_{1}^{3} f(x) \, dx = 1
$$

Además, la probabilidad de que el diámetro esté en el rango útil $[1.9, 2.1]$ se calcula como:

$$
P(1.9 \leq x \leq 2.1) = \int_{1.9}^{2.1} f(x) \, dx
$$

Nuestra tarea es:
1. Determinar el valor de la constante $k$ para que $f(x)$ sea una densidad válida.
2. Calcular la probabilidad $P(1.9 \leq x \leq 2.1)$.

---

**Paso 2: Determinar la constante $k$**
Para que $f(x)$ sea una función de densidad de probabilidad, la integral de $f(x)$ sobre $[1, 3]$ debe ser igual a 1:

$$
\int_{1}^{3} k (x - 1)(x - 3) \, dx = 1
$$

Primero, resolvemos la integral $\int_{1}^{3} (x - 1)(x - 3) \, dx$ y luego despejamos $k$.

**a) Expandir la expresión $(x - 1)(x - 3)$**
Expandimos el producto:

$$
(x - 1)(x - 3) = x^2 - 3x - x + 3 = x^2 - 4x + 3
$$

Entonces, la integral que necesitamos resolver es:

$$
\int_{1}^{3} (x^2 - 4x + 3) \, dx
$$

**b) Calcular la integral**
La integral de $x^2 - 4x + 3$ es:

$$
\int (x^2 - 4x + 3) \, dx = \frac{x^3}{3} - \frac{4x^2}{2} + 3x = \frac{x^3}{3} - 2x^2 + 3x
$$

Ahora evaluamos esta integral en los límites $x = 1$ y $x = 3$:

- En $x = 3$:

$$
\frac{3^3}{3} - 2(3^2) + 3(3) = \frac{27}{3} - 2(9) + 9 = 9 - 18 + 9 = 0
$$

- En $x = 1$:

$$
\frac{1^3}{3} - 2(1^2) + 3(1) = \frac{1}{3} - 2 + 3 = \frac{1}{3} + 1 = \frac{4}{3}
$$

Entonces:

$$
\int_{1}^{3} (x^2 - 4x + 3) \, dx = \left[ \frac{x^3}{3} - 2x^2 + 3x \right]_{1}^{3} = 0 - \frac{4}{3} = -\frac{4}{3}
$$

**c) Determinar $k$**
La integral total debe ser igual a 1, por lo que:

$$
k \int_{1}^{3} (x^2 - 4x + 3) \, dx = 1
$$

Sustituyendo el valor de la integral:

$$
k \left( -\frac{4}{3} \right) = 1
$$

Despejamos $k$:

$$
k = -\frac{3}{4}
$$

Por lo tanto, la función de densidad de probabilidad es:

$$
f(x) = -\frac{3}{4} (x - 1)(x - 3), \quad 1 \leq x \leq 3
$$

---

**Paso 3: Calcular la probabilidad $P(1.9 \leq x \leq 2.1)$**
La probabilidad de que el diámetro esté en el rango útil $[1.9, 2.1]$ es:

$$
P(1.9 \leq x \leq 2.1) = \int_{1.9}^{2.1} f(x) \, dx = \int_{1.9}^{2.1} -\frac{3}{4} (x - 1)(x - 3) \, dx
$$

Podemos factorizar la constante $-\frac{3}{4}$ fuera de la integral:

$$
P(1.9 \leq x \leq 2.1) = -\frac{3}{4} \int_{1.9}^{2.1} (x - 1)(x - 3) \, dx
$$

**a) Calcular la integral $\int_{1.9}^{2.1} (x - 1)(x - 3) \, dx$**
Usamos la misma antiderivada que calculamos antes, $\frac{x^3}{3} - 2x^2 + 3x$, y evaluamos en los límites $x = 1.9$ y $x = 2.1$:

- En $x = 2.1$:

$$
\frac{(2.1)^3}{3} - 2(2.1)^2 + 3(2.1)
$$

Calculamos cada término:

- $(2.1)^3 = 2.1 \times 2.1 \times 2.1 = 9.261$, así que $\frac{(2.1)^3}{3} = \frac{9.261}{3} = 3.087$
- $(2.1)^2 = 4.41$, así que $2(2.1)^2 = 2 \times 4.41 = 8.82$
- $3(2.1) = 6.3$

Entonces:

$$
\frac{(2.1)^3}{3} - 2(2.1)^2 + 3(2.1) = 3.087 - 8.82 + 6.3 = 0.567
$$

- En $x = 1.9$:

$$
\frac{(1.9)^3}{3} - 2(1.9)^2 + 3(1.9)
$$

Calculamos cada término:

- $(1.9)^3 = 1.9 \times 1.9 \times 1.9 = 6.859$, así que $\frac{(1.9)^3}{3} = \frac{6.859}{3} \approx 2.2863$
- $(1.9)^2 = 3.61$, así que $2(1.9)^2 = 2 \times 3.61 = 7.22$
- $3(1.9) = 5.7$

Entonces:

$$
\frac{(1.9)^3}{3} - 2(1.9)^2 + 3(1.9) = 2.2863 - 7.22 + 5.7 \approx 0.7663
$$

Ahora calculamos la integral:

$$
\int_{1.9}^{2.1} (x - 1)(x - 3) \, dx = \left[ \frac{x^3}{3} - 2x^2 + 3x \right]_{1.9}^{2.1} = 0.567 - 0.7663 \approx -0.1993
$$

**b) Sustituir en la probabilidad**
La probabilidad es:

$$
P(1.9 \leq x \leq 2.1) = -\frac{3}{4} \int_{1.9}^{2.1} (x - 1)(x - 3) \, dx = -\frac{3}{4} \times (-0.1993) \approx \frac{3}{4} \times 0.1993 \approx 0.1495
$$

---

**Paso 4: Interpretar el resultado**
La probabilidad de que una pieza elegida al azar tenga un diámetro en el rango útil $[1.9, 2.1]$ es aproximadamente:

$$
P(1.9 \leq x \leq 2.1) \approx 0.1495
$$

Esto significa que hay un 14.95% de probabilidad de que una pieza sea útil.

---

#### **Respuesta final**
La probabilidad de que una pieza elegida al azar sea útil es:

$$
\boxed{0.1495}
$$
{{% /details %}}

## Exercicio 5
{{% details title="Exercicio 5 paso a paso" closed="true" %}}

Identificamos los parámetros del problema:
*   Número total de preguntas (ensayos): $n = 20$
*   Probabilidad de contestar correctamente una pregunta (éxito): $p = 0.80$
*   Probabilidad de contestar incorrectamente una pregunta (fracaso): $q = 1 - p = 1 - 0.80 = 0.20$

Este escenario se modela con distribuciones basadas en ensayos de Bernoulli independientes.

**a) ¿Cuál es la probabilidad de que un alumno conteste correctamente a 10 preguntas?**

Este caso sigue una **Distribución Binomial**, ya que buscamos la probabilidad de obtener un número exacto de éxitos ($k=10$) en un número fijo de ensayos ($n=20$).

La fórmula de la distribución binomial es:
$P(X=k) = \binom{n}{k} p^k q^{n-k}$

Donde:
*   $n = 20$
*   $k = 10$
*   $p = 0.8$
*   $q = 0.2$

Calculamos:
$P(X=10) = \binom{20}{10} (0.8)^{10} (0.2)^{20-10}$
$P(X=10) = \binom{20}{10} (0.8)^{10} (0.2)^{10}$

Primero, calculamos el coeficiente binomial:
$\binom{20}{10} = \frac{20!}{10!(20-10)!} = \frac{20!}{10!10!} = 184756$

Luego, las potencias:
$(0.8)^{10} \approx 0.1073741824$
$(0.2)^{10} \approx 0.0000001024$

Finalmente, multiplicamos todo:
$P(X=10) = 184756 \times 0.1073741824 \times 0.0000001024$
$P(X=10) \approx 0.00203135$

La probabilidad de que conteste correctamente a exactamente 10 preguntas es aproximadamente $0.00203$.

$$ P(X=10) \approx 0.00203 $$

**b) ¿Cuál es la probabilidad de que la primera pregunta correcta sea la cuarta?**

Este caso sigue una **Distribución Geométrica**, ya que buscamos la probabilidad de que el primer éxito ocurra en el $k$-ésimo ensayo ($k=4$). Esto implica que los primeros $k-1$ ensayos deben ser fracasos (respuestas incorrectas) y el $k$-ésimo ensayo debe ser un éxito (respuesta correcta).

La secuencia sería: Incorrecta, Incorrecta, Incorrecta, Correcta (IIIC).

La fórmula de la distribución geométrica (para el número de ensayos hasta el primer éxito) es:
$P(X=k) = q^{k-1} p$

Donde:
*   $k = 4$
*   $p = 0.8$
*   $q = 0.2$

Calculamos:
$P(X=4) = (0.2)^{4-1} (0.8)^1$
$P(X=4) = (0.2)^3 (0.8)$
$P(X=4) = 0.008 \times 0.8$
$P(X=4) = 0.0064$

La probabilidad de que la primera pregunta correcta sea la cuarta es $0.0064$.

$$ P(X=4) = 0.0064 $$

**c) ¿Cuál es la probabilidad de que la undécima pregunta sea la quinta correcta que contesta un alumno?**

Este caso sigue una **Distribución Binomial Negativa**, ya que buscamos la probabilidad de que el $r$-ésimo éxito ($r=5$) ocurra en el $k$-ésimo ensayo ($k=11$). Esto significa que en los $k-1$ ensayos anteriores (los primeros 10), deben haber ocurrido exactamente $r-1$ éxitos (4 correctas), y el $k$-ésimo ensayo (la pregunta 11) debe ser un éxito (correcta).

La fórmula de la distribución binomial negativa (para el número de ensayos hasta el $r$-ésimo éxito) es:
$P(X=k) = \binom{k-1}{r-1} p^r q^{k-r}$

Donde:
*   $k = 11$ (número total de ensayos considerados)
*   $r = 5$ (número de éxitos deseado)
*   $p = 0.8$
*   $q = 0.2$

Calculamos:
$P(X=11 \text{ para } r=5) = \binom{11-1}{5-1} (0.8)^5 (0.2)^{11-5}$
$P(X=11 \text{ para } r=5) = \binom{10}{4} (0.8)^5 (0.2)^6$

Primero, calculamos el coeficiente binomial:
$\binom{10}{4} = \frac{10!}{4!(10-4)!} = \frac{10!}{4!6!} = \frac{10 \times 9 \times 8 \times 7}{4 \times 3 \times 2 \times 1} = 210$

Luego, las potencias:
$(0.8)^5 = 0.32768$
$(0.2)^6 = 0.000064$

Finalmente, multiplicamos todo:
$P(X=11 \text{ para } r=5) = 210 \times 0.32768 \times 0.000064$
$P(X=11 \text{ para } r=5) \approx 0.004390848$

La probabilidad de que la undécima pregunta sea la quinta correcta es aproximadamente $0.00439$.

$$ P(X=11 \text{ para } r=5) \approx 0.00439 $$
{{% /details %}}

## Exercicio 6
{{% details title="Exercicio 6 paso a paso" closed="true" %}}
### Desarrollo

#### **Definiciones iniciales**

El chatbot tiene una tasa de precisión del 80%, lo que significa que la probabilidad de responder correctamente una consulta es $p = 0.8$, y la probabilidad de responder incorrectamente es $1 - p = 0.2$. Cada consulta es independiente de las demás, lo que nos permite usar distribuciones binomiales, geométricas o negativas binomiales según corresponda.

---

**a) ¿Cuál es la probabilidad de que el chatbot responda incorrectamente a una pregunta?**

Definimos la variable aleatoria $X$ como el "resultado de una consulta", donde $X = 1$ si la respuesta es correcta y $X = 0$ si es incorrecta. Entonces, $X \sim \text{Bernoulli}(p)$ con $p = 0.8$. La probabilidad de que responda incorrectamente es:

$$
P(X = 0) = 1 - p = 1 - 0.8 = 0.2
$$

---

**b) ¿Cuál es la probabilidad de que el chatbot responda al menos 10 consultas de forma incorrecta en un día, si hay 50 consultas?**

Definimos la variable aleatoria $Y$ como el "número de consultas respondidas incorrectamente en 50 consultas". Dado que cada consulta es independiente y tiene una probabilidad constante de ser incorrecta ($p_{\text{incorrecta}} = 0.2$), entonces $Y \sim \text{Binomial}(n, p)$ con $n = 50$ y $p = 0.2$.

Queremos calcular $P(Y \geq 10)$. Esto se puede expresar como:

$$
P(Y \geq 10) = 1 - P(Y \leq 9)
$$

donde $P(Y \leq 9)$ es la probabilidad acumulada de la distribución binomial:

$$
P(Y \leq 9) = \sum_{k=0}^{9} P(Y = k) = \sum_{k=0}^{9} \binom{50}{k} (0.2)^k (0.8)^{50-k}
$$

Calcular esta suma directamente puede ser complejo, por lo que en la práctica se utiliza una aproximación normal cuando $n$ es grande y $np$ y $n(1-p)$ son suficientemente grandes. Verifiquemos si aplica la aproximación normal:

- Media de $Y$: $\mu = np = 50 \cdot 0.2 = 10$
- Desviación estándar de $Y$: $\sigma = \sqrt{np(1-p)} = \sqrt{50 \cdot 0.2 \cdot 0.8} = \sqrt{8} \approx 2.828$

Dado que $np = 10 > 5$ y $n(1-p) = 40 > 5$, la aproximación normal es válida. Entonces, aproximamos $Y \sim N(\mu, \sigma^2)$, y para calcular $P(Y \geq 10)$, usamos la corrección de continuidad, ya que $Y$ es discreta y la normal es continua. Así, $P(Y \geq 10)$ se aproxima como:

$$
P(Y \geq 10) \approx P\left(Z \geq \frac{10 - 0.5 - \mu}{\sigma}\right) = P\left(Z \geq \frac{9.5 - 10}{2.828}\right) = P(Z \geq -0.177)
$$

donde $Z \sim N(0, 1)$ es la variable normal estándar. Ahora, calculamos:

$$
P(Z \geq -0.177) = 1 - P(Z \leq -0.177) = 1 - P(Z \geq 0.177) \text{ (por simetría de la normal)}
$$

Usando tablas de la distribución normal estándar, $P(Z \leq 0.177) \approx 0.5704$. Entonces:

$$
P(Z \geq -0.177) = 1 - P(Z \leq -0.177) = 1 - (1 - P(Z \leq 0.177)) = P(Z \leq 0.177) \approx 0.5704
$$

Por lo tanto:

$$
P(Y \geq 10) \approx 0.5704
$$

---

**c) ¿Cuál es el número medio de respuestas correctas al día?**

Definimos la variable aleatoria $W$ como el "número de consultas respondidas correctamente en 50 consultas". Dado que cada consulta tiene una probabilidad de ser correcta de $p = 0.8$, entonces $W \sim \text{Binomial}(n, p)$ con $n = 50$ y $p = 0.8$.

El número medio de respuestas correctas es la esperanza de $W$:

$$
E[W] = np = 50 \cdot 0.8 = 40
$$

---

**d) ¿Cuál es la probabilidad de que responda a 3 preguntas de forma incorrecta, antes de dar la primera respuesta correcta?**

Definimos la variable aleatoria $T$ como el "número de consultas respondidas incorrectamente antes de la primera consulta correcta". Dado que cada consulta es independiente y la probabilidad de una respuesta incorrecta es $p_{\text{incorrecta}} = 0.2$, mientras que la probabilidad de una respuesta correcta es $p_{\text{correcta}} = 0.8$, entonces $T \sim \text{Geométrica}(p)$ con $p = 0.8$ (éxito = respuesta correcta).

Queremos calcular $P(T = 3)$, es decir, la probabilidad de que haya exactamente 3 respuestas incorrectas antes de la primera correcta. La función de probabilidad de una distribución geométrica es:

$$
P(T = k) = (1 - p)^k \cdot p
$$

Sustituimos $k = 3$ y $p = 0.8$:

$$
P(T = 3) = (0.2)^3 \cdot 0.8 = 0.008 \cdot 0.8 = 0.0064
$$

---

**e) ¿Cuál es la probabilidad de que tengamos que hacer 5 preguntas para obtener 2 respuestas correctas?**

Definimos la variable aleatoria $V$ como el "número de consultas necesarias para obtener 2 respuestas correctas". Dado que cada consulta es independiente y la probabilidad de una respuesta correcta es $p = 0.8$, entonces $V \sim \text{Negativa Binomial}(r, p)$ con $r = 2$ (número de éxitos requeridos) y $p = 0.8$ (probabilidad de éxito).

Queremos calcular $P(V = 5)$, es decir, la probabilidad de que la quinta consulta sea la que produzca la segunda respuesta correcta. La función de probabilidad de una distribución negativa binomial es:

$$
P(V = n) = \binom{n-1}{r-1} p^r (1 - p)^{n-r}
$$

Sustituimos $n = 5$, $r = 2$, $p = 0.8$:

$$
P(V = 5) = \binom{5-1}{2-1} (0.8)^2 (0.2)^{5-2} = \binom{4}{1} (0.8)^2 (0.2)^3
$$

Calculamos cada término:

- $\binom{4}{1} = 4$
- $(0.8)^2 = 0.64$
- $(0.2)^3 = 0.008$

Entonces:

$$
P(V = 5) = 4 \cdot 0.64 \cdot 0.008 = 0.02048
$$

---

### Resultado final

$$
\begin{aligned}
&\text{a) } P(\text{respuesta incorrecta}) = 0.2 \\
&\text{b) } P(Y \geq 10) \approx 0.5704 \\
&\text{c) } E[W] = 40 \\
&\text{d) } P(T = 3) = 0.0064 \\
&\text{e) } P(V = 5) = 0.02048
\end{aligned}
$$
{{% /details %}}

## Exercicio 7
### Distribución de Poisson y distribución exponencial

#### **Enunciado**

Un proveedor de computación en la nube recibe una media de 6 programas por minuto para ejecutar. Si la estación ha estado parada durante 45 segundos, se nos pide:  
a) Calcular la probabilidad de que hayan quedado sin atender más de 3 programas.  
b) Calcular la probabilidad de que el primer programa después de solucionar la avería llegue antes de 15 segundos.

#### **Desarrollo**

**Definición de variables y distribuciones**  
La llegada de programas sigue un proceso de Poisson, ya que los eventos (llegadas de programas) ocurren de forma independiente y a una tasa constante. La tasa de llegada es $\lambda = 6$ programas por minuto. Para trabajar en segundos, ajustamos la tasa:  
$1$ minuto = $60$ segundos $\implies \lambda = 6$ programas/minuto = $\frac{6}{60}$ programas/segundo = $0.1$ programas/segundo.  

- Para el número de programas que llegan en un intervalo de tiempo $t$ (en segundos), usamos la distribución de Poisson:  
<div style="overflow-x: auto; max-width: 100%; padding: 0.5em 0;">
$X = \text{"número de programas que llegan en } t \text{ segundos"}$  
</div> 
$X \sim \text{Poisson}(\lambda t)$, donde $\lambda = 0.1$ programas/segundo.  

- Para el tiempo de espera hasta la llegada del primer programa, usamos la distribución exponencial, ya que los tiempos entre llegadas en un proceso de Poisson son exponenciales:  
<div style="overflow-x: auto; max-width: 100%; padding: 0.5em 0;">
$T = \text{"tiempo (en segundos) hasta la llegada del primer programa"}$  
</div> 
$T \sim \text{Exponencial}(\lambda)$, donde $\lambda = 0.1$ programas/segundo.  
La función de densidad de $T$ es $f(t) = \lambda e^{-\lambda t}$ para $t > 0$, y la función de distribución acumulada es $F(t) = P(T \leq t) = 1 - e^{-\lambda t}$.  

**a) Probabilidad de que hayan quedado sin atender más de 3 programas**  
Durante los 45 segundos que la estación estuvo parada, los programas que llegaron no fueron atendidos. Definimos:  
<div style="overflow-x: auto; max-width: 100%; padding: 0.5em 0;">
$X = \text{"número de programas que llegaron en 45 segundos"}$  
</div> 
El parámetro de la distribución de Poisson es:  
$\lambda t = 0.1 \cdot 45 = 4.5$  
$\implies X \sim \text{Poisson}(4.5)$  

Queremos calcular $P(X > 3)$. Para una distribución de Poisson, la probabilidad acumulada es:  
$P(X \leq k) = \sum_{i=0}^{k} e^{-\lambda t} \frac{(\lambda t)^i}{i!}$  
Por lo tanto:  
$P(X > 3) = 1 - P(X \leq 3)$  
$\phantom{P(X > 3)} = 1 - \sum_{i=0}^{3} e^{-4.5} \frac{(4.5)^i}{i!}$  


Calculamos cada término de la suma:  
$\lambda t = 4.5 \implies e^{-4.5} \approx 0.01111$ (usando $e^{-4.5} = \frac{1}{e^{4.5}}$ y $e^{4.5} \approx 90.017$):  
- $i = 0$: $e^{-4.5} \frac{(4.5)^0}{0!} = e^{-4.5} \cdot 1 \approx 0.01111$  
- $i = 1$: $e^{-4.5} \frac{(4.5)^1}{1!} = e^{-4.5} \cdot 4.5 \approx 0.01111 \cdot 4.5 \approx 0.05000$  
- $i = 2$: $e^{-4.5} \frac{(4.5)^2}{2!} = e^{-4.5} \cdot \frac{20.25}{2} \approx 0.01111 \cdot 10.125 \approx 0.11250$  
- $i = 3$: $e^{-4.5} \frac{(4.5)^3}{3!} = e^{-4.5} \cdot \frac{91.125}{6} \approx 0.01111 \cdot 15.1875 \approx 0.16873$  

Sumamos:  
$P(X \leq 3) = 0.01111 + 0.05000 + 0.11250 + 0.16873 \approx 0.34234$  
$\implies P(X > 3) = 1 - P(X \leq 3) \approx 1 - 0.34234 \approx 0.65766$  

**b) Probabilidad de que el primer programa llegue antes de 15 segundos**  
Definimos:  
<div style="overflow-x: auto; max-width: 100%; padding: 0.5em 0;">
$T = \text{"tiempo (en segundos) hasta la llegada del primer programa"}$  
</div> 
$T \sim \text{Exponencial}(\lambda)$, con $\lambda = 0.1$ programas/segundo.  
Queremos calcular $P(T < 15)$. Usamos la función de distribución acumulada de la exponencial:  
$P(T < t) = 1 - e^{-\lambda t}$  
Sustituyendo $t = 15$ y $\lambda = 0.1$:  
$P(T < 15) = 1 - e^{-0.1 \cdot 15}$  
$\phantom{P(T < 15)} = 1 - e^{-1.5}$  
Calculamos $e^{1.5} \approx 4.4817 \implies e^{-1.5} = \frac{1}{e^{1.5}} \approx 0.22313$  
$\phantom{P(T < 15)} = 1 - 0.22313 \approx 0.77687$  

### Resultado final

a) $P(X > 3) \approx 0.6577$  
b) $P(T < 15) \approx 0.7769$

## Exercicio 7 pero aproximando á normal
{{% details title="Exercicio 7 resolto pero por Aproximación normal" closed="true" %}}

#### **a) Aproximación normal (usando la tabla de $N(0,1)$)**
La distribución de Poisson con parámetro $\lambda$ puede aproximarse a una distribución normal cuando $\lambda$ es "suficientemente grande" (generalmente $\lambda > 10$ es una buena regla, aunque para $\lambda > 5$ la aproximación puede ser razonable). La aproximación es:

- $X \sim \text{Poisson}(\lambda)$ se aproxima a $Y \sim N(\mu, \sigma^2)$, donde:
  - $\mu = \lambda$
  - $\sigma = \sqrt{\lambda}$

- Luego, estandarizamos para usar la tabla de la normal estándar:
  $Z = \frac{Y - \mu}{\sigma}$

- Si estamos calculando probabilidades exactas o acumuladas, usamos la corrección de continuidad, ya que $X$ es discreta y $Y$ es continua.

**Ejemplo aplicado al ejercicio 7**:
Queremos $P(X > 3)$ para $X \sim \text{Poisson}(4.5)$. Usemos la aproximación normal:
- $\lambda = 4.5$
- $\mu = \lambda = 4.5$
- $\sigma = \sqrt{\lambda} = \sqrt{4.5} \approx 2.121$

Queremos $P(X > 3) = P(X \geq 4)$, ya que $X$ es discreta. Con la corrección de continuidad:
$P(X \geq 4) \approx P(Y > 3.5)$, donde $Y \sim N(4.5, 2.121^2)$.

Estandarizamos:
$Z = \frac{Y - \mu}{\sigma} = \frac{3.5 - 4.5}{2.121} \approx \frac{-1}{2.121} \approx -0.471$

Entonces:
$P(Y > 3.5) = P(Z > -0.471) = 1 - P(Z \leq -0.471)$

Usamos la tabla de la normal estándar $N(0,1)$. Como $Z$ es simétrica:
$P(Z \leq -0.471) = 1 - P(Z \leq 0.471)$

Consultamos la tabla para $z = 0.47$ (aproximando, ya que $0.471$ no está exactamente):
$P(Z \leq 0.47) \approx 0.6808$

Entonces:
$P(Z \leq -0.471) = 1 - 0.6808 = 0.3192$

Y:
$P(Z > -0.471) = 1 - P(Z \leq -0.471) = 1 - 0.3192 \approx 0.6808$

**Resultado con aproximación normal**:
$P(X > 3) \approx 0.6808$

**Comparación**:
En el ejercicio 7, calculamos manualmente $P(X > 3) \approx 0.6577$. La diferencia se debe a que $\lambda = 4.5$ no es lo suficientemente grande para que la aproximación normal sea muy precisa, pero este método es útil cuando $\lambda$ es mayor o cuando no tienes otra opción.

**Cuándo usar esta aproximación**:
- Si $\lambda > 10$, la aproximación es muy buena.
- Si $5 < \lambda < 10$, la aproximación es razonable, pero puede haber errores como el que vimos.
- Si $\lambda < 5$, es mejor evitar esta aproximación y calcular manualmente o usar otra estrategia.


{{% /details %}}

## Exercicio 8
### Distribución binomial y aproximación normal

#### **Enunciado**

Tenemos 140 trabajadores que deciden de forma independiente si toman o no el autobús, con una probabilidad de $p = 0.15$ de tomar el autobús. Sea $X$ la variable que representa el número de trabajadores que suben al autobús. Se nos pide:  
a) Determinar la distribución de $X$ y el número esperado de trabajadores que suben al autobús.  
b) Calcular la probabilidad de que exactamente 21 trabajadores suban al autobús.  
c) Calcular la probabilidad de que más de 40 trabajadores suban al autobús.

#### **Desarrollo**

**Definición de la variable y la distribución**  
$X$ representa el número de trabajadores que suben al autobús. Como cada trabajador decide de forma independiente y la probabilidad de éxito (tomar el autobús) es constante e igual a $p = 0.15$, la variable $X$ sigue una distribución binomial:  
$X \sim \text{Binomial}(n, p)$ con:  
$n = 140$ (número de ensayos)  
$p = 0.15$ (probabilidad de éxito)  
$q = 1 - p = 0.85$ (probabilidad de fracaso)  

**a) Distribución de $X$ y número esperado**  
La distribución de $X$ es:  
$X \sim \text{Binomial}(140, 0.15)$  
El número esperado de trabajadores que suben al autobús es el valor esperado de $X$:  
$E(X) = np = 140 \cdot 0.15 = 21$  

**b) Probabilidad de que exactamente 21 trabajadores suban al autobús**  
Queremos calcular $P(X = 21)$. Para una distribución binomial, la probabilidad de exactamente $k$ éxitos es:  
$P(X = k) = \binom{n}{k} p^k q^{n-k}$  
Sustituyendo $n = 140$, $k = 21$, $p = 0.15$, $q = 0.85$:  
$P(X = 21) = \binom{140}{21} (0.15)^{21} (0.85)^{119}$  

Debido a la complejidad de calcular $\binom{140}{21}$ y las potencias directamente, usamos la aproximación normal, ya que $n$ es grande y las condiciones para la aproximación se cumplen:  
Verificación de la aproximación normal:  

$$
\left\{
\begin{aligned}
np &= 140 \cdot 0.15 = 21 > 5 \\
nq &= 140 \cdot 0.85 = 119 > 5
\end{aligned}
\right.
$$ 

Parámetros de la normal:  
$\mu = np = 140 \cdot 0.15 = 21$  
$\sigma = \sqrt{npq} = \sqrt{140 \cdot 0.15 \cdot 0.85} = \sqrt{17.85} \approx 4.225$  

Aproximación:  
$Y \sim N(21, 4.225^2)$  
$Z = \frac{Y - 21}{4.225}, \quad Z \sim N(0, 1)$  

Para $P(X = 21)$, usamos la corrección de continuidad, ya que $X$ es discreta y $Y$ es continua:  
$P(X = 21) \approx P(20.5 \leq Y \leq 21.5)$  
$\phantom{P(X = 21)} = P\left(\frac{20.5 - 21}{4.225} \leq Z \leq \frac{21.5 - 21}{4.225}\right)$  
$\phantom{P(X = 21)} = P\left(-0.118 \leq Z \leq 0.118\right)$  
$\phantom{P(X = 21)} = P(Z \leq 0.118) - P(Z \leq -0.118)$  
$\phantom{P(X = 21)} = P(Z \leq 0.118) - (1 - P(Z \leq 0.118))$  
$\phantom{P(X = 21)} = 2P(Z \leq 0.118) - 1$  
Consultando la tabla de la distribución normal estándar, $P(Z \leq 0.12) \approx 0.5478$:  
$\phantom{P(X = 21)} \approx 2 \cdot 0.5478 - 1 = 0.0956$  

**c) Probabilidad de que más de 40 trabajadores suban al autobús**  
Queremos calcular $P(X > 40)$. Usando la aproximación normal con corrección de continuidad:  
$P(X > 40) = P(X \geq 41) \approx P(Y > 40.5)$  
$\phantom{P(X > 40)} = P\left(Z > \frac{40.5 - 21}{4.225}\right)$  
$\phantom{P(X > 40)} = P(Z > 4.615)$  
$\phantom{P(X > 40)} = 1 - P(Z \leq 4.615)$  
Dado que $P(Z \leq 4.615) \approx 1$ (ya que 4.615 es un valor extremo en la cola derecha de la distribución normal estándar):  
$\phantom{P(X > 40)} \approx 1 - 1 = 0$  

Esto indica que la probabilidad de que más de 40 trabajadores suban al autobús es prácticamente nula.

### Resultado final

a) La distribución de $X$ es $X \sim \text{Binomial}(140, 0.15)$. El número esperado de trabajadores que suben al autobús es $E(X) = 21$.  
b) $P(X = 21) \approx 0.0956$  
c) $P(X > 40) \approx 0$

## Exercicio 9
### Probabilidad con distribución hipergeométrica

#### **Enunciado**

Queremos calcular la probabilidad de que, al seleccionar al azar un conjunto de 10 imágenes de entrenamiento sin repetición de un total de 50 imágenes, de las cuales 20 son de la categoría “perros”, al menos 7 sean de la categoría “perros”.

#### **Desarrollo**

Definimos la variable aleatoria:  
<div style="overflow-x: auto; max-width: 100%; padding: 0.5em 0;">
$X = \text{"número de imágenes de la categoría perros en una muestra de 10 imágenes"}$
</div> 

La selección se realiza sin reemplazo, por lo que $X$ sigue una distribución hipergeométrica:  
$X \sim \text{Hipergeométrica}(N, K, n)$  
donde:  
$N = 50$ (tamaño total de la población, número total de imágenes)  
$K = 20$ (número de éxitos en la población, imágenes de la categoría “perros”)  
$n = 10$ (tamaño de la muestra, imágenes seleccionadas)  

La función de probabilidad de una distribución hipergeométrica es:  
$P(X = k) = \frac{\binom{K}{k} \binom{N - K}{n - k}}{\binom{N}{n}}$  
donde $\binom{a}{b} = \frac{a!}{b!(a - b)!}$ es el coeficiente binomial.

Queremos calcular:  
$P(X \geq 7)$  

Esto equivale a:  
$P(X \geq 7) = P(X = 7) + P(X = 8) + P(X = 9) + P(X = 10)$  

Cada término $P(X = k)$ se calcula usando la fórmula de la hipergeométrica. Procedemos paso a paso para cada valor de $k$ y luego sumamos.

**Cálculo de $P(X = 7)$**  
$P(X = 7) = \frac{\binom{20}{7} \binom{30}{3}}{\binom{50}{10}}$  
$\phantom{P(X = 7)} = \frac{\frac{20!}{7!13!} \cdot \frac{30!}{3!27!}}{\frac{50!}{10!40!}}$  
$\phantom{P(X = 7)} = \frac{\binom{20}{7} \cdot \binom{30}{3}}{\binom{50}{10}}$  
Calculamos cada coeficiente binomial:  
$\binom{20}{7} = \frac{20 \cdot 19 \cdot 18 \cdot 17 \cdot 16 \cdot 15 \cdot 14}{7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1} = 77,520$  
$\binom{30}{3} = \frac{30 \cdot 29 \cdot 28}{3 \cdot 2 \cdot 1} = 4,060$  
$\binom{50}{10} = \frac{50 \cdot 49 \cdot 48 \cdot 47 \cdot 46 \cdot 45 \cdot 44 \cdot 43 \cdot 42 \cdot 41}{10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1} = 10,272,278,170$  
Entonces:  
$P(X = 7) = \frac{77,520 \cdot 4,060}{10,272,278,170} = \frac{314,731,200}{10,272,278,170} \approx 0.03063$  

**Cálculo de $P(X = 8)$**  
$P(X = 8) = \frac{\binom{20}{8} \binom{30}{2}}{\binom{50}{10}}$  
$\phantom{P(X = 8)} = \frac{\frac{20!}{8!12!} \cdot \frac{30!}{2!28!}}{\frac{50!}{10!40!}}$  
$\phantom{P(X = 8)} = \frac{\binom{20}{8} \cdot \binom{30}{2}}{\binom{50}{10}}$  
Calculamos cada coeficiente binomial:  
$\binom{20}{8} = \frac{20 \cdot 19 \cdot 18 \cdot 17 \cdot 16 \cdot 15 \cdot 14 \cdot 13}{8 \cdot 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1} = 125,970$  
$\binom{30}{2} = \frac{30 \cdot 29}{2 \cdot 1} = 435$  
$\binom{50}{10}$ ya fue calculado: $10,272,278,170$  
Entonces:  
$P(X = 8) = \frac{125,970 \cdot 435}{10,272,278,170} = \frac{54,796,950}{10,272,278,170} \approx 0.00533$  

**Cálculo de $P(X = 9)$**  
$P(X = 9) = \frac{\binom{20}{9} \binom{30}{1}}{\binom{50}{10}}$  
$\phantom{P(X = 9)} = \frac{\frac{20!}{9!11!} \cdot \frac{30!}{1!29!}}{\frac{50!}{10!40!}}$  
$\phantom{P(X = 9)} = \frac{\binom{20}{9} \cdot \binom{30}{1}}{\binom{50}{10}}$  
Calculamos cada coeficiente binomial:  
$\binom{20}{9} = \frac{20 \cdot 19 \cdot 18 \cdot 17 \cdot 16 \cdot 15 \cdot 14 \cdot 13 \cdot 12}{9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1} = 167,960$  
$\binom{30}{1} = 30$  
$\binom{50}{10}$ ya fue calculado: $10,272,278,170$  
Entonces:  
$P(X = 9) = \frac{167,960 \cdot 30}{10,272,278,170} = \frac{5,038,800}{10,272,278,170} \approx 0.00049$  

**Cálculo de $P(X = 10)$**  
$P(X = 10) = \frac{\binom{20}{10} \binom{30}{0}}{\binom{50}{10}}$  
$\phantom{P(X = 10)} = \frac{\frac{20!}{10!10!} \cdot \frac{30!}{0!30!}}{\frac{50!}{10!40!}}$  
$\phantom{P(X = 10)} = \frac{\binom{20}{10} \cdot \binom{30}{0}}{\binom{50}{10}}$  
Calculamos cada coeficiente binomial:  
$\binom{20}{10} = \frac{20 \cdot 19 \cdot 18 \cdot 17 \cdot 16 \cdot 15 \cdot 14 \cdot 13 \cdot 12 \cdot 11}{10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1} = 184,756$  
$\binom{30}{0} = 1$  
$\binom{50}{10}$ ya fue calculado: $10,272,278,170$  
Entonces:  
$P(X = 10) = \frac{184,756 \cdot 1}{10,272,278,170} = \frac{184,756}{10,272,278,170} \approx 0.000018$  

**Cálculo de $P(X \geq 7)$**  
$P(X \geq 7) = P(X = 7) + P(X = 8) + P(X = 9) + P(X = 10)$  
$\phantom{P(X \geq 7)} \approx 0.03063 + 0.00533 + 0.00049 + 0.000018$  
$\phantom{P(X \geq 7)} \approx 0.03647$  

### Resultado final

La probabilidad de que al menos 7 de las 10 imágenes seleccionadas sean de la categoría “perros” es:  
$P(X \geq 7) \approx 0.03647$


## Exercicio 9 pero aproximando á normal

{{% details title="Ex 9 resolto pero por Aproximación normal da distribución hipergeométrica " closed="true" %}}


### Aproximación de la distribución hipergeométrica a la distribución normal

#### **Condiciones para la aproximación**

La distribución hipergeométrica $X \sim \text{Hipergeométrica}(N, K, n)$ puede aproximarse a una distribución normal cuando el tamaño de la muestra $n$ es suficientemente grande y la proporción de éxitos en la población $\frac{K}{N}$ no está demasiado cerca de 0 ni de 1. Más específicamente, las condiciones para usar la aproximación normal son:

1. **Tamaño de la muestra grande**: $n$ debe ser lo suficientemente grande.
2. **Tamaño de la población grande**: $N$ debe ser grande en comparación con $n$ (generalmente, $n \leq 0.1N$ es una buena regla práctica, aunque no estricta).
3. **Varianza suficiente**: La varianza de la distribución hipergeométrica debe ser lo suficientemente grande para que la forma de la distribución se asemeje a una campana (como en la normal). Esto ocurre cuando $np(1-p)$ es grande, donde $p = \frac{K}{N}$.

Si estas condiciones se cumplen, podemos aproximar:  
$X \sim \text{Hipergeométrica}(N, K, n) \approx Y \sim N(\mu, \sigma^2)$  
donde:  
- $\mu$ es la media de la distribución hipergeométrica:  
  $\mu = n \cdot \frac{K}{N}$  
- $\sigma^2$ es la varianza de la distribución hipergeométrica:  
  $\sigma^2 = n \cdot \frac{K}{N} \cdot \frac{N - K}{N} \cdot \frac{N - n}{N - 1}$  

La variable estandarizada se define como:  
$Z = \frac{X - \mu}{\sigma}, \quad Z \sim N(0, 1)$

#### **Corrección por continuidad**

Dado que la distribución hipergeométrica es discreta y la normal es continua, al calcular probabilidades como $P(X \geq k)$, $P(X \leq k)$ o $P(X = k)$, debemos aplicar una **corrección por continuidad** para mejorar la precisión de la aproximación. Las reglas son:

- Para $P(X \geq k)$: Aproximamos como $P(Y \geq k - 0.5)$, donde $Y \sim N(\mu, \sigma^2)$.
- Para $P(X \leq k)$: Aproximamos como $P(Y \leq k + 0.5)$.
- Para $P(X = k)$: Aproximamos como $P(k - 0.5 \leq Y \leq k + 0.5)$.

#### **Ventajas y limitaciones**

- **Ventajas**: Esta aproximación evita el cálculo tedioso de coeficientes binomiales y sumas de muchos términos, especialmente útil cuando el rango de valores a considerar es grande (por ejemplo, $P(X \geq 7)$ en el ejercicio 9, que requirió sumar 4 términos, podría ser mucho peor si fuera $P(X \geq 20)$ en un caso con $n$ grande).
- **Limitaciones**: La aproximación no es precisa si $N$ es pequeño, si $n$ es una fracción grande de $N$, o si $\frac{K}{N}$ está muy cerca de 0 o 1, ya que la distribución hipergeométrica puede volverse asimétrica en esos casos.

Ahora, vamos a retomar el ejercicio 9 y resolverlo usando esta aproximación, para que veas cómo funciona en la práctica y compares el resultado con el método exacto.

---

#### **Enunciado**

Queremos calcular la probabilidad de que, al seleccionar al azar un conjunto de 10 imágenes de entrenamiento sin repetición de un total de 50 imágenes, de las cuales 20 son de la categoría “perros”, al menos 7 sean de la categoría “perros”.

#### **Desarrollo**

Definimos la variable aleatoria:  

<div style="overflow-x: auto; max-width: 100%; padding: 0.5em 0;">
$X = \text{"número de imágenes de la categoría perros en una muestra de 10 imágenes"}$
</div> 

La selección se realiza sin reemplazo, por lo que $X$ sigue una distribución hipergeométrica:  
$X \sim \text{Hipergeométrica}(N, K, n)$  
donde:  
$N = 50$ (tamaño total de la población, número total de imágenes)  
$K = 20$ (número de éxitos en la población, imágenes de la categoría “perros”)  
$n = 10$ (tamaño de la muestra, imágenes seleccionadas)  

Queremos calcular:  
$P(X \geq 7)$

**Paso 1: Verificación de la aproximación normal**  
Calculamos los parámetros de la distribución hipergeométrica para evaluar si la aproximación normal es razonable:  
- Media: $\mu = n \cdot \frac{K}{N} = 10 \cdot \frac{20}{50} = 10 \cdot 0.4 = 4$  
- Varianza: $\sigma^2 = n \cdot \frac{K}{N} \cdot \frac{N - K}{N} \cdot \frac{N - n}{N - 1}$  
  $\phantom{\sigma^2} = 10 \cdot \frac{20}{50} \cdot \frac{30}{50} \cdot \frac{40}{49}$  
  $\phantom{\sigma^2} = 10 \cdot 0.4 \cdot 0.6 \cdot \frac{40}{49}$  
  $\phantom{\sigma^2} = 10 \cdot 0.24 \cdot \frac{40}{49}$  
  $\phantom{\sigma^2} \approx 10 \cdot 0.24 \cdot 0.8163 \approx 1.9592$  
- Desviación estándar: $\sigma = \sqrt{\sigma^2} \approx \sqrt{1.9592} \approx 1.4$  

Verificamos las condiciones:  
- $N = 50$ es relativamente grande.  
- $n = 10$ es el 20% de $N$, lo cual no es ideal (se prefiere $n \leq 0.1N$), pero aún puede ser aceptable para una aproximación aproximada.  
- La varianza $\sigma^2 \approx 1.9592$ no es muy grande, pero la distribución no es extremadamente asimétrica, ya que $p = \frac{K}{N} = 0.4$ no está cerca de 0 ni de 1.  

Aunque las condiciones no son ideales, procedemos con la aproximación normal para ilustrar el método, pero debemos ser conscientes de que el resultado puede no ser tan preciso como el cálculo exacto.

Aproximamos:  
$X \sim \text{Hipergeométrica}(50, 20, 10) \approx Y \sim N(4, 1.4^2)$  
$Z = \frac{Y - 4}{1.4}, \quad Z \sim N(0, 1)$

**Paso 2: Cálculo de $P(X \geq 7)$ con corrección por continuidad**  
$P(X \geq 7) \approx P(Y \geq 7 - 0.5) = P(Y \geq 6.5)$  
$\phantom{P(X \geq 7)} = P\left(Z \geq \frac{6.5 - 4}{1.4}\right)$  
$\phantom{P(X \geq 7)} = P\left(Z \geq \frac{2.5}{1.4}\right)$  
$\phantom{P(X \geq 7)} = P(Z \geq 1.7857)$  
$\phantom{P(X \geq 7)} = 1 - P(Z < 1.7857)$  

Usamos la tabla de la distribución normal estándar para aproximar $P(Z < 1.7857)$:  
- Para $Z = 1.78$, $P(Z < 1.78) \approx 0.9625$  
- Para $Z = 1.79$, $P(Z < 1.79) \approx 0.9633$  
Interpolamos linealmente para $Z = 1.7857$:  
$\phantom{P(X \geq 7)} P(Z < 1.7857) \approx 0.9625 + \frac{0.9633 - 0.9625}{1.79 - 1.78} \cdot (1.7857 - 1.78)$  
$\phantom{P(X \geq 7)} \approx 0.9625 + 0.08 \cdot 0.057 \approx 0.9625 + 0.00456 \approx 0.9671$  

Entonces:  
$P(X \geq 7) \approx 1 - 0.9671 \approx 0.0329$

**Paso 3: Comparación con el resultado exacto**  
En el cálculo exacto del ejercicio 9, obtuvimos:  
$P(X \geq 7) \approx 0.03647$  

La aproximación normal nos da $P(X \geq 7) \approx 0.0329$, lo cual está razonablemente cerca, pero no exacto. Esto se debe a que $n = 10$ es un poco grande en relación con $N = 50$ (20%), lo que hace que la distribución hipergeométrica tenga una varianza ligeramente más pequeña que la binomial (debido al factor de corrección $\frac{N - n}{N - 1}$), y la aproximación normal no es perfecta en este caso.

#### **Conclusión sobre la aproximación**

La aproximación normal es útil cuando:  
- $N$ es muy grande (por ejemplo, $N > 1000$).  
- $n$ es pequeño en comparación con $N$ (por ejemplo, $n < 0.1N$).  
- $\frac{K}{N}$ no está cerca de 0 ni de 1, para evitar distribuciones muy asimétricas.  

En casos como el ejercicio 9, donde $N = 50$ y $n = 10$, la aproximación normal puede dar resultados razonables, pero no tan precisos como el cálculo exacto. Si $N$ fuera mucho mayor (por ejemplo, $N = 1000$, $K = 400$, $n = 50$), la aproximación sería mucho más precisa.
{{% /details %}}

## Exercicio 10 

### Probabilidad con distribución de Poisson

#### **Enunciado**

Queremos calcular la probabilidad de que un algoritmo de reconocimiento de voz, que comete en promedio 1 error por cada 1000 palabras reconocidas, cometa exactamente 4 errores en una transcripción de 5000 palabras.

#### **Desarrollo**

Definimos la variable aleatoria:  

<div style="overflow-x: auto; max-width: 100%; padding: 0.5em 0;">
$X = \text{"número de errores cometidos por el algoritmo en 5000 palabras"}$
</div>

Dado que los errores ocurren de manera aleatoria e independiente, y se proporciona una tasa promedio de ocurrencia, este problema se modela con una distribución de Poisson:  
$X \sim \text{Poisson}(\lambda)$  
donde $\lambda$ es el número esperado de errores en 5000 palabras.

Calculamos $\lambda$:  
La tasa de errores es 1 error por cada 1000 palabras, es decir, $\frac{1}{1000}$ errores por palabra. Para 5000 palabras:  
$\lambda = \text{tasa de errores por palabra} \cdot \text{número de palabras} = \frac{1}{1000} \cdot 5000 = 5$  

Por lo tanto:  
$X \sim \text{Poisson}(5)$

La función de probabilidad de una distribución de Poisson es:  
$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$  
donde $k$ es el número de eventos (en este caso, errores).

Queremos calcular:  
$P(X = 4)$

Aplicamos la fórmula de Poisson con $\lambda = 5$ y $k = 4$:  
$P(X = 4) = \frac{5^4 e^{-5}}{4!}$  
$\phantom{P(X = 4)} = \frac{5^4 \cdot e^{-5}}{4 \cdot 3 \cdot 2 \cdot 1}$  
$\phantom{P(X = 4)} = \frac{625 \cdot e^{-5}}{24}$  

Calculamos cada componente:  
$5^4 = 625$  
$4! = 24$  
$e^{-5} \approx 0.006737947$ (usando la constante $e \approx 2.71828$)  

Entonces:  
$P(X = 4) = \frac{625 \cdot 0.006737947}{24}$  
$\phantom{P(X = 4)} \approx \frac{4.211217}{24}$  
$\phantom{P(X = 4)} \approx 0.175467$

### Resultado final

La probabilidad de que el algoritmo cometa exactamente 4 errores en una transcripción de 5000 palabras es:  
$P(X = 4) \approx 0.1755$

## Exercicio 11
### Probabilidad de cervezas retiradas
#### **Enunciado**

De 200 cervezas catadas, 25 no alcanzan el amargor requerido y deben ser retiradas. Se eligen 30 cervezas al azar para analizar su amargor mediante un algoritmo. Calculemos la probabilidad de que exactamente 2 de estas 30 cervezas deban ser retiradas bajo dos escenarios:  
a) Con reemplazamiento.  
b) Sin reemplazamiento.

#### **Desarrollo**

Definimos:  
- $N = 200$: total de cervezas.  
- $D = 25$: cervezas defectuosas (que deben ser retiradas).  
- $S = 200 - 25 = 175$: cervezas no defectuosas.  
- $n = 30$: número de cervezas seleccionadas.  
- $X$: número de cervezas defectuosas en la muestra de 30.  

Queremos calcular $P(X = 2)$ en ambos escenarios.

**a) Con reemplazamiento**  

En este caso, cada selección es independiente, ya que las cervezas se devuelven al conjunto tras ser elegidas. La probabilidad de elegir una cerveza defectuosa en cada selección es constante:  
$p = \frac{D}{N} = \frac{25}{200} = 0.125$  
$q = 1 - p = 1 - 0.125 = 0.875$  

El número de cervezas defectuosas $X$ en las 30 selecciones sigue una distribución binomial:  
$X \sim \text{Binomial}(n, p)$ con $n = 30$ y $p = 0.125$.  

La probabilidad de que exactamente 2 cervezas sean defectuosas es:  
$P(X = 2) = \binom{n}{x} p^x q^{n-x}$  
$\phantom{P(X = 2)} = \binom{30}{2} (0.125)^2 (0.875)^{28}$  

Calculamos cada término:  
- $\binom{30}{2} = \frac{30 \cdot 29}{2} = 435$  
- $(0.125)^2 = (0.125)^2 = 0.015625$  
- $(0.875)^{28}$ (aproximamos usando calculadora o tablas): $(0.875)^{28} \approx 0.02378$  

Entonces:  
$P(X = 2) = 435 \cdot 0.015625 \cdot 0.02378 \approx 0.1616$

**b) Sin reemplazamiento**  

En este caso, las selecciones no son independientes, ya que una cerveza elegida no puede ser seleccionada nuevamente. El número de cervezas defectuosas $X$ en la muestra de 30 sigue una distribución hipergeométrica:  
$X \sim \text{Hipergeométrica}(N, D, n)$ con $N = 200$, $D = 25$, $n = 30$.  

La probabilidad de que exactamente 2 cervezas sean defectuosas es:  
$$
P(X = 2) = \frac{\binom{D}{x} \binom{S}{n-x}}{\binom{N}{n}}
$$
$$
\phantom{P(X = 2)} = \frac{\binom{25}{2} \binom{175}{28}}{\binom{200}{30}}
$$
Calculamos cada término:  
- $\binom{25}{2} = \frac{25 \cdot 24}{2} = 300$  
- $\binom{175}{28}$ y $\binom{200}{30}$ son combinatorios grandes, pero podemos expresar la probabilidad directamente:  
$P(X = 2) = \frac{\binom{25}{2} \binom{175}{28}}{\binom{200}{30}}$  

Para calcularlo numéricamente, usamos la fórmula de la hipergeométrica en términos de probabilidades:  
$$
P(X = 2) = \frac{\frac{D!}{x!(D-x)!} \cdot \frac{S!}{(n-x)!(S-n+x)!}}{\frac{N!}{n!(N-n)!}}
$$  

Sin embargo, para mayor claridad, calculamos los combinatorios paso a paso. La expresión completa es:  
$$
P(X = 2) = \frac{\frac{25 \cdot 24}{2} \cdot \frac{175!}{28! \cdot 147!}}{\frac{200!}{30! \cdot 170!}}
$$  


Simplificamos:  
$$
P(X = 2) = \frac{300 \cdot \frac{175 \cdot 174 \cdot \ldots \cdot 148}{28 \cdot 27 \cdot \ldots \cdot 1}}{\frac{200 \cdot 199 \cdot \ldots \cdot 171}{30 \cdot 29 \cdot \ldots \cdot 1}}
$$  

Aunque este cálculo es complejo, usamos software o aproximaciones numéricas para obtener:  
$P(X = 2) \approx 0.15636$

### Resultado final

a) $P(X = 2)$ con reemplazamiento $\approx 0.1616$  
b) $P(X = 2)$ sin reemplazamiento $\approx 0.15636$

## Exercicio 12
### Probabilidad en una distribución binomial

#### **Enunciado**

Sea $X \sim \text{Binomial}(n, p)$ una variable aleatoria con media 20 y varianza 16. Calculemos la probabilidad de que $X$ tome el valor 25, es decir, $P(X = 25)$.

#### **Desarrollo**

Definimos los parámetros de la distribución binomial $X \sim \text{Binomial}(n, p)$:  
- Media: $\mu = np = 20$  
- Varianza: $\sigma^2 = np(1 - p) = 16$  

Resolvemos el sistema de ecuaciones para encontrar $n$ y $p$:  
$\left\{
\begin{aligned}
np &= 20 \\
np(1 - p) &= 16
\end{aligned}
\right.$  

De la primera ecuación: $np = 20 \implies p = \frac{20}{n}$  

Sustituimos en la segunda ecuación:  
$np(1 - p) = 16 \implies n \cdot \frac{20}{n} \cdot \left(1 - \frac{20}{n}\right) = 16$  
$\phantom{np(1 - p) = 16} \implies 20 \cdot \left(1 - \frac{20}{n}\right) = 16$  
$\phantom{np(1 - p) = 16} \implies 20 - \frac{400}{n} = 16$  
$\phantom{np(1 - p) = 16} \implies \frac{400}{n} = 4$  
$\phantom{np(1 - p) = 16} \implies n = 100$  

Ahora, calculamos $p$:  
$p = \frac{20}{n} = \frac{20}{100} = 0.2$  

Verificamos la varianza:  
$\sigma^2 = np(1 - p) = 100 \cdot 0.2 \cdot (1 - 0.2) = 100 \cdot 0.2 \cdot 0.8 = 16$  

Los parámetros son correctos:  
$X \sim \text{Binomial}(n = 100, p = 0.2)$  

Queremos calcular $P(X = 25)$:  
$P(X = x) = \binom{n}{x} p^x (1 - p)^{n - x}$  
$\phantom{P(X = x)} = \binom{100}{25} (0.2)^{25} (0.8)^{75}$  

La expresión completa es:  
$P(X = 25) = \binom{100}{25} (0.2)^{25} (0.8)^{75}$  

Para obtener un valor numérico, calculamos los términos (usando calculadora o software):  
- $(0.2)^{25} \approx 3.355 \cdot 10^{-18}$  
- $(0.8)^{75} \approx 5.392 \cdot 10^{-8}$ .  
- $\binom{100}{25} \approx 2.425 \cdot 10^{23}$.  

Entonces:  
$P(X = 25) \approx 3.355 \cdot 10^{-18} \cdot 5.392 \cdot 10^{-8} \cdot 2.425 \cdot 10^{23}$  
$\phantom{P(X = 25)} \approx 0.043869$  

### Resultado final

$P(X = 25) \approx 0.043869$

## Exercicio 13
### Distribución del número de personas que se suben a un autobús

#### **Enunciado**

Consideremos la variable $X = \text{número de personas que se suben a un autobús}$. Sea $Y_i$ la variable que codifica si la persona $i$-ésima se sube al autobús ($Y_i = 1$) o no ($Y_i = 0$), con $0 < p_i < 1$ la probabilidad de que la persona $i$-ésima se suba al autobús, es decir, $P(Y_i = 1) = p_i$ y $P(Y_i = 0) = 1 - p_i$. Si tenemos $n$ personas cuya decisión de subirse o no al autobús es independiente de las demás, se pide:  
a) ¿Cómo se puede escribir la variable $X$ en función de las $Y_i$? Establece una condición que te permita obtener la distribución de $X$.  
b) Calcula el valor esperado y la varianza de la variable $X$.

#### **Desarrollo**

**Definiciones iniciales**  
- $Y_i$: Variable indicadora para la persona $i$, donde $Y_i = 1$ si la persona $i$ se sube al autobús y $Y_i = 0$ si no, con $P(Y_i = 1) = p_i$ y $P(Y_i = 0) = 1 - p_i$.  
- $X$: Número total de personas que se suben al autobús.  
- Hipótesis: Las decisiones de las $n$ personas son independientes, es decir, los $Y_i$ son independientes entre sí.

**a) Expresión de $X$ en función de $Y_i$ y distribución de $X$**  
$X$ representa el número total de personas que se suben al autobús, lo cual es la suma de los eventos individuales $Y_i$:  
$X = Y_1 + Y_2 + \cdots + Y_n = \sum_{i=1}^n Y_i$  

Para determinar la distribución de $X$, observamos que cada $Y_i$ es una variable de Bernoulli con parámetro $p_i$, es decir, $Y_i \sim \text{Bernoulli}(p_i)$. Dado que las $Y_i$ son independientes, $X$ es la suma de $n$ variables de Bernoulli independientes, pero con diferentes probabilidades $p_i$. Esto implica que $X$ sigue una **distribución de Poisson binomial**:  
$X \sim \text{PoissonBinomial}(p_1, p_2, \ldots, p_n)$  

Condición para una distribución más simple: Si todas las probabilidades fueran iguales, es decir, $p_i = p$ para todo $i$, entonces $X$ seguiría una distribución binomial:  
$X \sim \text{Binomial}(n, p)$  
Sin embargo, en el caso general con $p_i$ distintos, la distribución es de Poisson binomial.

**b) Valor esperado y varianza de $X$**  
Para calcular el valor esperado y la varianza de $X$, usamos la expresión $X = \sum_{i=1}^n Y_i$ y las propiedades de las $Y_i$ como variables de Bernoulli independientes.

- **Valor esperado de $X$**  
El valor esperado de una suma de variables aleatorias independientes es la suma de sus valores esperados:  
$E(X) = E\left(\sum_{i=1}^n Y_i\right) = \sum_{i=1}^n E(Y_i)$  
Para cada $Y_i \sim \text{Bernoulli}(p_i)$, el valor esperado es:  
$E(Y_i) = 1 \cdot P(Y_i = 1) + 0 \cdot P(Y_i = 0) = p_i$  
Por lo tanto:  
$E(X) = \sum_{i=1}^n p_i$

- **Varianza de $X$**  
La varianza de una suma de variables aleatorias independientes es la suma de sus varianzas:  
$\text{Var}(X) = \text{Var}\left(\sum_{i=1}^n Y_i\right) = \sum_{i=1}^n \text{Var}(Y_i)$  
Para cada $Y_i \sim \text{Bernoulli}(p_i)$, la varianza es:  
$\text{Var}(Y_i) = E(Y_i^2) - [E(Y_i)]^2 = p_i - p_i^2 = p_i(1 - p_i)$  
Por lo tanto:  
$\text{Var}(X) = \sum_{i=1}^n p_i(1 - p_i)$

### Resultado final

a) $X = \sum_{i=1}^n Y_i$. La distribución de $X$ es de Poisson binomial, $X \sim \text{PoissonBinomial}(p_1, p_2, \ldots, p_n)$. Si $p_i = p$ para todo $i$, entonces $X \sim \text{Binomial}(n, p)$.  
b) $E(X) = \sum_{i=1}^n p_i$ y $\text{Var}(X) = \sum_{i=1}^n p_i(1 - p_i)$

## Exercicio 14
### Probabilidad de llegar tarde y hora media de llegada

#### **Enunciado**

Un alumno sale de casa todos los días en algún momento entre las 8:40 y las 8:50, camina a EmprendIA en 15 minutos, y la clase comienza a las 9:00. Se pide:  
a) ¿Cuál es la probabilidad de que llegue tarde?  
b) ¿Cuál es la hora media de llegada?

#### **Desarrollo**

**Definiciones iniciales**  
- $T_s$: Hora de salida del alumno, en minutos, medida desde las 8:00 (es decir, 8:00 corresponde a $T_s = 0$).  
- Intervalo de salida: Entre 8:40 y 8:50, lo que equivale a $T_s \in [40, 50]$.  
- Tiempo de caminata: 15 minutos.  
- $T_l$: Hora de llegada, en minutos desde las 8:00, dada por $T_l = T_s + 15$.  
- Hora de inicio de clase: 9:00, lo que equivale a $T_l = 60$ minutos desde las 8:00.  
- Hipótesis: La hora de salida $T_s$ es una variable aleatoria uniforme en el intervalo $[40, 50]$, es decir, $T_s \sim \text{Uniforme}(40, 50)$, ya que no se especifica ninguna preferencia dentro de ese intervalo.

**Distribución de $T_s$ y $T_l$**  
La densidad de $T_s \sim \text{Uniforme}(40, 50)$ es:  
$f_{T_s}(t) = \frac{1}{50 - 40} = \frac{1}{10}, \quad 40 \leq t \leq 50$  

La hora de llegada $T_l$ es una transformación lineal de $T_s$:  
$T_l = T_s + 15$  
Por lo tanto, $T_l$ también sigue una distribución uniforme en el intervalo transformado:  
$T_l \sim \text{Uniforme}(40 + 15, 50 + 15) = \text{Uniforme}(55, 65)$  
La densidad de $T_l$ es:  
$f_{T_l}(t) = \frac{1}{65 - 55} = \frac{1}{10}, \quad 55 \leq t \leq 65$

**a) Probabilidad de llegar tarde**  
Llegar tarde significa que $T_l > 60$ (es decir, llega después de las 9:00). Calculamos:  
$P(T_l > 60) = \int_{60}^{65} f_{T_l}(t) \, dt = \int_{60}^{65} \frac{1}{10} \, dt$  
$\phantom{P(T_l > 60)} = \frac{1}{10} [t]_{60}^{65} = \frac{1}{10} (65 - 60) = \frac{1}{10} \cdot 5 = \frac{1}{2}$  

Alternativamente, usando la distribución uniforme de $T_l \sim \text{Uniforme}(55, 65)$, la probabilidad es proporcional a la longitud del intervalo $[60, 65]$ respecto al intervalo total $[55, 65]$:  
$P(T_l > 60) = \frac{65 - 60}{65 - 55} = \frac{5}{10} = \frac{1}{2}$

**b) Hora media de llegada**  
La hora media de llegada es el valor esperado de $T_l$, $E(T_l)$. Para una variable uniforme $T_l \sim \text{Uniforme}(a, b)$, el valor esperado es:  
$E(T_l) = \frac{a + b}{2}$  
Aquí, $a = 55$ y $b = 65$, por lo que:  
$E(T_l) = \frac{55 + 65}{2} = \frac{120}{2} = 60$  

Esto significa que la hora media de llegada es 60 minutos después de las 8:00, es decir, exactamente a las 9:00.  

### Resultado final

a) $P(\text{llegar tarde}) = \frac{1}{2}$  
b) Hora media de llegada: 9:00

## Exercicio 15
### Proporciones bajo una distribución normal

#### **Enunciado**

La altura de los alumnos de Estadística sigue una distribución normal $X \sim N(\mu, \sigma^2)$. Se sabe que:  
- El 5% de los alumnos supera los 180 cm, es decir, $P(X > 180) = 0.05$.  
- El 6% no llega a 160 cm, es decir, $P(X < 160) = 0.06$.  

Calculemos:  
a) La proporción de alumnos que mide más de 190 cm, es decir, $P(X > 190)$.  
b) La proporción de alumnos que mide entre 170 y 175 cm, es decir, $P(170 < X < 175)$.

#### **Desarrollo**

Definimos la variable:  
$X \sim N(\mu, \sigma^2)$  
$Z = \frac{X - \mu}{\sigma}, \quad Z \sim N(0, 1)$  

**Paso 1: Determinar $\mu$ y $\sigma$ usando la información dada**  

1. Condición 1: $P(X > 180) = 0.05$  
$P(X > 180) = P\left(Z > \frac{180 - \mu}{\sigma}\right) = 0.05$  
$\Rightarrow P\left(Z \leq \frac{180 - \mu}{\sigma}\right) = 1 - 0.05 = 0.95$  
$\Rightarrow \frac{180 - \mu}{\sigma} = z_{0.95} \approx 1.645$ (valor crítico de la normal estándar)  
$\Rightarrow 180 - \mu = 1.645 \sigma \quad (1)$  

2. Condición 2: $P(X < 160) = 0.06$  
$P(X < 160) = P\left(Z < \frac{160 - \mu}{\sigma}\right) = 0.06$  
$\Rightarrow \frac{160 - \mu}{\sigma} = z_{0.06} \approx -1.555$ (valor crítico de la normal estándar, ya que $P(Z < -1.555) \approx 0.06$)  
$\Rightarrow 160 - \mu = -1.555 \sigma \quad (2)$  

Resolvemos el sistema de ecuaciones (1) y (2):  
$\left\{
\begin{aligned}
180 - \mu &= 1.645 \sigma \quad (1) \\
160 - \mu &= -1.555 \sigma \quad (2)
\end{aligned}
\right.$  

Restamos (2) de (1) para eliminar $\mu$:  
$(180 - \mu) - (160 - \mu) = 1.645 \sigma - (-1.555 \sigma)$  
$\Rightarrow 20 = 3.2 \sigma$  
$\Rightarrow \sigma = \frac{20}{3.2} = 6.25$  

Sustituimos $\sigma = 6.25$ en (2):  
$160 - \mu = -1.555 \cdot 6.25$  
$\Rightarrow 160 - \mu = -9.71875$  
$\Rightarrow \mu = 160 + 9.71875 = 169.71875$  

Parámetros de la distribución:  
$\mu \approx 169.72$  
$\sigma \approx 6.25$  

Aproximación:  
$X \sim N(169.72, 6.25^2)$  
$Z = \frac{X - 169.72}{6.25}, \quad Z \sim N(0, 1)$  

**a) $P(X > 190)$**  
$P(X > 190) = P\left(Z > \frac{190 - 169.72}{6.25}\right)$  
$\phantom{P(X > 190)} = P\left(Z > \frac{20.28}{6.25}\right)$  
$\phantom{P(X > 190)} = P(Z > 3.2448)$  
$\phantom{P(X > 190)} = 1 - P(Z \leq 3.2448)$  
$\phantom{P(X > 190)} \approx 1 - 0.9994 = 0.0006$ (usando tablas de la normal estándar, $P(Z \leq 3.24) \approx 0.9994$)  

**b) $P(170 < X < 175)$**  
$P(170 < X < 175) = P\left(\frac{170 - 169.72}{6.25} < Z < \frac{175 - 169.72}{6.25}\right)$  
$\phantom{P(170 < X < 175)} = P\left(\frac{0.28}{6.25} < Z < \frac{5.28}{6.25}\right)$  
$\phantom{P(170 < X < 175)} = P(0.0448 < Z < 0.8448)$  
$\phantom{P(170 < X < 175)} = P(Z < 0.8448) - P(Z < 0.0448)$  
$\phantom{P(170 < X < 175)} \approx P(Z < 0.84) - P(Z < 0.04)$ (aproximando a valores tabulados)  
$\phantom{P(170 < X < 175)} \approx 0.7995 - 0.5160 = 0.2835$ (usando tablas de la normal estándar)  

### Resultado final

a) $P(X > 190) \approx 0.0006$  
b) $P(170 < X < 175) \approx 0.2835$

## Ejercicio 16
### Distribución exponencial para la vida útil de bombillas

#### **Enunciado**

La vida útil de un tipo de bombillas tiene una media de 8 meses. Calculemos:  
a) La probabilidad de que una bombilla dure entre 3 y 12 meses, es decir, $P(3 < X < 12)$.  
b) La probabilidad de que una bombilla que ya ha durado 10 meses siga funcionando más de 25 meses, es decir, $P(X > 25 \mid X > 10)$.

#### **Desarrollo**

Definimos la variable:  
$X = \text{vida útil de una bombilla (en meses)}$  

Dado que la vida útil de las bombillas suele modelarse con una distribución exponencial y se proporciona la vida media, asumimos:  
$X \sim \text{Exponencial}(\lambda)$  

La media de una distribución exponencial es $E(X) = \frac{1}{\lambda}$. Se nos da que la vida media es 8 meses:  
$E(X) = \frac{1}{\lambda} = 8$  
$\Rightarrow \lambda = \frac{1}{8}$  

La función de densidad de probabilidad es:  
$f(x) = \lambda e^{-\lambda x} = \frac{1}{8} e^{-x/8}, \quad x > 0$  

La función de distribución acumulada es:  
$F(x) = P(X \leq x) = 1 - e^{-\lambda x} = 1 - e^{-x/8}, \quad x > 0$  

**a) $P(3 < X < 12)$**  
$P(3 < X < 12) = P(X < 12) - P(X < 3)$  
$\phantom{P(3 < X < 12)} = F(12) - F(3)$  
$\phantom{P(3 < X < 12)} = (1 - e^{-12/8}) - (1 - e^{-3/8})$  
$\phantom{P(3 < X < 12)} = (1 - e^{-1.5}) - (1 - e^{-0.375})$  
$\phantom{P(3 < X < 12)} = 1 - e^{-1.5} - 1 + e^{-0.375}$  
$\phantom{P(3 < X < 12)} = e^{-0.375} - e^{-1.5}$  
$\phantom{P(3 < X < 12)} \approx e^{-0.375} - e^{-1.5}$  
$\phantom{P(3 < X < 12)} \approx 0.6873 - 0.2231$ (usando valores aproximados de $e^{-0.375} \approx 0.6873$ y $e^{-1.5} \approx 0.2231$)  
$\phantom{P(3 < X < 12)} \approx 0.4642$  

**b) $P(X > 25 \mid X > 10)$**  
Usamos la propiedad de falta de memoria de la distribución exponencial:  
$P(X > t + s \mid X > s) = P(X > t)$  
En este caso, $s = 10$ y $t + s = 25$, por lo que $t = 15$. Entonces:  
$P(X > 25 \mid X > 10) = P(X > 15)$  
$\phantom{P(X > 25 \mid X > 10)} = 1 - P(X \leq 15)$  
$\phantom{P(X > 25 \mid X > 10)} = 1 - F(15)$  
$\phantom{P(X > 25 \mid X > 10)} = 1 - (1 - e^{-15/8})$  
$\phantom{P(X > 25 \mid X > 10)} = e^{-15/8}$  
$\phantom{P(X > 25 \mid X > 10)} \approx e^{-1.875}$  
$\phantom{P(X > 25 \mid X > 10)} \approx 0.1533$ (usando el valor aproximado de $e^{-1.875} \approx 0.1533$)  

### Resultado final

a) $P(3 < X < 12) \approx 0.4642$  
b) $P(X > 25 \mid X > 10) \approx 0.1533$

## Ejercicio 17
### Probabilidad con distribución normal

#### **Enunciado**

Un algoritmo asigna puntuaciones a imágenes por resonancia magnética de individuos sanos, siguiendo una distribución normal con media 100 y desviación típica 10. Calculemos:  
a) $P(90 \leq X \leq 115)$  
b) La puntuación $x$ tal que el 10 % de las imágenes tienen puntuaciones mayores a $x$  
c) El valor $c$ tal que $P(85 \leq X \leq c) = 0.90$

#### **Desarrollo**

Definimos la variable aleatoria:  
$X = \text{puntuación asignada por el algoritmo}$  
$X \sim N(\mu, \sigma^2)$ con:  
$\mu = 100$  
$\sigma = 10$  

Estandarizamos:  
$Z = \frac{X - \mu}{\sigma} = \frac{X - 100}{10}, \quad Z \sim N(0, 1)$  

Usamos la tabla de la distribución normal estándar $N(0, 1)$ para los cálculos de probabilidad.

**a) $P(90 \leq X \leq 115)$**  
$P(90 \leq X \leq 115) = P\left(\frac{90 - 100}{10} \leq Z \leq \frac{115 - 100}{10}\right)$  
$\phantom{P(90 \leq X \leq 115)} = P(-1 \leq Z \leq 1.5)$  
$\phantom{P(90 \leq X \leq 115)} = P(Z \leq 1.5) - P(Z \leq -1)$  
$\phantom{P(90 \leq X \leq 115)} = P(Z \leq 1.5) - (1 - P(Z \leq 1))$  
$\phantom{P(90 \leq X \leq 115)} \approx 0.9332 - (1 - 0.8413)$  
$\phantom{P(90 \leq X \leq 115)} = 0.9332 - 0.1587$  
$\phantom{P(90 \leq X \leq 115)} \approx 0.7745$  

**b) Puntuación $x$ tal que $P(X > x) = 0.10$**  
$P(X > x) = 0.10 \implies P(X \leq x) = 1 - 0.10 = 0.90$  
Buscamos $z$ tal que $P(Z \leq z) = 0.90$:  
$\phantom{P(X > x) = 0.10} z \approx 1.28 \quad (\text{de la tabla de } N(0, 1))$  
Estandarizamos:  
$\phantom{P(X > x) = 0.10} z = \frac{x - 100}{10} = 1.28$  
$\phantom{P(X > x) = 0.10} x - 100 = 1.28 \cdot 10$  
$\phantom{P(X > x) = 0.10} x = 100 + 12.8$  
$\phantom{P(X > x) = 0.10} x = 112.8$  

**c) Valor $c$ tal que $P(85 \leq X \leq c) = 0.90$**  
$P(85 \leq X \leq c) = 0.90 \implies P\left(\frac{85 - 100}{10} \leq Z \leq \frac{c - 100}{10}\right) = 0.90$  
$\phantom{P(85 \leq X \leq c) = 0.90} = P(-1.5 \leq Z \leq z) = 0.90$  
$\phantom{P(85 \leq X \leq c) = 0.90} = P(Z \leq z) - P(Z \leq -1.5) = 0.90$  
$\phantom{P(85 \leq X \leq c) = 0.90} = P(Z \leq z) - (1 - P(Z \leq 1.5)) = 0.90$  
$\phantom{P(85 \leq X \leq c) = 0.90} \approx P(Z \leq z) - (1 - 0.9332) = 0.90$  
$\phantom{P(85 \leq X \leq c) = 0.90} = P(Z \leq z) - 0.0668 = 0.90$  
$\phantom{P(85 \leq X \leq c) = 0.90} P(Z \leq z) = 0.90 + 0.0668 = 0.9668$  
Buscamos $z$ tal que $P(Z \leq z) = 0.9668$:  
$\phantom{P(85 \leq X \leq c) = 0.90} z \approx 1.84 \quad (\text{de la tabla de } N(0, 1))$  
Estandarizamos:  
$\phantom{P(85 \leq X \leq c) = 0.90} z = \frac{c - 100}{10} = 1.84$  
$\phantom{P(85 \leq X \leq c) = 0.90} c - 100 = 1.84 \cdot 10$  
$\phantom{P(85 \leq X \leq c) = 0.90} c = 100 + 18.4$  
$\phantom{P(85 \leq X \leq c) = 0.90} c = 118.4$  

### Resultado final

a) $P(90 \leq X \leq 115) \approx 0.7745$  
b) $x = 112.8$  
c) $c = 118.4$


# Sin revisar

Agora do 18 ao 23 inda non tiven tempo de revisalos, pero como guía están ben seguro
## Exercicio 18
{{% details title="Exercicio 18 paso a paso" closed="true" %}}
### Proceso de Poisson y distribución exponencial

#### **Enunciado**

La media de llegadas de coches a un parking es de 3 por minuto. Calculemos:  
a) $P(\text{esperar más de 1 minuto hasta el primer coche})$  
b) $P(\text{esperar más de 1 minuto hasta el siguiente coche, dado que ya ha aparcado uno})$  
c) $P(\text{esperar más de 30 minutos hasta el vigésimo coche})$  
d) $P(\text{al menos 5 coches lleguen en 2 minutos})$  
e) $P(\text{más de 200 coches lleguen en una hora})$  

#### **Desarrollo**

Definimos la variable aleatoria:  
$X = \text{número de coches que llegan en un intervalo de tiempo } t \text{ (en minutos)}$  
Dado que las llegadas tienen una tasa media de 3 coches por minuto, el proceso sigue un proceso de Poisson con:  
$\lambda = 3 \text{ coches por minuto}$  
$X \sim \text{Poisson}(\lambda t)$  

Para tiempos de espera entre llegadas, definimos:  
$T = \text{tiempo hasta la próxima llegada (en minutos)}$  
$T \sim \text{Exponencial}(\lambda)$ con $\lambda = 3$, y su función de densidad es $f(t) = \lambda e^{-\lambda t}$, $t > 0$.  
La función de distribución acumulada es $F(t) = P(T \leq t) = 1 - e^{-\lambda t}$, y $P(T > t) = e^{-\lambda t}$.  

Para tiempos hasta la $k$-ésima llegada, usamos la distribución Gamma:  
$T_k = \text{tiempo hasta la } k\text{-ésima llegada}$  
$T_k \sim \text{Gamma}(k, \lambda)$ con $k$ entero (equivalente a una suma de $k$ exponenciales).  

**a) $P(\text{esperar más de 1 minuto hasta el primer coche})$**  
El tiempo hasta el primer coche es $T \sim \text{Exponencial}(\lambda)$ con $\lambda = 3$.  
$P(T > 1) = e^{-\lambda \cdot 1} = e^{-3 \cdot 1} = e^{-3} \approx 0.0498$  

**b) $P(\text{esperar más de 1 minuto hasta el siguiente coche, dado que ya ha aparcado uno})$**  
Por la propiedad de falta de memoria de la distribución exponencial, el tiempo hasta la próxima llegada no depende del tiempo transcurrido desde la última llegada.  
$P(T > 1) = e^{-\lambda \cdot 1} = e^{-3 \cdot 1} = e^{-3} \approx 0.0498$  

**c) $P(\text{esperar más de 30 minutos hasta el vigésimo coche})$**  
El tiempo hasta la vigésima llegada es $T_{20} \sim \text{Gamma}(20, \lambda)$ con $\lambda = 3$.  
$P(T_{20} > 30) = 1 - P(T_{20} \leq 30)$  
$\phantom{P(T_{20} > 30)} = 1 - F_{T_{20}}(30)$  
La función de distribución acumulada de una $\text{Gamma}(k, \lambda)$ es:  
$\phantom{P(T_{20} > 30)} F_{T_{20}}(t) = \int_0^t \frac{\lambda^k x^{k-1} e^{-\lambda x}}{\Gamma(k)} \, dx$  
Para $k$ entero, esto equivale a $1 - \sum_{j=0}^{k-1} \frac{(\lambda t)^j e^{-\lambda t}}{j!}$.  
Aquí, $k = 20$, $\lambda = 3$, $t = 30$, y $\lambda t = 3 \cdot 30 = 90$.  
$\phantom{P(T_{20} > 30)} P(T_{20} \leq 30) = 1 - \sum_{j=0}^{19} \frac{(90)^j e^{-90}}{j!}$  
$\phantom{P(T_{20} > 30)} P(T_{20} > 30) = \sum_{j=0}^{19} \frac{(90)^j e^{-90}}{j!}$  
Esto es equivalente a $P(Y \leq 19)$, donde $Y \sim \text{Poisson}(90)$.  
Aproximamos $Y \sim \text{Poisson}(90)$ con una normal, ya que $\lambda = 90$ es grande:  
$\mu = \lambda = 90$  
$\sigma = \sqrt{\lambda} = \sqrt{90} \approx 9.486$  
$\phantom{P(T_{20} > 30)} P(Y \leq 19) \approx P\left(Z \leq \frac{19.5 - 90}{9.486}\right)$ (con corrección de continuidad)  
$\phantom{P(T_{20} > 30)} = P(Z \leq -7.43)$  
$\phantom{P(T_{20} > 30)} \approx 0 \quad (\text{ya que } P(Z \leq -7.43) \text{ es negligible})$  

**d) $P(\text{al menos 5 coches lleguen en 2 minutos})$**  
$X \sim \text{Poisson}(\lambda t)$ con $\lambda = 3$ y $t = 2$, por lo que $\lambda t = 6$.  
$P(X \geq 5) = 1 - P(X \leq 4)$  
$\phantom{P(X \geq 5)} = 1 - \sum_{k=0}^{4} \frac{6^k e^{-6}}{k!}$  
$\phantom{P(X \geq 5)} = 1 - \left( \frac{6^0 e^{-6}}{0!} + \frac{6^1 e^{-6}}{1!} + \frac{6^2 e^{-6}}{2!} + \frac{6^3 e^{-6}}{3!} + \frac{6^4 e^{-6}}{4!} \right)$  
$\phantom{P(X \geq 5)} = 1 - e^{-6} (1 + 6 + 18 + 36 + 54)$  
$\phantom{P(X \geq 5)} = 1 - e^{-6} \cdot 115$  
$\phantom{P(X \geq 5)} \approx 1 - 0.00248 \cdot 115$  
$\phantom{P(X \geq 5)} \approx 1 - 0.2852$  
$\phantom{P(X \geq 5)} \approx 0.7148$  

**e) $P(\text{más de 200 coches lleguen en una hora})$**  
$X \sim \text{Poisson}(\lambda t)$ con $\lambda = 3$ y $t = 60$ (1 hora = 60 minutos), por lo que $\lambda t = 180$.  
$P(X > 200) = 1 - P(X \leq 200)$  
Dado que $\lambda t = 180$ es grande, aproximamos con una normal:  
$\mu = \lambda t = 180$  
$\sigma = \sqrt{\lambda t} = \sqrt{180} \approx 13.416$  
$\phantom{P(X > 200)} P(X > 200) \approx P\left(Z > \frac{200.5 - 180}{13.416}\right)$ (con corrección de continuidad)  
$\phantom{P(X > 200)} = P(Z > 1.53)$  
$\phantom{P(X > 200)} = 1 - P(Z \leq 1.53)$  
$\phantom{P(X > 200)} \approx 1 - 0.9370$  
$\phantom{P(X > 200)} \approx 0.0630$  

### Resultado final

a) $P(T > 1) \approx 0.0498$  
b) $P(T > 1) \approx 0.0498$  
c) $P(T_{20} > 30) \approx 0$  
d) $P(X \geq 5) \approx 0.7148$  
e) $P(X > 200) \approx 0.0630$
{{% /details %}}

## Exercicio 19
{{% details title="Exercicio 19 paso a paso" closed="true" %}}
### Probabilidad con distribución normal

#### **Enunciado**

El tiempo que tarda una persona promedio en completar una prueba de estadística sigue una distribución normal con media 40 minutos y desviación típica 8 minutos. Calculemos:  
a) $P(\text{tardar más de 50 minutos})$  
b) El tiempo $x$ tal que el 99 % de los alumnos tardan menos de $x$ minutos  
c) La media $\mu$ tal que, con $\sigma = 8$, el 99 % de los alumnos tardan menos de 50 minutos  

#### **Desarrollo**

Definimos la variable aleatoria:  
$X = \text{tiempo (en minutos) que tarda una persona en completar la prueba}$  
$X \sim N(\mu, \sigma^2)$ con:  
$\mu = 40$  
$\sigma = 8$  

Estandarizamos:  
$Z = \frac{X - \mu}{\sigma} = \frac{X - 40}{8}, \quad Z \sim N(0, 1)$  

Usamos la tabla de la distribución normal estándar $N(0, 1)$ para los cálculos de probabilidad.

**a) $P(\text{tardar más de 50 minutos})$**  
$P(X > 50) = P\left(Z > \frac{50 - 40}{8}\right)$  
$\phantom{P(X > 50)} = P(Z > 1.25)$  
$\phantom{P(X > 50)} = 1 - P(Z \leq 1.25)$  
$\phantom{P(X > 50)} \approx 1 - 0.8944$  
$\phantom{P(X > 50)} \approx 0.1056$  

**b) Tiempo $x$ tal que $P(X < x) = 0.99$**  
Buscamos $x$ tal que $P(X \leq x) = 0.99$.  
Estandarizamos:  
$\phantom{P(X \leq x) = 0.99} P\left(Z \leq \frac{x - 40}{8}\right) = 0.99$  
Buscamos $z$ tal que $P(Z \leq z) = 0.99$:  
$\phantom{P(X \leq x) = 0.99} z \approx 2.33 \quad (\text{de la tabla de } N(0, 1))$  
$\phantom{P(X \leq x) = 0.99} \frac{x - 40}{8} = 2.33$  
$\phantom{P(X \leq x) = 0.99} x - 40 = 2.33 \cdot 8$  
$\phantom{P(X \leq x) = 0.99} x = 40 + 18.64$  
$\phantom{P(X \leq x) = 0.99} x \approx 58.64$  

**c) Media $\mu$ tal que $P(X < 50) = 0.99$ con $\sigma = 8$**  
Queremos $P(X < 50) = 0.99$ con $X \sim N(\mu, 8^2)$.  
Estandarizamos:  
$\phantom{P(X < 50) = 0.99} P\left(Z < \frac{50 - \mu}{8}\right) = 0.99$  
Buscamos $z$ tal que $P(Z < z) = 0.99$:  
$\phantom{P(X < 50) = 0.99} z \approx 2.33 \quad (\text{de la tabla de } N(0, 1))$  
$\phantom{P(X < 50) = 0.99} \frac{50 - \mu}{8} = 2.33$  
$\phantom{P(X < 50) = 0.99} 50 - \mu = 2.33 \cdot 8$  
$\phantom{P(X < 50) = 0.99} 50 - \mu = 18.64$  
$\phantom{P(X < 50) = 0.99} \mu = 50 - 18.64$  
$\phantom{P(X < 50) = 0.99} \mu \approx 31.36$  

### Resultado final

a) $P(X > 50) \approx 0.1056$  
b) $x \approx 58.64$  
c) $\mu \approx 31.36$
{{% /details %}}

## Exercicio 20
{{% details title="Exercicio 20 paso a paso" closed="true" %}}
### Proceso de Poisson y distribución exponencial

#### **Enunciado**

El número de fallos de acceso a un servidor sigue una distribución de Poisson con media 5 fallos cada 10 minutos. Calculemos:  
a) $P(\text{al menos 1 fallo en 2 minutos})$  
b) $P(\text{el tiempo entre dos fallos consecutivos sea inferior a 30 segundos})$  
c) $P(\text{más de 2 horas para tener 50 fallos})$  

#### **Desarrollo**

Definimos la variable aleatoria:  
$X = \text{número de fallos en un intervalo de tiempo } t \text{ (en minutos)}$  
Dado que la media es 5 fallos cada 10 minutos, el proceso sigue un proceso de Poisson con:  
$\lambda = \frac{5}{10} = 0.5 \text{ fallos por minuto}$  
$X \sim \text{Poisson}(\lambda t)$  

Para tiempos de espera entre fallos consecutivos, definimos:  
$T = \text{tiempo entre dos fallos consecutivos (en minutos)}$  
$T \sim \text{Exponencial}(\lambda)$ con $\lambda = 0.5$, y su función de densidad es $f(t) = \lambda e^{-\lambda t}$, $t > 0$.  
La función de distribución acumulada es $F(t) = P(T \leq t) = 1 - e^{-\lambda t}$, y $P(T > t) = e^{-\lambda t}$.  

Para tiempos hasta el $k$-ésimo fallo, usamos la distribución Gamma:  
$T_k = \text{tiempo hasta el } k\text{-ésimo fallo}$  
$T_k \sim \text{Gamma}(k, \lambda)$ con $k$ entero (equivalente a una suma de $k$ exponenciales).  

**a) $P(\text{al menos 1 fallo en 2 minutos})$**  
$X \sim \text{Poisson}(\lambda t)$ con $\lambda = 0.5$ y $t = 2$, por lo que $\lambda t = 0.5 \cdot 2 = 1$.  
$P(X \geq 1) = 1 - P(X = 0)$  
$\phantom{P(X \geq 1)} = 1 - e^{-\lambda t} \cdot \frac{(\lambda t)^0}{0!}$  
$\phantom{P(X \geq 1)} = 1 - e^{-1}$  
$\phantom{P(X \geq 1)} \approx 1 - 0.3679$  
$\phantom{P(X \geq 1)} \approx 0.6321$  

**b) $P(\text{el tiempo entre dos fallos consecutivos sea inferior a 30 segundos})$**  
El tiempo entre fallos consecutivos es $T \sim \text{Exponencial}(\lambda)$ con $\lambda = 0.5$ fallos por minuto.  
Convertimos 30 segundos a minutos: $30 \text{ segundos} = \frac{30}{60} = 0.5 \text{ minutos}$.  
$P(T < 0.5) = 1 - P(T > 0.5)$  
$\phantom{P(T < 0.5)} = 1 - e^{-\lambda \cdot 0.5}$  
$\phantom{P(T < 0.5)} = 1 - e^{-0.5 \cdot 0.5}$  
$\phantom{P(T < 0.5)} = 1 - e^{-0.25}$  
$\phantom{P(T < 0.5)} \approx 1 - 0.7788$  
$\phantom{P(T < 0.5)} \approx 0.2212$  

**c) $P(\text{más de 2 horas para tener 50 fallos})$**  
El tiempo hasta el quincuagésimo fallo es $T_{50} \sim \text{Gamma}(50, \lambda)$ con $\lambda = 0.5$.  
Convertimos 2 horas a minutos: $2 \text{ horas} = 120 \text{ minutos}$.  
$P(T_{50} > 120) = 1 - P(T_{50} \leq 120)$  
$\phantom{P(T_{50} > 120)} = 1 - F_{T_{50}}(120)$  
La función de distribución acumulada de una $\text{Gamma}(k, \lambda)$ es:  
$\phantom{P(T_{50} > 120)} F_{T_{50}}(t) = \int_0^t \frac{\lambda^k x^{k-1} e^{-\lambda x}}{\Gamma(k)} \, dx$  
Para $k$ entero, esto equivale a $1 - \sum_{j=0}^{k-1} \frac{(\lambda t)^j e^{-\lambda t}}{j!}$.  
Aquí, $k = 50$, $\lambda = 0.5$, $t = 120$, y $\lambda t = 0.5 \cdot 120 = 60$.  
$\phantom{P(T_{50} > 120)} P(T_{50} \leq 120) = 1 - \sum_{j=0}^{49} \frac{(60)^j e^{-60}}{j!}$  
$\phantom{P(T_{50} > 120)} P(T_{50} > 120) = \sum_{j=0}^{49} \frac{(60)^j e^{-60}}{j!}$  
Esto es equivalente a $P(Y \leq 49)$, donde $Y \sim \text{Poisson}(60)$.  
Aproximamos $Y \sim \text{Poisson}(60)$ con una normal, ya que $\lambda = 60$ es grande:  
$\mu = \lambda = 60$  
$\sigma = \sqrt{\lambda} = \sqrt{60} \approx 7.746$  
$\phantom{P(T_{50} > 120)} P(Y \leq 49) \approx P\left(Z \leq \frac{49.5 - 60}{7.746}\right)$ (con corrección de continuidad)  
$\phantom{P(T_{50} > 120)} = P(Z \leq -1.36)$  
$\phantom{P(T_{50} > 120)} \approx 1 - P(Z \leq 1.36)$  
$\phantom{P(T_{50} > 120)} \approx 1 - 0.9131$  
$\phantom{P(T_{50} > 120)} \approx 0.0869$  

### Resultado final

a) $P(X \geq 1) \approx 0.6321$  
b) $P(T < 0.5) \approx 0.2212$  
c) $P(T_{50} > 120) \approx 0.0869$
{{% /details %}}

## Exercicio 21
{{% details title="Exercicio 21 paso a paso" closed="true" %}}
### Distribución normal para tiempo de duración de productos

#### **Enunciado**

El tiempo de duración de un producto sigue una distribución normal con media y desviación típica de 10 y 3.5 años, respectivamente. El fabricante reemplaza los productos que fallan durante el período de garantía. Calculemos:  
a) ¿Qué porcentaje de productos tendrá que reemplazar si la garantía es de 3 años?  
b) Si no tiene intención de reemplazar más del 4% de los productos, ¿cuál es el máximo período de garantía que puede fijar?

#### **Desarrollo**

Definimos la variable aleatoria:  
$X = \text{tiempo de duración del producto (en años)}$  
$X \sim N(\mu, \sigma^2)$ con:  
$\mu = 10$  
$\sigma = 3.5$  

Estandarizamos para usar la distribución normal estándar:  
$Z = \frac{X - \mu}{\sigma} = \frac{X - 10}{3.5}, \quad Z \sim N(0, 1)$  

**a) Porcentaje de productos a reemplazar si la garantía es de 3 años**  
Un producto falla durante el período de garantía si $X < 3$. Calculamos la probabilidad:  
$P(X < 3) = P\left(Z < \frac{3 - 10}{3.5}\right) = P(Z < -2)$  
$\phantom{P(X < 3)} = 1 - P(Z < 2)$  
$\phantom{P(X < 3)} \approx 1 - 0.9772 = 0.0228$  

El porcentaje de productos a reemplazar es:  
$0.0228 \cdot 100 = 2.28\%$  

**b) Máximo período de garantía para reemplazar no más del 4%**  
Queremos encontrar el tiempo $T$ tal que $P(X < T) = 0.04$. Estandarizamos:  
$P(X < T) = P\left(Z < \frac{T - 10}{3.5}\right) = 0.04$  

Buscamos $z$ tal que $P(Z < z) = 0.04$. Como $z$ es negativo (ya que $T$ está a la izquierda de la media), consideramos:  
$P(Z < z) = 0.04 \implies P(Z > -z) = 0.04 \implies P(Z < -z) = 0.96$  
De la tabla de la normal estándar, $P(Z < 1.75) \approx 0.9599$ y $P(Z < 1.76) \approx 0.9608$, por lo que $-z \approx -1.75$. Entonces:  
$z \approx -1.75$  

Resolvemos para $T$:  
$\frac{T - 10}{3.5} = -1.75$  
$\phantom{\frac{T - 10}{3.5}} T - 10 = -1.75 \cdot 3.5 = -6.125$  
$\phantom{\frac{T - 10}{3.5}} T = 10 - 6.125 = 3.875$  

Por lo tanto, el máximo período de garantía es $T \approx 3.875$ años.

### Resultado final

a) El porcentaje de productos a reemplazar es $2.28\%$.  
b) El máximo período de garantía es $3.875$ años.
{{% /details %}}

## Exercicio 22
{{% details title="Exercicio 22 paso a paso" closed="true" %}}
### Distribución de Poisson y exponencial para consultas de un chatbot

#### **Enunciado**

Un chatbot recibe, en promedio, 6 consultas cada cuarto de hora. Calculemos:  
a) La probabilidad de que en una hora se reciba más de 20 consultas.  
b) La probabilidad de que haya que esperar menos de 1 minuto entre dos consultas consecutivas.  
c) El tiempo medio de espera hasta recibir 40 consultas.

#### **Desarrollo**

Definimos la variable aleatoria para el número de consultas:  
$X = \text{número de consultas en un intervalo de tiempo}$  
Dado que las consultas ocurren a una tasa constante y son eventos independientes, $X$ sigue una distribución de Poisson con parámetro $\lambda$ (tasa media de consultas por unidad de tiempo).  

**Tasa de consultas por unidad de tiempo**  
La tasa es de 6 consultas por cuarto de hora (15 minutos). Convertimos la tasa a diferentes unidades de tiempo:  
- Por hora: $\lambda_h = 6 \cdot 4 = 24$ consultas por hora (ya que hay 4 cuartos de hora en una hora).  
- Por minuto: $\lambda_m = 6 \div 15 = 0.4$ consultas por minuto (ya que un cuarto de hora son 15 minutos).  

**a) Probabilidad de que en una hora se reciba más de 20 consultas**  
Definimos $X_h = \text{número de consultas en una hora}$. Entonces:  
$X_h \sim \text{Poisson}(\lambda_h = 24)$  

Calculamos $P(X_h > 20)$:  
$P(X_h > 20) = 1 - P(X_h \leq 20)$  

Para $X_h \sim \text{Poisson}(24)$, la probabilidad acumulada $P(X_h \leq k)$ se calcula como:  
$P(X_h \leq k) = \sum_{i=0}^{k} e^{-\lambda_h} \frac{\lambda_h^i}{i!}$  
Sin embargo, dado que $\lambda_h = 24$ es grande, usamos la aproximación normal para simplificar:  
- Media: $\mu = \lambda_h = 24$  
- Desviación estándar: $\sigma = \sqrt{\lambda_h} = \sqrt{24} \approx 4.899$  

Aproximamos $X_h \approx Y$, donde $Y \sim N(24, 24)$. Estandarizamos:  
$Z = \frac{Y - 24}{4.899}, \quad Z \sim N(0, 1)$  

Ajustamos por continuidad, ya que $X_h$ es discreta y $Y$ es continua:  
$P(X_h > 20) \approx P(Y > 20.5) = P\left(Z > \frac{20.5 - 24}{4.899}\right)$  
$\phantom{P(X_h > 20)} = P(Z > -0.714) = 1 - P(Z \leq -0.714)$  
$\phantom{P(X_h > 20)} = 1 - (1 - P(Z \leq 0.714)) = P(Z \leq 0.714)$  
$\phantom{P(X_h > 20)} \approx 0.7611$ (usando tablas de la normal estándar, donde $P(Z \leq 0.71) \approx 0.7611$).  

**b) Probabilidad de que haya que esperar menos de 1 minuto entre dos consultas consecutivas**  
El tiempo entre consultas consecutivas sigue una distribución exponencial. Definimos:  
$T = \text{tiempo de espera (en minutos) entre dos consultas consecutivas}$  
$T \sim \text{Exponencial}(\lambda_m)$, donde $\lambda_m = 0.4$ consultas por minuto (tasa calculada anteriormente).  

La función de densidad de $T$ es:  
$f(t) = \lambda_m e^{-\lambda_m t}, \quad t > 0$  

La probabilidad de que el tiempo de espera sea menor a 1 minuto es:  
$P(T < 1) = \int_0^1 \lambda_m e^{-\lambda_m t} \, dt$  
$\phantom{P(T < 1)} = \int_0^1 0.4 e^{-0.4 t} \, dt = \left[ -e^{-0.4 t} \right]_0^1$  
$\phantom{P(T < 1)} = -e^{-0.4} + e^0 = 1 - e^{-0.4}$  
$\phantom{P(T < 1)} \approx 1 - 0.6703 = 0.3297$  

**c) Tiempo medio de espera hasta recibir 40 consultas**  
El tiempo hasta recibir la $k$-ésima consulta sigue una distribución de Erlang (o Gamma) con parámetros $k$ y $\lambda$. Definimos:  
$W = \text{tiempo de espera (en minutos) hasta recibir 40 consultas}$  
$W \sim \text{Erlang}(k = 40, \lambda_m = 0.4)$  

El tiempo medio de espera es la esperanza de $W$:  
$E[W] = \frac{k}{\lambda_m} = \frac{40}{0.4} = 100$ minutos  

Convertimos a horas (opcional, para interpretación):  
$E[W] = 100 \div 60 \approx 1.667$ horas  

### Resultado final

a) $P(X_h > 20) \approx 0.7611$  
b) $P(T < 1) \approx 0.3297$  
c) $E[W] = 100$ minutos (o aproximadamente $1.667$ horas)
{{% /details %}}

## Exercicio 23
{{% details title="Exercicio 23 paso a paso" closed="true" %}}
### Variables aleatorias y optimización de parámetros

#### **Enunciado**

Sean $X$ e $Y$ dos variables aleatorias con $E(X) = E(Y) = E(XY) = 1$ y $\text{Var}(X) = \text{Var}(Y) = 1$. Definimos $W = bX + cY$. ¿Qué valores deben tomar $b$ y $c$ para que $E(W) = \text{Var}(W) = 1$?

#### **Desarrollo**

Definimos las variables y parámetros dados:  
$X, Y$: variables aleatorias con:  
$E(X) = 1$  
$E(Y) = 1$  
$E(XY) = 1$  
$\text{Var}(X) = 1$  
$\text{Var}(Y) = 1$  

Además, definimos la covarianza entre $X$ e $Y$:  
$\text{Cov}(X, Y) = E(XY) - E(X)E(Y) = 1 - 1 \cdot 1 = 0$  

Esto implica que $X$ e $Y$ son incorrelacionadas (aunque no necesariamente independientes, ya que solo se nos da información sobre momentos de primer y segundo orden).

Definimos la variable aleatoria $W$:  
$W = bX + cY$  

**Condición 1: $E(W) = 1$**  
Calculamos la esperanza de $W$:  
$E(W) = E(bX + cY) = bE(X) + cE(Y) = b \cdot 1 + c \cdot 1 = b + c$  

Para que $E(W) = 1$, debe cumplirse:  
$b + c = 1$  

**Condición 2: $\text{Var}(W) = 1$**  
Calculamos la varianza de $W$:  
$\text{Var}(W) = \text{Var}(bX + cY) = b^2 \text{Var}(X) + c^2 \text{Var}(Y) + 2bc \text{Cov}(X, Y)$  
$\phantom{\text{Var}(W)} = b^2 \cdot 1 + c^2 \cdot 1 + 2bc \cdot 0 = b^2 + c^2$  

Para que $\text{Var}(W) = 1$, debe cumplirse:  
$b^2 + c^2 = 1$  

**Sistema de ecuaciones**  
Tenemos el siguiente sistema de ecuaciones para $b$ y $c$:  
$\left\{
\begin{aligned}
b + c &= 1 \\
b^2 + c^2 &= 1
\end{aligned}
\right.$  

De la primera ecuación, despejamos $c$:  
$c = 1 - b$  

Sustituimos en la segunda ecuación:  
$b^2 + (1 - b)^2 = 1$  
$\phantom{b^2 + (1 - b)^2} = b^2 + (1 - 2b + b^2) = 2b^2 - 2b + 1 = 1$  
$\phantom{b^2 + (1 - b)^2} = 2b^2 - 2b = 0$  
$\phantom{b^2 + (1 - b)^2} = 2b(b - 1) = 0$  

Las soluciones son:  
$b = 0 \quad \text{o} \quad b = 1$  

- Si $b = 0$, entonces $c = 1 - b = 1$.  
- Si $b = 1$, entonces $c = 1 - b = 0$.  

**Verificación de las soluciones**  
- Para $b = 0$, $c = 1$:  
  $W = 0 \cdot X + 1 \cdot Y = Y$  
  $E(W) = E(Y) = 1$  
  $\text{Var}(W) = \text{Var}(Y) = 1$  
  Ambas condiciones se cumplen.  

- Para $b = 1$, $c = 0$:  
  $W = 1 \cdot X + 0 \cdot Y = X$  
  $E(W) = E(X) = 1$  
  $\text{Var}(W) = \text{Var}(X) = 1$  
  Ambas condiciones se cumplen.  

Por lo tanto, hay dos soluciones válidas para $b$ y $c$.

### Resultado final

Los valores de $b$ y $c$ que satisfacen $E(W) = \text{Var}(W) = 1$ son:  
a) $b = 0, \ c = 1$  
b) $b = 1, \ c = 0$
{{% /details %}}