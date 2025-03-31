---
linkTitle: "Boletín 4"
title: ''
description: "Guía de exercicios de estadística resoltos Tema 4 - Inferencia estadística"
toc: true
math: true
layout: wide
sidebar:
  exclude: true
  hide: true
---

## Exercicio 1
{{% details title="Exercicio 1 paso a paso" closed="true" %}}
### Distribuciones normales y medias muestrales

#### **Enunciado**

Las máquinas de una planta de envasado de arroz llenan bolsas según una distribución normal con desviación típica $\sigma = 2 \, \text{kg}$ por bolsa. Sea $\mu$ la media teórica (desconocida). Calculemos:  
a) La probabilidad de que en una muestra de 9 bolsas, la media de los pesos supere a $\mu$ en más de 1 kg, y lo mismo para una muestra de 100 bolsas.  
b) La probabilidad de que la media de los pesos diste de $\mu$ en menos de 0.5 kg, en una muestra de 25 bolsas.  
c) Los valores $a$ y $b$ tales que en el 90% de los casos, el peso medio de 25 bolsas esté entre $a$ y $b$, con $a = \mu - c$ y $b = \mu + c$.

#### **Desarrollo**

**Definiciones y hipótesis iniciales**  
- Peso de cada bolsa: $X_i \sim N(\mu, \sigma^2)$, con $\sigma = 2$.  
- Media muestral de $n$ bolsas: $\bar{X} = \frac{1}{n} \sum_{i=1}^n X_i$.  
- Por el teorema central del límite, $\bar{X} \sim N\left(\mu, \frac{\sigma^2}{n}\right)$, es decir, $\bar{X} \sim N\left(\mu, \left(\frac{\sigma}{\sqrt{n}}\right)^2\right)$.  
- Error estándar de la media: $\text{SE} = \frac{\sigma}{\sqrt{n}} = \frac{2}{\sqrt{n}}$.  
- Variable estandarizada: $Z = \frac{\bar{X} - \mu}{\text{SE}} = \frac{\bar{X} - \mu}{\frac{2}{\sqrt{n}}}, \quad Z \sim N(0, 1)$.

**a) Probabilidad de que $\bar{X} > \mu + 1$ para $n = 9$ y $n = 100$**  

Para $n = 9$:  
$\text{SE} = \frac{2}{\sqrt{9}} = \frac{2}{3}$  
$P(\bar{X} > \mu + 1) = P\left(\frac{\bar{X} - \mu}{\text{SE}} > \frac{\mu + 1 - \mu}{\text{SE}}\right) = P\left(Z > \frac{1}{\frac{2}{3}}\right)$  
$\phantom{P(\bar{X} > \mu + 1)} = P(Z > 1.5) = 1 - P(Z \leq 1.5) \approx 1 - 0.9332 = 0.0668$  

Para $n = 100$:  
$\text{SE} = \frac{2}{\sqrt{100}} = \frac{2}{10} = 0.2$  
$P(\bar{X} > \mu + 1) = P\left(\frac{\bar{X} - \mu}{\text{SE}} > \frac{\mu + 1 - \mu}{\text{SE}}\right) = P\left(Z > \frac{1}{0.2}\right)$  
$\phantom{P(\bar{X} > \mu + 1)} = P(Z > 5) \approx 1 - P(Z \leq 5) \approx 1 - 1 = 0$  

**b) Probabilidad de que $|\bar{X} - \mu| < 0.5$ para $n = 25$**  

$\text{SE} = \frac{2}{\sqrt{25}} = \frac{2}{5} = 0.4$  
$P(|\bar{X} - \mu| < 0.5) = P(-0.5 < \bar{X} - \mu < 0.5) = P\left(\frac{-0.5}{\text{SE}} < \frac{\bar{X} - \mu}{\text{SE}} < \frac{0.5}{\text{SE}}\right)$  
$\phantom{P(|\bar{X} - \mu| < 0.5)} = P\left(\frac{-0.5}{0.4} < Z < \frac{0.5}{0.4}\right) = P(-1.25 < Z < 1.25)$  
$\phantom{P(|\bar{X} - \mu| < 0.5)} = P(Z < 1.25) - P(Z < -1.25) = P(Z < 1.25) - (1 - P(Z < 1.25))$  
$\phantom{P(|\bar{X} - \mu| < 0.5)} = 2P(Z < 1.25) - 1 \approx 2 \cdot 0.8944 - 1 = 0.7888$  

**c) Intervalo simétrico para el 90% de los casos con $n = 25$**  

Queremos $a$ y $b$ tales que $P(a < \bar{X} < b) = 0.9$, con $a = \mu - c$ y $b = \mu + c$. Esto implica un intervalo simétrico:  
$P(\mu - c < \bar{X} < \mu + c) = 0.9$  

$\text{SE} = \frac{2}{\sqrt{25}} = 0.4$  
$P\left(\frac{\mu - c - \mu}{\text{SE}} < \frac{\bar{X} - \mu}{\text{SE}} < \frac{\mu + c - \mu}{\text{SE}}\right) = P\left(\frac{-c}{\text{SE}} < Z < \frac{c}{\text{SE}}\right) = 0.9$  

Por simetría de la normal estándar, $P(-z_{\alpha/2} < Z < z_{\alpha/2}) = 0.9$, donde $1 - \alpha = 0.9 \implies \alpha/2 = 0.05$.  
Entonces, $z_{\alpha/2} = z_{0.05} \approx 1.645$ (valor crítico de la normal estándar).  

$\frac{c}{\text{SE}} = z_{\alpha/2} \implies \frac{c}{0.4} = 1.645 \implies c = 1.645 \cdot 0.4 = 0.658$  

Por lo tanto:  
$a = \mu - c = \mu - 0.658$  
$b = \mu + c = \mu + 0.658$  

### Resultado final

a)  
- Para $n = 9$: $P(\bar{X} > \mu + 1) \approx 0.0668$  
- Para $n = 100$: $P(\bar{X} > \mu + 1) \approx 0$  

b) $P(|\bar{X} - \mu| < 0.5) \approx 0.7888$  

c) $a = \mu - 0.658, \quad b = \mu + 0.658$
{{% /details %}}

## Exercicio 2
{{% details title="Exercicio 2 paso a paso" closed="true" %}}
### Distribución normal aplicada al transporte de cajas de café

#### **Enunciado**

Un cafetal en Colombia envasa su producto en bolsas estancas cuyo peso sigue una distribución normal con media 250 g y desviación típica 20 g. Las bolsas se transportan en cajas de madera, cada una con 10 bolsas. Suponemos que todas las variables siguen una distribución normal. Calculemos:  
a) El peso medio de las cajas llenas y su varianza.  
b) La probabilidad de que un lote de 7 cajas no sea aceptado por la compañía A-Air, que no permite transportar más de 150 kg por vuelo.  
c) El número máximo de cajas que enviaremos a Marcial el 99 % de las veces, considerando que la empresa B-Air mide el peso si supera los 2000 kg y exige reducir la cantidad en ese caso.

#### **Desarrollo**

Definimos las variables y parámetros iniciales:  
- Peso de una bolsa: $X \sim N(\mu_X, \sigma_X^2)$, con $\mu_X = 250$ g y $\sigma_X = 20$ g.  
- Peso de una caja llena (contiene 10 bolsas): $Y = X_1 + X_2 + \cdots + X_{10}$, donde $X_i \sim N(250, 20^2)$ son independientes.  
- Peso de un lote de $n$ cajas: $W = Y_1 + Y_2 + \cdots + Y_n$, donde $Y_j \sim N(\mu_Y, \sigma_Y^2)$ son independientes.

**a) Peso medio y varianza de las cajas llenas**  
El peso de una caja $Y$ es la suma de 10 bolsas independientes:  
$\mu_Y = E[Y] = E[X_1 + \cdots + X_{10}] = 10 \cdot \mu_X = 10 \cdot 250 = 2500$ g  
$\sigma_Y^2 = \text{Var}(Y) = \text{Var}(X_1 + \cdots + X_{10}) = 10 \cdot \sigma_X^2 = 10 \cdot 20^2 = 4000$ g²  

Por lo tanto, $Y \sim N(2500, 4000)$.

**b) Probabilidad de que un lote de 7 cajas no sea aceptado por A-Air**  
Un lote de 7 cajas tiene peso total $W = Y_1 + \cdots + Y_7$, donde $Y_j \sim N(2500, 4000)$ son independientes.  
Parámetros de $W$:  
$\mu_W = E[W] = 7 \cdot \mu_Y = 7 \cdot 2500 = 17500$ g = 17.5 kg  
$\sigma_W^2 = \text{Var}(W) = 7 \cdot \sigma_Y^2 = 7 \cdot 4000 = 28000$ g²  
$\sigma_W = \sqrt{28000} \approx 167.33$ g  

Convertimos a kg para facilitar el cálculo (1 kg = 1000 g):  
$\mu_W = 17.5$ kg  
$\sigma_W = \frac{167.33}{1000} \approx 0.16733$ kg  

El lote no es aceptado si $W > 150$ kg. Calculamos:  
$P(W > 150) = P\left(Z > \frac{150 - \mu_W}{\sigma_W}\right) = P\left(Z > \frac{150 - 17.5}{0.16733}\right)$  
$\phantom{P(W > 150)} = P(Z > 792.26)$  

Dado que $P(Z > 792.26) \approx 0$ (valor extremadamente grande en la cola derecha de la normal estándar), la probabilidad es prácticamente nula.

**c) Número máximo de cajas para enviar el 99 % de las veces con B-Air**  
Queremos determinar el número máximo de cajas $n$ tal que el peso total $W$ de $n$ cajas no supere 2000 kg el 99 % de las veces, es decir:  
$P(W \leq 2000) \geq 0.99$  

Parámetros de $W$ para $n$ cajas:  
$\mu_W = n \cdot \mu_Y = n \cdot 2500$ g = $n \cdot 2.5$ kg  
$\sigma_W^2 = n \cdot \sigma_Y^2 = n \cdot 4000$ g²  
$\sigma_W = \sqrt{n \cdot 4000}$ g = $\frac{\sqrt{n \cdot 4000}}{1000}$ kg = $\sqrt{n} \cdot \frac{2}{\sqrt{10}}$ kg  

Estandarizamos:  
$P(W \leq 2000) = P\left(Z \leq \frac{2000 - \mu_W}{\sigma_W}\right) = P\left(Z \leq \frac{2000 - n \cdot 2.5}{\sqrt{n} \cdot \frac{2}{\sqrt{10}}}\right)$  

Queremos que esto sea igual a 0.99. El percentil 99 de $Z \sim N(0, 1)$ es $z_{0.99} \approx 2.326$. Entonces:  
$\frac{2000 - n \cdot 2.5}{\sqrt{n} \cdot \frac{2}{\sqrt{10}}} = 2.326$  

Multiplicamos ambos lados por el denominador:  
$2000 - n \cdot 2.5 = 2.326 \cdot \sqrt{n} \cdot \frac{2}{\sqrt{10}}$  

Dividimos entre 1000 para trabajar en kg:  
$2 - \frac{n \cdot 2.5}{1000} = 2.326 \cdot \frac{\sqrt{n} \cdot 2}{\sqrt{10}} \cdot \frac{1}{1000}$  

Simplificamos:  
$2 - 0.0025n = 0.002326 \cdot \frac{2 \sqrt{n}}{\sqrt{10}}$  
$\phantom{2 - 0.0025n} = 0.001473 \cdot \sqrt{n}$  

Reorganizamos:  
$2 = 0.0025n + 0.001473 \sqrt{n}$  

Sea $u = \sqrt{n}$, entonces $n = u^2$. Sustituimos:  
$2 = 0.0025u^2 + 0.001473u$  

Dividimos entre 0.0025:  
$800 = u^2 + 0.5892u$  

Completamos el cuadrado:  
$u^2 + 0.5892u + 0.0867 = 800 + 0.0867$  
$\phantom{u^2 + 0.5892u + 0.0867} = 800.0867$  
$(u + 0.2946)^2 = 800.0867$  
$u + 0.2946 = \sqrt{800.0867} \approx 28.286$  
$u \approx 28.286 - 0.2946 \approx 27.991$  

Entonces, $n = u^2 \approx (27.991)^2 \approx 783.5$. Como $n$ debe ser entero, tomamos $n = 783$ y verificamos:  
Para $n = 783$:  
$\mu_W = 783 \cdot 2.5 = 1957.5$ kg  
$\sigma_W = \sqrt{783} \cdot \frac{2}{\sqrt{10}} \approx 17.75$ kg  
$P(W \leq 2000) = P\left(Z \leq \frac{2000 - 1957.5}{17.75}\right) = P(Z \leq 2.394)$  
$\phantom{P(W \leq 2000)} \approx 0.9916 > 0.99$  

Para $n = 784$:  
$\mu_W = 784 \cdot 2.5 = 1960$ kg  
$\sigma_W = \sqrt{784} \cdot \frac{2}{\sqrt{10}} \approx 17.76$ kg  
$P(W \leq 2000) = P\left(Z \leq \frac{2000 - 1960}{17.76}\right) = P(Z \leq 2.252)$  
$\phantom{P(W \leq 2000)} \approx 0.9878 < 0.99$  

Por lo tanto, el número máximo de cajas es $n = 783$.

### Resultado final

a) Peso medio de una caja: $\mu_Y = 2500$ g, varianza: $\sigma_Y^2 = 4000$ g²  
b) Probabilidad de que un lote de 7 cajas no sea aceptado: $P(W > 150) \approx 0$  
c) Número máximo de cajas para enviar el 99 % de las veces: $n = 783$
{{% /details %}}

## Exercicio 3
{{% details title="Exercicio 3 paso a paso" closed="true" %}}
### Proporciones muestrales y tamaño de muestra

#### **Enunciado**

Un distribuidor de software desea conocer la proporción de clientes dispuestos a adquirir un nuevo programa, del que han descargado la demo. Para ello, se consultó al azar a 100 de ellos, resultando que 30 estarían dispuestos a comprar el programa.  
a) ¿Cuál es la probabilidad de que la proporción muestral de interesados difiera de la real en menos de un 15 %?  
b) Otro estudio de mercado indica que la proporción real de usuarios que adquirirían el software es de un 40 %. ¿De qué tamaño es la muestra que debemos elegir para que la proporción muestral de usuarios interesados en el producto diste de la real en menos de un 10 % con una probabilidad del 95 %?

#### **Desarrollo**

Definimos:  
$X = \text{"número de clientes dispuestos a comprar el programa"}$  
$X \sim \text{Binomial}(n, p)$, donde:  
$n = 100$ (tamaño de la muestra)  
$\hat{p} = \frac{X}{n} = \frac{30}{100} = 0.3$ (proporción muestral)  
$p$ = proporción real (desconocida en a), conocida como $p = 0.4$ en b))  

Aproximación normal para proporciones:  
La proporción muestral $\hat{p}$ sigue aproximadamente una distribución normal si:  
$\left\{
\begin{aligned}
np &\geq 5 \\
n(1 - p) &\geq 5
\end{aligned}
\right.$  

Media y desviación estándar de $\hat{p}$:  
$E(\hat{p}) = p$  
$\text{Var}(\hat{p}) = \frac{p(1 - p)}{n}$  
$\sigma_{\hat{p}} = \sqrt{\frac{p(1 - p)}{n}}$  

Estandarización:  
$Z = \frac{\hat{p} - p}{\sqrt{\frac{p(1 - p)}{n}}}, \quad Z \sim N(0, 1)$  

**a) $P(|\hat{p} - p| < 0.15)$**  

En este caso, $p$ es desconocido, pero se usa $\hat{p} = 0.3$ como estimación de $p$ para calcular la desviación estándar:  
$n = 100$  
$\hat{p} = 0.3$  
$\hat{q} = 1 - \hat{p} = 0.7$  

Verificación de la aproximación normal:  
$\left\{
\begin{aligned}
n\hat{p} &= 100 \cdot 0.3 = 30 \geq 5 \\
n\hat{q} &= 100 \cdot 0.7 = 70 \geq 5
\end{aligned}
\right.$  

Parámetros de la normal:  
$\mu_{\hat{p}} = \hat{p} = 0.3$  
$\sigma_{\hat{p}} = \sqrt{\frac{\hat{p}\hat{q}}{n}} = \sqrt{\frac{0.3 \cdot 0.7}{100}} = \sqrt{\frac{0.21}{100}} = \sqrt{0.0021} \approx 0.0458$  

Interpretamos $P(|\hat{p} - p| < 0.15)$ como:  
$P(|\hat{p} - p| < 0.15) = P(-0.15 < \hat{p} - p < 0.15) = P(p - 0.15 < \hat{p} < p + 0.15)$  
$\phantom{P(|\hat{p} - p| < 0.15)} = P\left(\frac{p - 0.15 - p}{\sigma_{\hat{p}}} < Z < \frac{p + 0.15 - p}{\sigma_{\hat{p}}}\right)$  
$\phantom{P(|\hat{p} - p| < 0.15)} = P\left(\frac{-0.15}{\sigma_{\hat{p}}} < Z < \frac{0.15}{\sigma_{\hat{p}}}\right)$  
$\phantom{P(|\hat{p} - p| < 0.15)} = P\left(\frac{-0.15}{0.0458} < Z < \frac{0.15}{0.0458}\right)$  
$\phantom{P(|\hat{p} - p| < 0.15)} = P(-3.28 < Z < 3.28)$  
$\phantom{P(|\hat{p} - p| < 0.15)} = P(Z < 3.28) - P(Z < -3.28)$  
$\phantom{P(|\hat{p} - p| < 0.15)} = P(Z < 3.28) - (1 - P(Z < 3.28))$  
$\phantom{P(|\hat{p} - p| < 0.15)} = 2P(Z < 3.28) - 1$  

De la tabla de la normal estándar, $P(Z < 3.3) \approx 0.9995$, por lo que:  
$P(Z < 3.28) \approx 0.9995$  
$P(|\hat{p} - p| < 0.15) = 2 \cdot 0.9995 - 1 = 0.999$  

**b) Tamaño de muestra para $P(|\hat{p} - p| < 0.1) = 0.95$ con $p = 0.4$**  

Datos:  
$p = 0.4$  
$q = 1 - p = 0.6$  
$P(|\hat{p} - p| < 0.1) = 0.95$  

Queremos determinar $n$ tal que:  
$P(|\hat{p} - p| < 0.1) = P(-0.1 < \hat{p} - p < 0.1) = P(p - 0.1 < \hat{p} < p + 0.1)$  
$\phantom{P(|\hat{p} - p| < 0.1)} = P\left(\frac{p - 0.1 - p}{\sqrt{\frac{pq}{n}}} < Z < \frac{p + 0.1 - p}{\sqrt{\frac{pq}{n}}}\right)$  
$\phantom{P(|\hat{p} - p| < 0.1)} = P\left(\frac{-0.1}{\sqrt{\frac{pq}{n}}} < Z < \frac{0.1}{\sqrt{\frac{pq}{n}}}\right)$  
$\phantom{P(|\hat{p} - p| < 0.1)} = P\left(-0.1 \sqrt{\frac{n}{pq}} < Z < 0.1 \sqrt{\frac{n}{pq}}\right)$  

Como la distribución normal es simétrica:  
$P(-z < Z < z) = 2P(Z < z) - 1$  
Dado que $P(|\hat{p} - p| < 0.1) = 0.95$:  
$2P(Z < z) - 1 = 0.95$  
$P(Z < z) = \frac{0.95 + 1}{2} = 0.975$  

De la tabla de la normal estándar, $P(Z < 1.96) = 0.975$, por lo que:  
$z = 1.96$  

Entonces:  
$0.1 \sqrt{\frac{n}{pq}} = 1.96$  
$\sqrt{\frac{n}{pq}} = \frac{1.96}{0.1} = 19.6$  
$\frac{n}{pq} = (19.6)^2 = 384.16$  
$n = 384.16 \cdot pq = 384.16 \cdot 0.4 \cdot 0.6 = 384.16 \cdot 0.24 \approx 92.2$  

Como $n$ debe ser un entero, tomamos el siguiente entero mayor:  
$n = 93$  

Verificación de la aproximación normal:  
$\left\{
\begin{aligned}
np &= 93 \cdot 0.4 = 37.2 \geq 5 \\
nq &= 93 \cdot 0.6 = 55.8 \geq 5
\end{aligned}
\right.$  

### Resultado final

a) $P(|\hat{p} - p| < 0.15) \approx 0.999$  
b) $n = 93$
{{% /details %}}

## Exercicio 4
{{% details title="Exercicio 4 paso a paso" closed="true" %}}
### Probabilidad de la varianza muestral en una distribución normal

#### **Enunciado**

Sabemos que el tiempo que los alumnos de una escuela pasan al día conectados a internet sigue una distribución normal con desviación típica poblacional $\sigma = 3$ horas. En una muestra de $n$ alumnos, calcular:  
1. La probabilidad de que la varianza muestral $S^2$ sea mayor que $\frac{3}{4}$ de la varianza poblacional, para $n = 10$.  
2. Lo mismo, pero para $n = 50$.

#### **Desarrollo**

Definimos las variables y parámetros:  
$X_i \sim N(\mu, \sigma^2)$: tiempo diario conectado a internet de cada alumno, con $\mu$ desconocida y $\sigma = 3$.  
$\sigma^2 = 3^2 = 9$: varianza poblacional.  
$S^2$: varianza muestral de una muestra de tamaño $n$, definida como $S^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \bar{X})^2$, donde $\bar{X}$ es la media muestral.  

Sabemos que, para muestras de una población normal, la estadística:  
$\frac{(n-1)S^2}{\sigma^2} \sim \chi^2_{n-1}$  
sigue una distribución chi-cuadrado con $n-1$ grados de libertad.  

Queremos calcular:  
$P\left(S^2 > \frac{3}{4} \sigma^2\right)$  
Sustituimos $\sigma^2 = 9$:  
$\frac{3}{4} \sigma^2 = \frac{3}{4} \cdot 9 = \frac{27}{4} = 6.75$  
Entonces:  
$P\left(S^2 > \frac{3}{4} \sigma^2\right) = P(S^2 > 6.75)$  

Expresamos en términos de la distribución chi-cuadrado:  
$P(S^2 > 6.75) = P\left(\frac{(n-1)S^2}{\sigma^2} > \frac{(n-1) \cdot 6.75}{\sigma^2}\right)$  
$\phantom{P(S^2 > 6.75)} = P\left(\frac{(n-1)S^2}{\sigma^2} > \frac{(n-1) \cdot 6.75}{9}\right)$  
$\phantom{P(S^2 > 6.75)} = P\left(\chi^2_{n-1} > \frac{(n-1) \cdot 6.75}{9}\right)$  

Simplificamos la constante:  
$\frac{6.75}{9} = \frac{27/4}{9} = \frac{27}{36} = \frac{3}{4}$  
Entonces:  
$P(S^2 > 6.75) = P\left(\chi^2_{n-1} > \frac{3}{4} (n-1)\right)$  

**a) Para $n = 10$**  
Grados de libertad: $n-1 = 10-1 = 9$  
Calculamos:  
$P(S^2 > 6.75) = P\left(\chi^2_9 > \frac{3}{4} \cdot 9\right)$  
$\phantom{P(S^2 > 6.75)} = P\left(\chi^2_9 > \frac{27}{4}\right)$  
$\phantom{P(S^2 > 6.75)} = P(\chi^2_9 > 6.75)$  

Usamos tablas de la distribución chi-cuadrado (o software) para encontrar $P(\chi^2_9 > 6.75)$.  
Sabemos que la media de una $\chi^2_9$ es $9$ y su varianza es $2 \cdot 9 = 18$, por lo que $6.75$ está por debajo de la media, lo que sugiere una probabilidad mayor a 0.5. Consultando tablas (o calculando con software):  
$P(\chi^2_9 > 6.75) \approx 0.658$  

**b) Para $n = 50$**  
Grados de libertad: $n-1 = 50-1 = 49$  
Calculamos:  
$P(S^2 > 6.75) = P\left(\chi^2_{49} > \frac{3}{4} \cdot 49\right)$  
$\phantom{P(S^2 > 6.75)} = P\left(\chi^2_{49} > \frac{147}{4}\right)$  
$\phantom{P(S^2 > 6.75)} = P(\chi^2_{49} > 36.75)$  

Usamos tablas de la distribución chi-cuadrado para encontrar $P(\chi^2_{49} > 36.75)$.  
La media de una $\chi^2_{49}$ es $49$ y su varianza es $2 \cdot 49 = 98$, por lo que $36.75$ está por debajo de la media, lo que nuevamente sugiere una probabilidad mayor a 0.5. Consultando tablas (o calculando con software):  
$P(\chi^2_{49} > 36.75) \approx 0.891$  

### Resultado final

a) Para $n = 10$: $P\left(S^2 > \frac{3}{4} \sigma^2\right) \approx 0.658$  
b) Para $n = 50$: $P\left(S^2 > \frac{3}{4} \sigma^2\right) \approx 0.891$
{{% /details %}}

## Exercicio 5
{{% details title="Exercicio 5 paso a paso" closed="true" %}}
### Intervalos de confianza para la media

#### **Enunciado**

El tiempo de entrenamiento de un modelo de aprendizaje automático sigue una distribución normal $X \sim N(\mu, \sigma^2)$, con:  
$\mu = 6$ horas (media conocida)  
$\sigma = 1.5$ horas (desviación típica conocida)  

Queremos:  
a) Determinar el tamaño muestral $n$ necesario para construir un intervalo de confianza al 95 % para la media, con un margen de error de $\pm 2$ horas.  
b) Dados los tiempos muestrales $\{2.9, 6.2, 5.5, 5.7, 2.9\}$ ($n = 5$), calcular el intervalo de confianza al 99 % para la media, considerando:  
   1. $\sigma = 1.5$ conocida (usando la distribución normal).  
   2. $\sigma$ desconocida (usando la distribución $t$ de Student).

#### **Desarrollo**

**a) Tamaño muestral para un intervalo de confianza al 95 % con margen de error $\pm 2$**  

Definimos:  
- Nivel de confianza: 95 % $\Rightarrow \alpha = 0.05$, $\frac{\alpha}{2} = 0.025$  
- Valor crítico $z_{\frac{\alpha}{2}}$ tal que $P(Z > z_{\frac{\alpha}{2}}) = 0.025$, donde $Z \sim N(0, 1)$  
  $\Rightarrow z_{\frac{\alpha}{2}} = 1.96$ (de tablas de la normal estándar)  
- Margen de error: $E = 2$ horas  
- Desviación típica: $\sigma = 1.5$ horas  

Fórmula del margen de error para el intervalo de confianza de la media (con $\sigma$ conocida):  
$E = z_{\frac{\alpha}{2}} \cdot \frac{\sigma}{\sqrt{n}}$  

Despejamos $n$:  
$E = z_{\frac{\alpha}{2}} \cdot \frac{\sigma}{\sqrt{n}}$  
$\Rightarrow \sqrt{n} = \frac{z_{\frac{\alpha}{2}} \cdot \sigma}{E}$  
$\Rightarrow n = \left( \frac{z_{\frac{\alpha}{2}} \cdot \sigma}{E} \right)^2$  

Sustituimos:  
$n = \left( \frac{1.96 \cdot 1.5}{2} \right)^2 = \left( \frac{2.94}{2} \right)^2 = (1.47)^2 = 2.1609$  

El tamaño muestral debe ser un entero, y siempre redondeamos hacia arriba para garantizar el margen de error deseado:  
$n = \lceil 2.1609 \rceil = 3$  

**b) Intervalo de confianza al 99 % para la media con $n = 5$**  

Datos muestrales: $\{2.9, 6.2, 5.5, 5.7, 2.9\}$  
Calculamos la media muestral $\bar{x}$:  
$\bar{x} = \frac{\sum x_i}{n} = \frac{2.9 + 6.2 + 5.5 + 5.7 + 2.9}{5} = \frac{23.2}{5} = 4.64$  

**b.1) Con $\sigma = 1.5$ conocida (distribución normal)**  

Definimos:  
- Nivel de confianza: 99 % $\Rightarrow \alpha = 0.01$, $\frac{\alpha}{2} = 0.005$  
- Valor crítico $z_{\frac{\alpha}{2}}$ tal que $P(Z > z_{\frac{\alpha}{2}}) = 0.005$, donde $Z \sim N(0, 1)$  
  $\Rightarrow z_{\frac{\alpha}{2}} = 2.576$ (de tablas de la normal estándar)  
- Desviación estándar del estimador: $\frac{\sigma}{\sqrt{n}} = \frac{1.5}{\sqrt{5}} \approx 0.6708$  

Fórmula del intervalo de confianza:  
$\bar{x} \pm z_{\frac{\alpha}{2}} \cdot \frac{\sigma}{\sqrt{n}}$  

Sustituimos:  
$\bar{x} \pm z_{\frac{\alpha}{2}} \cdot \frac{\sigma}{\sqrt{n}} = 4.64 \pm 2.576 \cdot 0.6708$  
$\phantom{\bar{x} \pm z_{\frac{\alpha}{2}} \cdot \frac{\sigma}{\sqrt{n}}} = 4.64 \pm 1.7279$  

Límites del intervalo:  
- Límite inferior: $4.64 - 1.7279 \approx 2.9121$  
- Límite superior: $4.64 + 1.7279 \approx 6.3679$  

Intervalo de confianza al 99 %: $(2.9121, 6.3679)$  

**b.2) Con $\sigma$ desconocida (distribución $t$ de Student)**  

Calculamos la desviación típica muestral $s$:  
$s = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n - 1}}$  

Primero, calculamos $\sum (x_i - \bar{x})^2$:  
$\bar{x} = 4.64$  
$\left\{
\begin{aligned}
(x_1 - \bar{x})^2 &= (2.9 - 4.64)^2 = (-1.74)^2 = 3.0276 \\
(x_2 - \bar{x})^2 &= (6.2 - 4.64)^2 = (1.56)^2 = 2.4336 \\
(x_3 - \bar{x})^2 &= (5.5 - 4.64)^2 = (0.86)^2 = 0.7396 \\
(x_4 - \bar{x})^2 &= (5.7 - 4.64)^2 = (1.06)^2 = 1.1236 \\
(x_5 - \bar{x})^2 &= (2.9 - 4.64)^2 = (-1.74)^2 = 3.0276
\end{aligned}
\right.$  

Sumamos:  
$\sum (x_i - \bar{x})^2 = 3.0276 + 2.4336 + 0.7396 + 1.1236 + 3.0276 = 10.352$  

Luego:  
$s = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n - 1}} = \sqrt{\frac{10.352}{4}} = \sqrt{2.588} \approx 1.6087$  

Definimos:  
- Nivel de confianza: 99 % $\Rightarrow \alpha = 0.01$, $\frac{\alpha}{2} = 0.005$  
- Grados de libertad: $n - 1 = 5 - 1 = 4$  
- Valor crítico $t_{\frac{\alpha}{2}, n-1}$ tal que $P(T > t_{\frac{\alpha}{2}, n-1}) = 0.005$, donde $T \sim t(4)$  
  $\Rightarrow t_{\frac{\alpha}{2}, 4} = 4.604$ (de tablas de la distribución $t$)  
- Desviación estándar del estimador: $\frac{s}{\sqrt{n}} = \frac{1.6087}{\sqrt{5}} \approx 0.7195$  

Fórmula del intervalo de confianza:  
$\bar{x} \pm t_{\frac{\alpha}{2}, n-1} \cdot \frac{s}{\sqrt{n}}$  

Sustituimos:  
$\bar{x} \pm t_{\frac{\alpha}{2}, n-1} \cdot \frac{s}{\sqrt{n}} = 4.64 \pm 4.604 \cdot 0.7195$  
$\phantom{\bar{x} \pm t_{\frac{\alpha}{2}, n-1} \cdot \frac{s}{\sqrt{n}}} = 4.64 \pm 3.3126$  

Límites del intervalo:  
- Límite inferior: $4.64 - 3.3126 \approx 1.3274$  
- Límite superior: $4.64 + 3.3126 \approx 7.9526$  

Intervalo de confianza al 99 %: $(1.3274, 7.9526)$  

### Resultado final

a) Tamaño muestral necesario: $n = 3$  

b) Intervalos de confianza al 99 % para la media:  
   1. Con $\sigma = 1.5$ conocida: $(2.9121, 6.3679)$  
   2. Con $\sigma$ desconocida: $(1.3274, 7.9526)$
{{% /details %}}

## Exercicio 6
{{% details title="Exercicio 6 paso a paso" closed="true" %}}
### Intervalos de confianza para proporciones

#### **Enunciado**

Se sabe que la proporción real de declaraciones con errores es $p = 0.02$. Queremos:  
a) Determinar el tamaño muestral $n$ necesario para construir un intervalo de confianza al 99 % para la proporción, con un margen de error menor a $0.01$ (es decir, $\pm 0.01$).  
b) Dados los resultados de una muestra de $n = 1000$ declaraciones, donde $26$ fueron clasificadas como “declaración con error”, construir un intervalo de confianza al 95 % para la proporción de declaraciones con errores. Además, evaluar si, según este intervalo, es factible que la verdadera proporción sea $p = 0.02$.

#### **Desarrollo**

**a) Tamaño muestral para un intervalo de confianza al 99 % con margen de error menor a $0.01$**  

Definimos:  
- Nivel de confianza: 99 % $\Rightarrow \alpha = 0.01$, $\frac{\alpha}{2} = 0.005$  
- Valor crítico $z_{\frac{\alpha}{2}}$ tal que $P(Z > z_{\frac{\alpha}{2}}) = 0.005$, donde $Z \sim N(0, 1)$  
  $\Rightarrow z_{\frac{\alpha}{2}} = 2.576$ (de tablas de la normal estándar)  
- Margen de error: $E = 0.01$  
- Proporción conocida: $p = 0.02$, $q = 1 - p = 0.98$  

Fórmula del margen de error para el intervalo de confianza de una proporción:  
$E = z_{\frac{\alpha}{2}} \cdot \sqrt{\frac{pq}{n}}$  

Despejamos $n$:  
$E = z_{\frac{\alpha}{2}} \cdot \sqrt{\frac{pq}{n}}$  
$\Rightarrow \sqrt{n} = \frac{z_{\frac{\alpha}{2}} \cdot \sqrt{pq}}{E}$  
$\Rightarrow n = \left( \frac{z_{\frac{\alpha}{2}} \cdot \sqrt{pq}}{E} \right)^2$  

Sustituimos:  
$n = \left( \frac{2.576 \cdot \sqrt{0.02 \cdot 0.98}}{0.01} \right)^2$  
$\phantom{n} = \left( \frac{2.576 \cdot \sqrt{0.0196}}{0.01} \right)^2$  
$\phantom{n} = \left( \frac{2.576 \cdot 0.14}{0.01} \right)^2$  
$\phantom{n} = (36.064)^2 \approx 1300.61$  

El tamaño muestral debe ser un entero, y siempre redondeamos hacia arriba para garantizar el margen de error deseado:  
$n = \lceil 1300.61 \rceil = 1301$  

**b) Intervalo de confianza al 95 % para la proporción y evaluación de $p = 0.02$**  

Datos muestrales:  
- Tamaño de la muestra: $n = 1000$  
- Número de declaraciones clasificadas como “con error”: $x = 26$  
- Proporción muestral: $\hat{p} = \frac{x}{n} = \frac{26}{1000} = 0.026$  
- $q = 1 - \hat{p} = 1 - 0.026 = 0.974$  

Definimos:  
- Nivel de confianza: 95 % $\Rightarrow \alpha = 0.05$, $\frac{\alpha}{2} = 0.025$  
- Valor crítico $z_{\frac{\alpha}{2}}$ tal que $P(Z > z_{\frac{\alpha}{2}}) = 0.025$, donde $Z \sim N(0, 1)$  
  $\Rightarrow z_{\frac{\alpha}{2}} = 1.96$ (de tablas de la normal estándar)  
- Desviación estándar del estimador: $\sqrt{\frac{\hat{p} \hat{q}}{n}} = \sqrt{\frac{0.026 \cdot 0.974}{1000}} \approx \sqrt{0.000025324} \approx 0.005032$  

Fórmula del intervalo de confianza:  
$\hat{p} \pm z_{\frac{\alpha}{2}} \cdot \sqrt{\frac{\hat{p} \hat{q}}{n}}$  

Sustituimos:  
$\hat{p} \pm z_{\frac{\alpha}{2}} \cdot \sqrt{\frac{\hat{p} \hat{q}}{n}} = 0.026 \pm 1.96 \cdot 0.005032$  
$\phantom{\hat{p} \pm z_{\frac{\alpha}{2}} \cdot \sqrt{\frac{\hat{p} \hat{q}}{n}}} = 0.026 \pm 0.009863$  

Límites del intervalo:  
- Límite inferior: $0.026 - 0.009863 \approx 0.016137$  
- Límite superior: $0.026 + 0.009863 \approx 0.035863$  

Intervalo de confianza al 95 %: $(0.016137, 0.035863)$  

Evaluación de la factibilidad de $p = 0.02$:  
La proporción real $p = 0.02$ está dentro del intervalo de confianza $(0.016137, 0.035863)$, ya que $0.016137 < 0.02 < 0.035863$. Por lo tanto, es factible pensar que la verdadera proporción de declaraciones con errores es del 2 %, y el modelo parece funcionar bien.

### Resultado final

a) Tamaño muestral necesario: $n = 1301$  

b)  
   1. Intervalo de confianza al 95 % para la proporción: $(0.016137, 0.035863)$  
   2. Evaluación: Es factible pensar que la verdadera proporción de declaraciones con errores es del 2 %, ya que $p = 0.02$ está dentro del intervalo de confianza.
{{% /details %}}

## Exercicio 7
{{% details title="Exercicio 7 paso a paso" closed="true" %}}
### Probabilidad e intervalo de confianza para la varianza

#### **Enunciado**

Una impresora 3D presenta variabilidad en el tamaño de las piezas impresas. Se han tomado $n = 10$ piezas. Suponemos que el tamaño de las piezas sigue una distribución normal $X \sim N(\mu, \sigma^2)$, donde $\mu$ y $\sigma^2$ son desconocidas. Queremos:  
a) Calcular la probabilidad de que la varianza muestral $s^2$ sea mayor que la varianza poblacional $\sigma^2$.  
b) Dado que la desviación típica muestral es $s = 1.2$, construir un intervalo de confianza al 95 % para $\sigma^2$.

#### **Desarrollo**

**a) Probabilidad de que $s^2 > \sigma^2$**  

Definimos:  
- Tamaño de la muestra: $n = 10$  
- Grados de libertad: $n - 1 = 9$  
- $s^2 = \frac{\sum (x_i - \bar{x})^2}{n - 1}$ (varianza muestral)  
- $\sigma^2$ (varianza poblacional, desconocida)  

Sabemos que, bajo la hipótesis de normalidad de $X$, la estadística:  
$\frac{(n - 1) s^2}{\sigma^2} \sim \chi^2_{n-1}$  

Queremos:  
$P(s^2 > \sigma^2) = P\left(\frac{(n - 1) s^2}{\sigma^2} > \frac{(n - 1) \sigma^2}{\sigma^2}\right)$  
$\phantom{P(s^2 > \sigma^2)} = P\left(\frac{(n - 1) s^2}{\sigma^2} > n - 1\right)$  
$\phantom{P(s^2 > \sigma^2)} = P(\chi^2_{9} > 9)$  

Calculamos esta probabilidad usando la distribución $\chi^2$ con 9 grados de libertad. La media de una $\chi^2_{k}$ es $k$, por lo que $E[\chi^2_{9}] = 9$. Dado que la distribución $\chi^2$ es asimétrica a la derecha, la probabilidad de que $\chi^2_{9}$ sea mayor que su media no es exactamente 0.5, sino ligeramente menor.  

Consultamos tablas de la distribución $\chi^2$ (o usamos software estadístico) para $P(\chi^2_{9} > 9)$. Aproximadamente:  
$P(\chi^2_{9} > 9) \approx 0.46$  

**b) Intervalo de confianza al 95 % para $\sigma^2$**  

Datos muestrales:  
- Tamaño de la muestra: $n = 10$  
- Grados de libertad: $n - 1 = 9$  
- Desviación típica muestral: $s = 1.2$  
- Varianza muestral: $s^2 = (1.2)^2 = 1.44$  

Definimos:  
- Nivel de confianza: 95 % $\Rightarrow \alpha = 0.05$, $\frac{\alpha}{2} = 0.025$  
- Valores críticos de la distribución $\chi^2_{n-1}$:  
  - $\chi^2_{1 - \frac{\alpha}{2}, n-1}$ tal que $P(\chi^2_{9} > \chi^2_{1 - \frac{\alpha}{2}, 9}) = 0.025$  
    $\Rightarrow \chi^2_{0.975, 9} \approx 19.023$ (de tablas de la distribución $\chi^2$)  
  - $\chi^2_{\frac{\alpha}{2}, n-1}$ tal que $P(\chi^2_{9} > \chi^2_{\frac{\alpha}{2}, 9}) = 0.975$  
    $\Rightarrow \chi^2_{0.025, 9} \approx 2.700$ (de tablas de la distribución $\chi^2$)  

Sabemos que:  
$\frac{(n - 1) s^2}{\sigma^2} \sim \chi^2_{n-1}$  

El intervalo de confianza al 95 % para $\sigma^2$ se construye como:  
$\left( \frac{(n - 1) s^2}{\chi^2_{1 - \frac{\alpha}{2}, n-1}}, \frac{(n - 1) s^2}{\chi^2_{\frac{\alpha}{2}, n-1}} \right)$  

Sustituimos:  
$\left( \frac{(n - 1) s^2}{\chi^2_{0.975, 9}}, \frac{(n - 1) s^2}{\chi^2_{0.025, 9}} \right) = \left( \frac{9 \cdot 1.44}{19.023}, \frac{9 \cdot 1.44}{2.700} \right)$  
$\phantom{\left( \frac{(n - 1) s^2}{\chi^2_{0.975, 9}}, \frac{(n - 1) s^2}{\chi^2_{0.025, 9}} \right)} = \left( \frac{12.96}{19.023}, \frac{12.96}{2.700} \right)$  
$\phantom{\left( \frac{(n - 1) s^2}{\chi^2_{0.975, 9}}, \frac{(n - 1) s^2}{\chi^2_{0.025, 9}} \right)} \approx (0.681, 4.800)$  

Intervalo de confianza al 95 % para $\sigma^2$: $(0.681, 4.800)$  

### Resultado final

a) $P(s^2 > \sigma^2) \approx 0.46$  

b) Intervalo de confianza al 95 % para $\sigma^2$: $(0.681, 4.800)$
{{% /details %}}