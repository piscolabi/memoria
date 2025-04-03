---
linkTitle: "Boletín 5"
title: ''
description: "Guía de exercicios de estadística resoltos Tema 5 - Contraste de hipótesis"
toc: true
math: true
sidebar:
  exclude: true
  hide: true
---

# Boletín 5

Inda non tan revisados tódolos exercicios pero como guía están todos ben.


## Exercicio 1
{{% details title="Exercicio 1 paso a paso" closed="true" %}}
### Intervalo de confianza y contraste de hipótesis para una distribución normal

#### **Enunciado**

Se tiene una muestra de 10 bolsas de café con peso medio muestral $\bar{x} = 236.62 \, \text{g}$ y cuasidesviación típica muestral $s = 15.69 \, \text{g}$.  
a) Obtener el intervalo de confianza al 95% para el peso medio de las bolsas.  
b) Comprobar, mediante un contraste de hipótesis con nivel de significación $\alpha = 0.01$, si se puede demostrar que el peso medio no es 250 g. Luego, con $\alpha = 0.05$, comprobar si se puede demostrar que el peso medio es inferior a 250 g.

#### **Desarrollo**

**Definiciones iniciales**  
El peso de las bolsas sigue una distribución normal: $X \sim N(\mu, \sigma^2)$, con $\mu$ y $\sigma$ desconocidos.  
Datos muestrales:  
$n = 10$ (tamaño de la muestra)  
$\bar{x} = 236.62 \, \text{g}$ (media muestral)  
$s = 15.69 \, \text{g}$ (cuasidesviación típica muestral)  

Dado que $\sigma$ es desconocida y $n$ es pequeño, usamos la distribución $t$ de Student con $n - 1 = 9$ grados de libertad para los cálculos.

---

**a) Intervalo de confianza al 95% para el peso medio $\mu$**  

El intervalo de confianza para $\mu$ con $\sigma$ desconocida se calcula como:  
$\bar{x} \pm t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}$  

Nivel de confianza: $1 - \alpha = 0.95 \implies \alpha = 0.05 \implies \alpha/2 = 0.025$  
Valor crítico de la distribución $t$ con 9 grados de libertad: $t_{0.025, 9} \approx 2.262$ (consultado en tablas de $t$ de Student).  
Error estándar: $\frac{s}{\sqrt{n}} = \frac{15.69}{\sqrt{10}} \approx \frac{15.69}{3.162} \approx 4.96$  

Límites del intervalo:  
$\bar{x} - t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}} \leq \mu \leq \bar{x} + t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}$  
$\phantom{\bar{x} - t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}} = 236.62 - 2.262 \cdot 4.96 \leq \mu \leq 236.62 + 2.262 \cdot 4.96$  
$\phantom{\bar{x} - t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}} = 236.62 - 11.22 \leq \mu \leq 236.62 + 11.22$  
$\phantom{\bar{x} - t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}} = 225.40 \leq \mu \leq 247.84$  

---

**b) Contraste de hipótesis**  

**b.1) Contraste bilateral con $\alpha = 0.01$**  
Se desea comprobar si el peso medio $\mu = 250 \, \text{g}$ o no.  
Hipótesis:  
$H_0: \mu = 250$ (el peso medio es 250 g)  
$H_1: \mu \neq 250$ (el peso medio no es 250 g)  

Nivel de significación: $\alpha = 0.01$  
Estadístico de prueba (dado que $\sigma$ es desconocida):  
$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$  

Valor observado:  
$\mu_0 = 250$  
$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} = \frac{236.62 - 250}{15.69 / \sqrt{10}} = \frac{-13.38}{4.96} \approx -2.70$  

Región crítica (bilateral, $\alpha = 0.01$, $n - 1 = 9$ grados de libertad):  
$t_{\alpha/2, n-1} = t_{0.005, 9} \approx 3.250$ (consultado en tablas de $t$ de Student)  
Rechazamos $H_0$ si $|t| > t_{\alpha/2, n-1}$, es decir, si $t < -3.250$ o $t > 3.250$.  

Decisión:  
$|t| = 2.70 < 3.250 \implies$ No rechazamos $H_0$.  

Conclusión: Con $\alpha = 0.01$, no hay evidencia suficiente para demostrar que el peso medio $\mu$ no es 250 g.

**b.2) Contraste unilateral con $\alpha = 0.05$**  
Se desea comprobar si el peso medio $\mu < 250 \, \text{g}$.  
Hipótesis:  
$H_0: \mu \geq 250$ (el peso medio es al menos 250 g)  
$H_1: \mu < 250$ (el peso medio es inferior a 250 g)  

Nivel de significación: $\alpha = 0.05$  
Estadístico de prueba:  
$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$  

Valor observado (ya calculado):  
$t \approx -2.70$  

Región crítica (unilateral a la izquierda, $\alpha = 0.05$, $n - 1 = 9$ grados de libertad):  
$t_{\alpha, n-1} = t_{0.05, 9} \approx -1.833$ (consultado en tablas de $t$ de Student)  
Rechazamos $H_0$ si $t < -t_{\alpha, n-1}$, es decir, si $t < -1.833$.  

Decisión:  
$t = -2.70 < -1.833 \implies$ Rechazamos $H_0$.  

Conclusión: Con $\alpha = 0.05$, hay evidencia suficiente para demostrar que el peso medio $\mu$ es inferior a 250 g.

---

### Resultado final

a) El intervalo de confianza al 95% para el peso medio $\mu$ es:  
$[225.40, 247.84]$  

b)  
1. Con $\alpha = 0.01$, no se puede demostrar que el peso medio $\mu$ no es 250 g.  
2. Con $\alpha = 0.05$, se puede demostrar que el peso medio $\mu$ es inferior a 250 g.
{{% /details %}}

## Exercicio 2
{{% details title="Exercicio 2 paso a paso" closed="true" %}}
### Intervalos de confianza y contraste de hipótesis para una distribución normal

#### **Enunciado**

El peso de los envases de detergente sigue una distribución normal $X \sim N(\mu, \sigma^2)$. Se tiene una muestra de 16 envases con media muestral $\bar{x} = 503 \, \text{g}$ y desviación típica poblacional $\sigma = 5 \, \text{g}$.  
a) Calcular los intervalos de confianza al 90%, 95% y 99% para el peso medio $\mu$.  
b) Determinar si se puede rechazar la hipótesis nula de que el peso medio $\mu = 105 \, \text{g}$ para $\alpha = 0.01, 0.05, 0.1$.  
c) Si se desea un intervalo de confianza al 95% de longitud 1, calcular el tamaño de muestra necesario.  
d) Si la varianza poblacional es desconocida, pero la varianza muestral es $S^2 = 38.47 \, \text{g}^2$, calcular los intervalos de confianza al 90%, 95% y 99% para $\mu$.

#### **Desarrollo**

**Definiciones iniciales**  
Datos muestrales:  
$n = 16$ (tamaño de la muestra)  
$\bar{x} = 503 \, \text{g}$ (media muestral)  
$\sigma = 5 \, \text{g}$ (desviación típica poblacional, conocida para a, b, c)  
$S^2 = 38.47 \, \text{g}^2$ (varianza muestral, usada en d)  

---

**a) Intervalos de confianza al 90%, 95% y 99% para $\mu$ (con $\sigma$ conocida)**  

El intervalo de confianza para $\mu$ con $\sigma$ conocida se calcula como:  
$\bar{x} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$  

Error estándar: $\frac{\sigma}{\sqrt{n}} = \frac{5}{\sqrt{16}} = \frac{5}{4} = 1.25$  

Valores críticos de la distribución normal estándar $N(0, 1)$ (consultados en tablas):  
- Para 90% ($1 - \alpha = 0.90 \implies \alpha = 0.10 \implies \alpha/2 = 0.05$): $z_{0.05} \approx 1.645$  
- Para 95% ($1 - \alpha = 0.95 \implies \alpha = 0.05 \implies \alpha/2 = 0.025$): $z_{0.025} \approx 1.960$  
- Para 99% ($1 - \alpha = 0.99 \implies \alpha = 0.01 \implies \alpha/2 = 0.005$): $z_{0.005} \approx 2.576$  

Límites de los intervalos:  
- **90%**: $\bar{x} \pm z_{0.05} \cdot \frac{\sigma}{\sqrt{n}} = 503 \pm 1.645 \cdot 1.25 = 503 \pm 2.056 = [500.944, 505.056]$  
- **95%**: $\bar{x} \pm z_{0.025} \cdot \frac{\sigma}{\sqrt{n}} = 503 \pm 1.960 \cdot 1.25 = 503 \pm 2.450 = [500.550, 505.450]$  
- **99%**: $\bar{x} \pm z_{0.005} \cdot \frac{\sigma}{\sqrt{n}} = 503 \pm 2.576 \cdot 1.25 = 503 \pm 3.220 = [499.780, 506.220]$  

---

**b) Contraste de hipótesis para $\mu = 105$ con $\alpha = 0.01, 0.05, 0.1$**  

Se desea comprobar si el peso medio $\mu = 105 \, \text{g}$.  
Hipótesis:  
$H_0: \mu = 105$ (el peso medio es 105 g)  
$H_1: \mu \neq 105$ (el peso medio no es 105 g)  

Estadístico de prueba (con $\sigma$ conocida):  
$z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$  

Valor observado:  
$\mu_0 = 105$  
$z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}} = \frac{503 - 105}{1.25} = \frac{398}{1.25} = 318.4$  

Región crítica (bilateral, distribución $N(0, 1)$):  
- Para $\alpha = 0.01$: $z_{\alpha/2} = z_{0.005} \approx 2.576 \implies$ Rechazamos $H_0$ si $|z| > 2.576$  
- Para $\alpha = 0.05$: $z_{\alpha/2} = z_{0.025} \approx 1.960 \implies$ Rechazamos $H_0$ si $|z| > 1.960$  
- Para $\alpha = 0.1$: $z_{\alpha/2} = z_{0.05} \approx 1.645 \implies$ Rechazamos $H_0$ si $|z| > 1.645$  

Decisión:  
$|z| = 318.4 > 2.576, 1.960, 1.645 \implies$ Rechazamos $H_0$ en los tres niveles de significación.  

Conclusión: Se puede rechazar la hipótesis nula de que $\mu = 105 \, \text{g}$ para $\alpha = 0.01, 0.05, 0.1$.

---

**c) Tamaño de muestra para un intervalo de confianza al 95% de longitud 1**  

La longitud del intervalo de confianza al 95% es:  
$L = 2 \cdot z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$  

Se desea $L = 1$:  
$1 = 2 \cdot z_{0.025} \cdot \frac{\sigma}{\sqrt{n}}$  

Valor crítico: $z_{0.025} \approx 1.960$  
Despejamos $n$:  
$1 = 2 \cdot 1.960 \cdot \frac{5}{\sqrt{n}}$  
$\sqrt{n} = 2 \cdot 1.960 \cdot 5 = 19.60$  
$n = (19.60)^2 \approx 384.16$  

Como $n$ debe ser entero, tomamos el menor entero mayor o igual: $n = 385$.  

---

**d) Intervalos de confianza al 90%, 95% y 99% para $\mu$ (con $\sigma$ desconocida)**  

Dado que $\sigma$ es desconocida, usamos la distribución $t$ de Student con $n - 1 = 15$ grados de libertad.  
El intervalo de confianza se calcula como:  
$\bar{x} \pm t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}$  

Cuasidesviación típica muestral: $s = \sqrt{S^2} = \sqrt{38.47} \approx 6.202$  
Error estándar: $\frac{s}{\sqrt{n}} = \frac{6.202}{\sqrt{16}} = \frac{6.202}{4} \approx 1.551$  

Valores críticos de la distribución $t$ con 15 grados de libertad (consultados en tablas):  
- Para 90% ($1 - \alpha = 0.90 \implies \alpha = 0.10 \implies \alpha/2 = 0.05$): $t_{0.05, 15} \approx 1.753$  
- Para 95% ($1 - \alpha = 0.95 \implies \alpha = 0.05 \implies \alpha/2 = 0.025$): $t_{0.025, 15} \approx 2.131$  
- Para 99% ($1 - \alpha = 0.99 \implies \alpha = 0.01 \implies \alpha/2 = 0.005$): $t_{0.005, 15} \approx 2.947$  

Límites de los intervalos:  
- **90%**: $\bar{x} \pm t_{0.05, 15} \cdot \frac{s}{\sqrt{n}} = 503 \pm 1.753 \cdot 1.551 = 503 \pm 2.719 = [500.281, 505.719]$  
- **95%**: $\bar{x} \pm t_{0.025, 15} \cdot \frac{s}{\sqrt{n}} = 503 \pm 2.131 \cdot 1.551 = 503 \pm 3.305 = [499.695, 506.305]$  
- **99%**: $\bar{x} \pm t_{0.005, 15} \cdot \frac{s}{\sqrt{n}} = 503 \pm 2.947 \cdot 1.551 = 503 \pm 4.571 = [498.429, 507.571]$  

---

### Resultado final

a) Intervalos de confianza para $\mu$ (con $\sigma$ conocida):  
- 90%: $[500.944, 505.056]$  
- 95%: $[500.550, 505.450]$  
- 99%: $[499.780, 506.220]$  

b) Se rechaza la hipótesis nula $H_0: \mu = 105$ para $\alpha = 0.01, 0.05, 0.1$.  

c) Tamaño de muestra necesario para un intervalo de confianza al 95% de longitud 1: $n = 385$  

d) Intervalos de confianza para $\mu$ (con $\sigma$ desconocida):  
- 90%: $[500.281, 505.719]$  
- 95%: $[499.695, 506.305]$  
- 99%: $[498.429, 507.571]$
{{% /details %}}

## Exercicio 3
{{% details title="Exercicio 3 paso a paso" closed="true" %}}
### Intervalo de confianza y contraste de hipótesis para la varianza de una distribución normal

#### **Enunciado**

El diámetro de una pieza del motor sigue una distribución normal $X \sim N(\mu, \sigma^2)$, con $\mu$ y $\sigma^2$ desconocidos. Se tiene una muestra de 12 piezas con varianza muestral $s^2 = 0.05$.  
a) Obtener un intervalo de confianza al 99% para la varianza $\sigma^2$.  
b) Determinar si se puede asumir que la varianza $\sigma^2 \leq 0.01$.

#### **Desarrollo**

**Definiciones iniciales**  
Datos muestrales:  
$n = 12$ (tamaño de la muestra)  
$s^2 = 0.05$ (varianza muestral)  

Dado que $\sigma^2$ es desconocida, usamos la distribución $\chi^2$ (chi-cuadrado) con $n - 1 = 11$ grados de libertad para los cálculos relacionados con la varianza.

---

**a) Intervalo de confianza al 99% para la varianza $\sigma^2$**  

El intervalo de confianza para $\sigma^2$ se calcula como:  
$\frac{(n - 1) s^2}{\chi^2_{\alpha/2, n-1}} \leq \sigma^2 \leq \frac{(n - 1) s^2}{\chi^2_{1 - \alpha/2, n-1}}$  

Nivel de confianza: $1 - \alpha = 0.99 \implies \alpha = 0.01 \implies \alpha/2 = 0.005$  
Valores críticos de la distribución $\chi^2$ con 11 grados de libertad (consultados en tablas):  
- $\chi^2_{1 - \alpha/2, n-1} = \chi^2_{0.995, 11} \approx 1.735$  
- $\chi^2_{\alpha/2, n-1} = \chi^2_{0.005, 11} \approx 26.757$  

Cálculo de $(n - 1) s^2$:  
$(n - 1) s^2 = 11 \cdot 0.05 = 0.55$  

Límites del intervalo:  
$\frac{(n - 1) s^2}{\chi^2_{\alpha/2, n-1}} \leq \sigma^2 \leq \frac{(n - 1) s^2}{\chi^2_{1 - \alpha/2, n-1}}$  
$\phantom{\frac{(n - 1) s^2}{\chi^2_{\alpha/2, n-1}}} = \frac{0.55}{26.757} \leq \sigma^2 \leq \frac{0.55}{1.735}$  
$\phantom{\frac{(n - 1) s^2}{\chi^2_{\alpha/2, n-1}}} \approx 0.0206 \leq \sigma^2 \leq 0.3170$  

---

**b) Contraste de hipótesis para $\sigma^2 \leq 0.01$**  

Se desea comprobar si se puede asumir que $\sigma^2 \leq 0.01$. Esto implica un contraste de hipótesis unilateral.  
Hipótesis:  
$H_0: \sigma^2 \leq 0.01$ (la varianza es a lo sumo 0.01)  
$H_1: \sigma^2 > 0.01$ (la varianza es mayor a 0.01)  

Estadístico de prueba:  
$\chi^2 = \frac{(n - 1) s^2}{\sigma_0^2}$  

Valor observado:  
$\sigma_0^2 = 0.01$  
$\chi^2 = \frac{(n - 1) s^2}{\sigma_0^2} = \frac{11 \cdot 0.05}{0.01} = \frac{0.55}{0.01} = 55$  

Región crítica (unilateral a la derecha, $\alpha$, $n - 1 = 11$ grados de libertad):  
Consideramos los niveles de significación habituales $\alpha = 0.05$ y $\alpha = 0.01$ (consultados en tablas de $\chi^2$):  
- Para $\alpha = 0.05$: $\chi^2_{\alpha, n-1} = \chi^2_{0.05, 11} \approx 19.675$  
- Para $\alpha = 0.01$: $\chi^2_{\alpha, n-1} = \chi^2_{0.01, 11} \approx 24.725$  

Rechazamos $H_0$ si $\chi^2 > \chi^2_{\alpha, n-1}$.  

Decisión:  
- Para $\alpha = 0.05$: $\chi^2 = 55 > 19.675 \implies$ Rechazamos $H_0$.  
- Para $\alpha = 0.01$: $\chi^2 = 55 > 24.725 \implies$ Rechazamos $H_0$.  

Conclusión: No se puede asumir que $\sigma^2 \leq 0.01$, ya que hay evidencia suficiente para rechazar $H_0$ en ambos niveles de significación ($\alpha = 0.05$ y $\alpha = 0.01$).

---

### Resultado final

a) El intervalo de confianza al 99% para la varianza $\sigma^2$ es:  
$[0.0206, 0.3170]$  

b) No se puede asumir que la varianza $\sigma^2 \leq 0.01$, ya que se rechaza $H_0: \sigma^2 \leq 0.01$ para $\alpha = 0.05$ y $\alpha = 0.01$.
{{% /details %}}

## Exercicio 4
{{% details title="Exercicio 4 paso a paso" closed="true" %}}
### Intervalos de confianza y contraste de hipótesis para proporciones

#### **Enunciado**

En una encuesta a 50 potenciales clientes que se han descargado la demo de un videojuego, el 76% estarían dispuestos a comprarlo.  
a) Determinar, con un 95% de probabilidad, entre qué valores se encuentra la proporción real de posibles compradores.  
b) Calcular el tamaño muestral necesario para que la longitud del intervalo de confianza sea menor que 2 centésimas.  
c) Determinar si se puede demostrar que más del 50% de los usuarios que prueban la demo están dispuestos a comprarla.

#### **Desarrollo**

**Definiciones iniciales**  
Datos muestrales:  
$n = 50$ (tamaño de la muestra)  
$\hat{p} = 0.76$ (proporción muestral)  

La proporción real de posibles compradores $p$ se estima mediante un intervalo de confianza basado en la distribución normal, ya que $n$ es suficientemente grande y se cumplen las condiciones para la aproximación normal:  
$n \hat{p} = 50 \cdot 0.76 = 38 > 5$  
$n (1 - \hat{p}) = 50 \cdot 0.24 = 12 > 5$  

---

**a) Intervalo de confianza al 95% para la proporción $p$**  

El intervalo de confianza para $p$ se calcula como:  
$\hat{p} \pm z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}$  

Nivel de confianza: $1 - \alpha = 0.95 \implies \alpha = 0.05 \implies \alpha/2 = 0.025$  
Valor crítico de la distribución normal estándar $N(0, 1)$: $z_{0.025} \approx 1.960$ (consultado en tablas)  

Error estándar:  
$\sqrt{\frac{\hat{p} (1 - \hat{p})}{n}} = \sqrt{\frac{0.76 \cdot 0.24}{50}} = \sqrt{\frac{0.1824}{50}} = \sqrt{0.003648} \approx 0.0604$  

Límites del intervalo:  
$\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}} \leq p \leq \hat{p} + z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}$  
$\phantom{\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}} = 0.76 - 1.960 \cdot 0.0604 \leq p \leq 0.76 + 1.960 \cdot 0.0604$  
$\phantom{\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}} = 0.76 - 0.1184 \leq p \leq 0.76 + 0.1184$  
$\phantom{\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}} = 0.6416 \leq p \leq 0.8784$  

---

**b) Tamaño muestral para un intervalo de confianza de longitud menor a 2 centésimas**  

La longitud del intervalo de confianza es:  
$L = 2 \cdot z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}$  

Se desea $L < 0.02$:  
$2 \cdot z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}} < 0.02$  

Nivel de confianza: $1 - \alpha = 0.95 \implies z_{0.025} \approx 1.960$  
Usamos $\hat{p} = 0.76$ como estimación de $p$:  
$\hat{p} (1 - \hat{p}) = 0.76 \cdot 0.24 = 0.1824$  

Despejamos $n$:  
$2 \cdot 1.960 \cdot \sqrt{\frac{0.1824}{n}} < 0.02$  
$\sqrt{\frac{0.1824}{n}} < \frac{0.02}{2 \cdot 1.960}$  
$\sqrt{\frac{0.1824}{n}} < \frac{0.02}{3.920} \approx 0.005102$  
$\frac{0.1824}{n} < (0.005102)^2 \approx 0.00002603$  
$n > \frac{0.1824}{0.00002603} \approx 7008.45$  

Como $n$ debe ser entero, tomamos el menor entero mayor o igual: $n = 7009$.  

---

**c) Contraste de hipótesis para $p > 0.5$**  

Se desea comprobar si más del 50% de los usuarios están dispuestos a comprar.  
Hipótesis:  
$H_0: p \leq 0.5$ (la proporción es a lo sumo 0.5)  
$H_1: p > 0.5$ (la proporción es mayor a 0.5)  

Estadístico de prueba:  
$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 (1 - p_0)}{n}}}$  

Valor observado:  
$p_0 = 0.5$  
$\sqrt{\frac{p_0 (1 - p_0)}{n}} = \sqrt{\frac{0.5 \cdot 0.5}{50}} = \sqrt{\frac{0.25}{50}} = \sqrt{0.005} \approx 0.0707$  
$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 (1 - p_0)}{n}}} = \frac{0.76 - 0.5}{0.0707} \approx \frac{0.26}{0.0707} \approx 3.677$  

Región crítica (unilateral a la derecha, distribución $N(0, 1)$):  
Consideramos los niveles de significación habituales $\alpha = 0.05$ y $\alpha = 0.01$ (consultados en tablas de $N(0, 1)$):  
- Para $\alpha = 0.05$: $z_{\alpha} = z_{0.05} \approx 1.645$  
- Para $\alpha = 0.01$: $z_{\alpha} = z_{0.01} \approx 2.326$  

Rechazamos $H_0$ si $z > z_{\alpha}$.  

Decisión:  
- Para $\alpha = 0.05$: $z = 3.677 > 1.645 \implies$ Rechazamos $H_0$.  
- Para $\alpha = 0.01$: $z = 3.677 > 2.326 \implies$ Rechazamos $H_0$.  

Conclusión: Sí se puede demostrar que más del 50% de los usuarios están dispuestos a comprar, ya que hay evidencia suficiente para rechazar $H_0$ en ambos niveles de significación ($\alpha = 0.05$ y $\alpha = 0.01$).

---

### Resultado final

a) El intervalo de confianza al 95% para la proporción $p$ es:  
$[0.6416, 0.8784]$  

b) El tamaño muestral necesario para que la longitud del intervalo sea menor a 2 centésimas es:  
$n = 7009$  

c) Sí se puede demostrar que más del 50% de los usuarios están dispuestos a comprar, ya que se rechaza $H_0: p \leq 0.5$ para $\alpha = 0.05$ y $\alpha = 0.01$.
{{% /details %}}

## Exercicio 5
{{% details title="Exercicio 5 paso a paso" closed="true" %}}
### Contraste de hipótesis e intervalo de confianza para proporciones

#### **Enunciado**

En un estudio, se afirma que el 70% de los titulados universitarios encuentran trabajo relacionado con su titulación. En una muestra de 500 titulados, 400 afirman tener un trabajo relacionado.  
a) Con un nivel de significación del 5%, determinar si hay evidencias suficientes para rechazar la hipótesis de que el 70% trabaja en algo relacionado.  
b) Obtener un intervalo de confianza al 99% para la proporción teórica de titulados que tienen trabajo relacionado con sus estudios.

#### **Desarrollo**

**Definiciones iniciales**  
Datos muestrales:  
$n = 500$ (tamaño de la muestra)  
$x = 400$ (número de titulados con trabajo relacionado)  
$\hat{p} = \frac{x}{n} = \frac{400}{500} = 0.8$ (proporción muestral)  

La proporción teórica $p$ se estima mediante un intervalo de confianza o se contrasta mediante hipótesis, usando la distribución normal, ya que $n$ es suficientemente grande y se cumplen las condiciones para la aproximación normal:  
$n \hat{p} = 500 \cdot 0.8 = 400 > 5$  
$n (1 - \hat{p}) = 500 \cdot 0.2 = 100 > 5$  

---

**a) Contraste de hipótesis con $\alpha = 0.05$**  

Se desea comprobar si la proporción teórica $p = 0.7$.  
Hipótesis:  
$H_0: p = 0.7$ (la proporción es 0.7)  
$H_1: p \neq 0.7$ (la proporción no es 0.7)  

Estadístico de prueba:  
$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 (1 - p_0)}{n}}}$  

Valor observado:  
$p_0 = 0.7$  
$\sqrt{\frac{p_0 (1 - p_0)}{n}} = \sqrt{\frac{0.7 \cdot 0.3}{500}} = \sqrt{\frac{0.21}{500}} = \sqrt{0.00042} \approx 0.0205$  
$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 (1 - p_0)}{n}}} = \frac{0.8 - 0.7}{0.0205} \approx \frac{0.1}{0.0205} \approx 4.878$  

Región crítica (bilateral, distribución $N(0, 1)$, $\alpha = 0.05$):  
$z_{\alpha/2} = z_{0.025} \approx 1.960$ (consultado en tablas de $N(0, 1)$)  
Rechazamos $H_0$ si $|z| > z_{\alpha/2}$, es decir, si $z < -1.960$ o $z > 1.960$.  

Decisión:  
$|z| = 4.878 > 1.960 \implies$ Rechazamos $H_0$.  

Conclusión: Con un nivel de significación del 5%, hay evidencias suficientes para rechazar la hipótesis de que el 70% de los titulados trabaja en algo relacionado con su titulación.

---

**b) Intervalo de confianza al 99% para la proporción $p$**  

El intervalo de confianza para $p$ se calcula como:  
$\hat{p} \pm z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}$  

Nivel de confianza: $1 - \alpha = 0.99 \implies \alpha = 0.01 \implies \alpha/2 = 0.005$  
Valor crítico de la distribución normal estándar $N(0, 1)$: $z_{0.005} \approx 2.576$ (consultado en tablas)  

Error estándar:  
$\sqrt{\frac{\hat{p} (1 - \hat{p})}{n}} = \sqrt{\frac{0.8 \cdot 0.2}{500}} = \sqrt{\frac{0.16}{500}} = \sqrt{0.00032} \approx 0.0179$  

Límites del intervalo:  
$\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}} \leq p \leq \hat{p} + z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}$  
$\phantom{\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}} = 0.8 - 2.576 \cdot 0.0179 \leq p \leq 0.8 + 2.576 \cdot 0.0179$  
$\phantom{\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}} = 0.8 - 0.0461 \leq p \leq 0.8 + 0.0461$  
$\phantom{\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}} = 0.7539 \leq p \leq 0.8461$  

---

### Resultado final

a) Con un nivel de significación del 5%, hay evidencias suficientes para rechazar la hipótesis de que el 70% de los titulados trabaja en algo relacionado con su titulación.  

b) El intervalo de confianza al 99% para la proporción $p$ es:  
$[0.7539, 0.8461]$
{{% /details %}}

## Exercicio 6
{{% details title="Exercicio 6 paso a paso" closed="true" %}}
### Contraste de hipótesis para la media de una distribución normal

#### **Enunciado**

El tiempo de realización de una prueba sigue una distribución normal $X \sim N(\mu, \sigma^2)$. Se estima que el tiempo medio es de 30 minutos, con una desviación típica poblacional de 5 minutos. En una muestra de 36 alumnos, el tiempo medio fue de 35 minutos.  
a) Con un nivel de significación del 5%, determinar si era incorrecta la planificación del tiempo medio.  
b) Si la desviación típica poblacional es desconocida y la desviación típica muestral es de 7 minutos, determinar si podemos considerar incorrecta la planificación.

#### **Desarrollo**

**Definiciones iniciales**  
Datos muestrales:  
$n = 36$ (tamaño de la muestra)  
$\bar{x} = 35$ (media muestral, en minutos)  
$\sigma = 5$ (desviación típica poblacional, conocida para a, en minutos)  
$s = 7$ (desviación típica muestral, usada en b, en minutos)  

---

**a) Contraste de hipótesis con $\alpha = 0.05$ (con $\sigma$ conocida)**  

Se desea comprobar si la planificación del tiempo medio $\mu = 30$ minutos era correcta.  
Hipótesis:  
$H_0: \mu = 30$ (el tiempo medio es 30 minutos)  
$H_1: \mu \neq 30$ (el tiempo medio no es 30 minutos)  

Estadístico de prueba (con $\sigma$ conocida):  
$z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$  

Valor observado:  
$\mu_0 = 30$  
$\sigma / \sqrt{n} = 5 / \sqrt{36} = 5 / 6 \approx 0.8333$  
$z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}} = \frac{35 - 30}{0.8333} \approx \frac{5}{0.8333} \approx 6.000$  

Región crítica (bilateral, distribución $N(0, 1)$, $\alpha = 0.05$):  
$z_{\alpha/2} = z_{0.025} \approx 1.960$ (consultado en tablas de $N(0, 1)$)  
Rechazamos $H_0$ si $|z| > z_{\alpha/2}$, es decir, si $z < -1.960$ o $z > 1.960$.  

Decisión:  
$|z| = 6.000 > 1.960 \implies$ Rechazamos $H_0$.  

Conclusión: Con un nivel de significación del 5%, hay evidencias suficientes para considerar que la planificación del tiempo medio de 30 minutos era incorrecta.

---

**b) Contraste de hipótesis con $\alpha = 0.05$ (con $\sigma$ desconocida)**  

Se desea comprobar si la planificación del tiempo medio $\mu = 30$ minutos era correcta, pero ahora $\sigma$ es desconocida y se usa la desviación típica muestral $s$.  
Hipótesis:  
$H_0: \mu = 30$ (el tiempo medio es 30 minutos)  
$H_1: \mu \neq 30$ (el tiempo medio no es 30 minutos)  

Estadístico de prueba (con $\sigma$ desconocida):  
$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$  

Valor observado:  
$\mu_0 = 30$  
$s / \sqrt{n} = 7 / \sqrt{36} = 7 / 6 \approx 1.1667$  
$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} = \frac{35 - 30}{1.1667} \approx \frac{5}{1.1667} \approx 4.286$  

Región crítica (bilateral, distribución $t$ de Student con $n - 1 = 35$ grados de libertad, $\alpha = 0.05$):  
$t_{\alpha/2, n-1} = t_{0.025, 35} \approx 2.030$ (consultado en tablas de $t$ de Student)  
Rechazamos $H_0$ si $|t| > t_{\alpha/2, n-1}$, es decir, si $t < -2.030$ o $t > 2.030$.  

Decisión:  
$|t| = 4.286 > 2.030 \implies$ Rechazamos $H_0$.  

Conclusión: Con un nivel de significación del 5%, hay evidencias suficientes para considerar que la planificación del tiempo medio de 30 minutos era incorrecta, incluso cuando la desviación típica poblacional es desconocida.

---

### Resultado final

a) Con un nivel de significación del 5%, hay evidencias suficientes para considerar que la planificación del tiempo medio de 30 minutos era incorrecta (con $\sigma$ conocida).  

b) Con un nivel de significación del 5%, hay evidencias suficientes para considerar que la planificación del tiempo medio de 30 minutos era incorrecta (con $\sigma$ desconocida).
{{% /details %}}

## Exercicio 7
{{% details title="Exercicio 7 paso a paso" closed="true" %}}
### Intervalo de confianza y contraste de hipótesis para proporciones

#### **Enunciado**

En un proceso de depuración de bases de datos de la Agencia Tributaria, se revisaron 500 registros y se detectaron 35 con DNI erróneo.  
a) Obtener un intervalo de confianza al 95% para la proporción de DNIs erróneos e interpretar el resultado.  
b) Determinar, con un nivel de significación del 5%, si podemos confiar en la afirmación del responsable de que el porcentaje de DNIs erróneos es inferior al 4%.

#### **Desarrollo**

**Definiciones iniciales**  
Datos muestrales:  
$n = 500$ (tamaño de la muestra)  
$x = 35$ (número de registros con DNI erróneo)  
$\hat{p} = \frac{x}{n} = \frac{35}{500} = 0.07$ (proporción muestral)  

La proporción teórica $p$ de DNIs erróneos se estima mediante un intervalo de confianza o se contrasta mediante hipótesis, usando la distribución normal, ya que $n$ es suficientemente grande y se cumplen las condiciones para la aproximación normal:  
$n \hat{p} = 500 \cdot 0.07 = 35 > 5$  
$n (1 - \hat{p}) = 500 \cdot 0.93 = 465 > 5$  

---

**a) Intervalo de confianza al 95% para la proporción $p$**  

El intervalo de confianza para $p$ se calcula como:  
$\hat{p} \pm z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}$  

Nivel de confianza: $1 - \alpha = 0.95 \implies \alpha = 0.05 \implies \alpha/2 = 0.025$  
Valor crítico de la distribución normal estándar $N(0, 1)$: $z_{0.025} \approx 1.960$ (consultado en tablas)  

Error estándar:  
$\sqrt{\frac{\hat{p} (1 - \hat{p})}{n}} = \sqrt{\frac{0.07 \cdot 0.93}{500}} = \sqrt{\frac{0.0651}{500}} = \sqrt{0.0001302} \approx 0.01141$  

Límites del intervalo:  
$\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}} \leq p \leq \hat{p} + z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}$  
$\phantom{\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}} = 0.07 - 1.960 \cdot 0.01141 \leq p \leq 0.07 + 1.960 \cdot 0.01141$  
$\phantom{\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}} = 0.07 - 0.02236 \leq p \leq 0.07 + 0.02236$  
$\phantom{\hat{p} - z_{\alpha/2} \cdot \sqrt{\frac{\hat{p} (1 - \hat{p})}{n}}} = 0.04764 \leq p \leq 0.09236$  

Interpretación: Con un 95% de confianza, la proporción real de DNIs erróneos en las bases de datos de la Agencia Tributaria se encuentra entre el 4.764% y el 9.236%.

---

**b) Contraste de hipótesis con $\alpha = 0.05$**  

El responsable afirma que la proporción de DNIs erróneos es inferior al 4% ($p < 0.04$). Se desea comprobar si podemos confiar en esta afirmación, lo que implica un contraste de hipótesis unilateral.  
Hipótesis:  
$H_0: p \geq 0.04$ (la proporción es al menos 0.04)  
$H_1: p < 0.04$ (la proporción es inferior a 0.04)  

Estadístico de prueba:  
$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 (1 - p_0)}{n}}}$  

Valor observado:  
$p_0 = 0.04$  
$\sqrt{\frac{p_0 (1 - p_0)}{n}} = \sqrt{\frac{0.04 \cdot 0.96}{500}} = \sqrt{\frac{0.0384}{500}} = \sqrt{0.0000768} \approx 0.00876$  
$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 (1 - p_0)}{n}}} = \frac{0.07 - 0.04}{0.00876} \approx \frac{0.03}{0.00876} \approx 3.425$  

Región crítica (unilateral a la izquierda, distribución $N(0, 1)$, $\alpha = 0.05$):  
$z_{\alpha} = z_{0.05} \approx -1.645$ (consultado en tablas de $N(0, 1)$)  
Rechazamos $H_0$ si $z < -z_{\alpha}$, es decir, si $z < -1.645$.  

Decisión:  
$z = 3.425 > -1.645 \implies$ No rechazamos $H_0$.  

Conclusión: Con un nivel de significación del 5%, no hay evidencias suficientes para confiar en la afirmación del responsable de que la proporción de DNIs erróneos es inferior al 4%.

---

### Resultado final

a) El intervalo de confianza al 95% para la proporción $p$ de DNIs erróneos es:  
$[0.04764, 0.09236]$  
Interpretación: Con un 95% de confianza, la proporción real de DNIs erróneos en las bases de datos de la Agencia Tributaria se encuentra entre el 4.764% y el 9.236%.  

b) Con un nivel de significación del 5%, no hay evidencias suficientes para confiar en la afirmación del responsable de que la proporción de DNIs erróneos es inferior al 4%.
{{% /details %}}

## Exercicio 8
{{% details title="Exercicio 8 paso a paso" closed="true" %}}
### Contraste de hipótesis para la diferencia de medias de distribuciones normales

#### **Enunciado**

En un grupo de 100 alumnos de Estadística, 60 practican deporte y tienen una altura media de 1.80 m, mientras que 40 no practican deporte y tienen una altura media de 1.76 m. Se supone que la altura sigue una distribución normal.  
a) Si las varianzas poblacionales son $\sigma_x^2 = 0.02$ para el grupo que practica deporte y $\sigma_y^2 = 0.015$ para el grupo que no practica, determinar, con un nivel de significación del 5%, si los alumnos que practican deporte son más altos.  
b) Si las varianzas poblacionales son desconocidas, pero las desviaciones típicas muestrales son 0.08 m y 0.10 m respectivamente, determinar, con un nivel de significación del 5%, si los alumnos que practican deporte son más altos.

#### **Desarrollo**

**Definiciones iniciales**  
Datos muestrales:  
- Grupo 1 (practican deporte): $n_x = 60$, $\bar{x} = 1.80 \, \text{m}$, $\sigma_x^2 = 0.02$ (en a), $s_x = 0.08 \, \text{m}$ (en b)  
- Grupo 2 (no practican deporte): $n_y = 40$, $\bar{y} = 1.76 \, \text{m}$, $\sigma_y^2 = 0.015$ (en a), $s_y = 0.10 \, \text{m}$ (en b)  

Se desea contrastar si la media de altura del grupo que practica deporte ($\mu_x$) es mayor que la del grupo que no practica ($\mu_y$), es decir, si $\mu_x > \mu_y$.

---

**a) Contraste de hipótesis con $\alpha = 0.05$ (con varianzas conocidas)**  

Hipótesis:  
$H_0: \mu_x - \mu_y \leq 0$ (la altura media de los que practican deporte no es mayor)  
$H_1: \mu_x - \mu_y > 0$ (la altura media de los que practican deporte es mayor)  

Estadístico de prueba (con varianzas conocidas):  
$z = \frac{(\bar{x} - \bar{y}) - (\mu_x - \mu_y)_0}{\sqrt{\frac{\sigma_x^2}{n_x} + \frac{\sigma_y^2}{n_y}}}$  

Valor observado:  
$(\mu_x - \mu_y)_0 = 0$ (bajo $H_0$)
<br>

$\sqrt{\frac{\sigma_x^2}{n_x} + \frac{\sigma_y^2}{n_y}} = \sqrt{\frac{0.02}{60} + \frac{0.015}{40}} = \sqrt{\frac{0.02}{60} + \frac{0.015}{40}} = \sqrt{0.0003333 + 0.000375} = \sqrt{0.0007083} \approx 0.02661$  
<br>

$z = \frac{(\bar{x} - \bar{y}) - (\mu_x - \mu_y)_0}{\sqrt{\frac{\sigma_x^2}{n_x} + \frac{\sigma_y^2}{n_y}}} = \frac{(1.80 - 1.76) - 0}{0.02661} \approx \frac{0.04}{0.02661} \approx 1.503$  

Región crítica (unilateral a la derecha, distribución $N(0, 1)$, $\alpha = 0.05$):  
$z_{\alpha} = z_{0.05} \approx 1.645$ (consultado en tablas de $N(0, 1)$)  
Rechazamos $H_0$ si $z > z_{\alpha}$, es decir, si $z > 1.645$.  

Decisión:  
$z = 1.503 < 1.645 \implies$ No rechazamos $H_0$.  

Conclusión: Con un nivel de significación del 5%, no hay evidencias suficientes para afirmar que los alumnos que practican deporte son más altos, cuando las varianzas poblacionales son conocidas.

---

**b) Contraste de hipótesis con $\alpha = 0.05$ (con varianzas desconocidas)**  

Dado que las varianzas poblacionales son desconocidas, usamos las varianzas muestrales $s_x^2$ y $s_y^2$. Además, como no se especifica que las varianzas poblacionales sean iguales, usamos la aproximación de Welch para dos muestras independientes con varianzas desconocidas y posiblemente diferentes.  

Hipótesis:  
$H_0: \mu_x - \mu_y \leq 0$ (la altura media de los que practican deporte no es mayor)  
$H_1: \mu_x - \mu_y > 0$ (la altura media de los que practican deporte es mayor)  

Estadístico de prueba (con varianzas desconocidas):  
$t = \frac{(\bar{x} - \bar{y}) - (\mu_x - \mu_y)_0}{\sqrt{\frac{s_x^2}{n_x} + \frac{s_y^2}{n_y}}}$  

Valor observado:  
$(\mu_x - \mu_y)_0 = 0$ (bajo $H_0$)  
$s_x = 0.08 \implies s_x^2 = (0.08)^2 = 0.0064$  
$s_y = 0.10 \implies s_y^2 = (0.10)^2 = 0.01$  
$\sqrt{\frac{s_x^2}{n_x} + \frac{s_y^2}{n_y}} = \sqrt{\frac{0.0064}{60} + \frac{0.01}{40}} = \sqrt{0.0001067 + 0.00025} = \sqrt{0.0003567} \approx 0.01889$  
$t = \frac{(\bar{x} - \bar{y}) - (\mu_x - \mu_y)_0}{\sqrt{\frac{s_x^2}{n_x} + \frac{s_y^2}{n_y}}} = \frac{(1.80 - 1.76) - 0}{0.01889} \approx \frac{0.04}{0.01889} \approx 2.117$  

Grados de libertad (aproximación de Welch):  
$$
\begin{align*}
\nu &= \frac{\left( \frac{s_x^2}{n_x} + \frac{s_y^2}{n_y} \right)^2}{\frac{\left( \frac{s_x^2}{n_x} \right)^2}{n_x - 1} + \frac{\left( \frac{s_y^2}{n_y} \right)^2}{n_y - 1}} \\
&= \frac{\left( \frac{0.0064}{60} + \frac{0.01}{40} \right)^2}{\frac{\left( \frac{0.0064}{60} \right)^2}{59} + \frac{\left( \frac{0.01}{40} \right)^2}{39}} \\
&= \frac{(0.0001067 + 0.00025)^2}{\frac{(0.0001067)^2}{59} + \frac{(0.00025)^2}{39}} \\
&= \frac{(0.0003567)^2}{\frac{0.00001138}{59} + \frac{0.0000625}{39}} \\
&= \frac{0.0001272}{0.000000193 + 0.000001602} \approx \frac{0.0001272}{0.000001795} \approx 70.86
\end{align*}
$$

Tomamos $\nu \approx 71$ (redondeamos al entero más cercano para consultar tablas de $t$).  

Región crítica (unilateral a la derecha, distribución $t$ de Student con $\nu \approx 71$ grados de libertad, $\alpha = 0.05$):  
$t_{\alpha, \nu} = t_{0.05, 71} \approx 1.667$ (consultado en tablas de $t$ de Student, interpolando entre $\nu = 60$ y $\nu = 120$)  
Rechazamos $H_0$ si $t > t_{\alpha, \nu}$, es decir, si $t > 1.667$.  

Decisión:  
$t = 2.117 > 1.667 \implies$ Rechazamos $H_0$.  

Conclusión: Con un nivel de significación del 5%, hay evidencias suficientes para afirmar que los alumnos que practican deporte son más altos, cuando las varianzas poblacionales son desconocidas.

---

### Resultado final

a) Con un nivel de significación del 5%, no hay evidencias suficientes para afirmar que los alumnos que practican deporte son más altos (con varianzas conocidas).  

b) Con un nivel de significación del 5%, hay evidencias suficientes para afirmar que los alumnos que practican deporte son más altos (con varianzas desconocidas).
{{% /details %}}

## Exercicio 9
{{% details title="Exercicio 9 paso a paso" closed="true" %}}
### Contraste de hipótesis para la diferencia de proporciones

#### **Enunciado**

Un investigador quiere estudiar si la proporción de delincuentes juveniles que llevan gafas es diferente de la proporción de chicos no delincuentes con gafas. Los datos se presentan en una tabla. Con un nivel de significación del 5%, determinar si se puede afirmar que la proporción de no delincuentes con gafas es mayor que la de delincuentes.  

Tabla:  

|                        | Con gafas | Sin gafas | Total |
|------------------------|-----------|-----------|-------|
| Delincuente juvenil    | 1         | 8         | 9     |
| No delincuente juvenil | 5         | 2         | 7     |
| Total                  | 6         | 10        | 16    |

#### **Desarrollo**

**Definiciones iniciales**  
Datos muestrales:  
- Delincuentes juveniles: $n_x = 9$, $x = 1$ (con gafas), $\hat{p}_x = \frac{x}{n_x} = \frac{1}{9} \approx 0.1111$  
- No delincuentes juveniles: $n_y = 7$, $y = 5$ (con gafas), $\hat{p}_y = \frac{y}{n_y} = \frac{5}{7} \approx 0.7143$  

Se desea contrastar si la proporción de no delincuentes con gafas ($p_y$) es mayor que la proporción de delincuentes con gafas ($p_x$), es decir, si $p_y > p_x$.  

Dado que los tamaños muestrales son pequeños, no se cumple la condición para la aproximación normal ($n \hat{p}$ y $n (1 - \hat{p})$ deben ser mayores a 5 en ambas muestras). Por lo tanto, usamos el test exacto de Fisher para comparar proporciones en tablas de contingencia 2x2, ya que es adecuado para muestras pequeñas.

---

**a) Contraste de hipótesis con $\alpha = 0.05$ (test exacto de Fisher)**  

Hipótesis:  
$H_0: p_x = p_y$ (las proporciones de delincuentes y no delincuentes con gafas son iguales)  
$H_1: p_x < p_y$ (la proporción de no delincuentes con gafas es mayor que la de delincuentes)  

El test exacto de Fisher calcula la probabilidad de obtener la tabla observada o una más extrema bajo $H_0$, considerando la distribución hipergeométrica. La tabla observada es:  

|                  | Con gafas | Sin gafas | Total |
|------------------|-----------|-----------|-------|
| Delincuente      | 1         | 8         | 9     |
| No delincuente   | 5         | 2         | 7     |
| Total            | 6         | 10        | 16    |

Para un test unilateral a la derecha (queremos probar si $p_y > p_x$), calculamos el valor $p$ como la suma de las probabilidades de las tablas tan o más extremas que la observada en la dirección de $H_1$. Las tablas posibles mantienen los totales marginales (6 con gafas, 10 sin gafas, 9 delincuentes, 7 no delincuentes).  

La probabilidad de una tabla específica se calcula con la distribución hipergeométrica:  
$P(\text{tabla}) = \frac{\binom{a+b}{a} \binom{c+d}{c}}{\binom{n}{a+c}} = \frac{\binom{9}{a} \binom{7}{c}}{\binom{16}{6}}$  
donde:  
- $a$ es el número de delincuentes con gafas,  
- $b$ es el número de delincuentes sin gafas,  
- $c$ es el número de no delincuentes con gafas,  
- $d$ es el número de no delincuentes sin gafas,  
- $a + b = 9$, $c + d = 7$, $a + c = 6$, $b + d = 10$, $n = 16$.  

La tabla observada tiene $a = 1$, $c = 5$. Las tablas posibles que son tan o más extremas en la dirección de $H_1$ (es decir, que favorecen una mayor proporción de no delincuentes con gafas, lo que implica reducir $a$ y aumentar $c$) son:  

1. **Tabla observada**: $a = 1$, $c = 5$  
   |                  | Con gafas | Sin gafas | Total |
   |------------------|-----------|-----------|-------|
   | Delincuente      | 1         | 8         | 9     |
   | No delincuente   | 5         | 2         | 7     |
   | Total            | 6         | 10        | 16    |
   $P(\text{tabla observada}) = \frac{\binom{9}{1} \binom{7}{5}}{\binom{16}{6}} = \frac{\frac{9!}{1!8!} \cdot \frac{7!}{5!2!}}{\frac{16!}{6!10!}} = \frac{9 \cdot 21}{8008} \approx 0.0236$  

2. **Tabla más extrema**: $a = 0$, $c = 6$  
   |                  | Con gafas | Sin gafas | Total |
   |------------------|-----------|-----------|-------|
   | Delincuente      | 0         | 9         | 9     |
   | No delincuente   | 6         | 1         | 7     |
   | Total            | 6         | 10        | 16    |
   $P(\text{tabla más extrema}) = \frac{\binom{9}{0} \binom{7}{6}}{\binom{16}{6}} = \frac{\frac{9!}{0!9!} \cdot \frac{7!}{6!1!}}{\frac{16!}{6!10!}} = \frac{1 \cdot 7}{8008} \approx 0.0009$  

El valor $p$ del test exacto de Fisher (unilateral a la derecha) es la suma de las probabilidades de estas tablas:  
$p\text{-value} = P(\text{tabla observada}) + P(\text{tabla más extrema}) = 0.0236 + 0.0009 = 0.0245$  

Región crítica (unilateral, $\alpha = 0.05$):  
Rechazamos $H_0$ si $p\text{-value} < \alpha$, es decir, si $p\text{-value} < 0.05$.  

Decisión:  
$p\text{-value} = 0.0245 < 0.05 \implies$ Rechazamos $H_0$.  

Conclusión: Con un nivel de significación del 5%, hay evidencias suficientes para afirmar que la proporción de no delincuentes con gafas es mayor que la de delincuentes.

---

### Resultado final

a) Con un nivel de significación del 5%, hay evidencias suficientes para afirmar que la proporción de no delincuentes con gafas es mayor que la de delincuentes ($p\text{-value} = 0.0245 < 0.05$).
{{% /details %}}

## Exercicio 10
{{% details title="Exercicio 10 paso a paso" closed="true" %}}
### a) Intervalo de confianza para la media de una distribución normal

#### **Enunciado**

En una encuesta a 50 alumnos/as de primer curso del GrIA, se deduce que han dedicado al estudio una media de 10.5 horas diarias durante el mes de mayo, con una cuasidesviación típica de 3.25 horas.  
a) Suponiendo que el tiempo dedicado al estudio sigue una distribución normal, calcular un intervalo de confianza al 99% para el tiempo medio diario de horas dedicadas al estudio.
En otra encuesta a 100 alumnos/as de otras titulaciones, se obtiene que el tiempo medio dedicado es de 9 horas diarias, con una cuasidesviación típica de 3.5 horas.  
b) Con un nivel de significación del 5%, determinar si se puede afirmar que el tiempo medio diario dedicado al estudio es mayor en el alumnado del GrIA que en otras titulaciones.

#### **Desarrollo**

**Definiciones iniciales**  
Datos muestrales:  
$n = 50$ (tamaño de la muestra)  
$\bar{x} = 10.5$ (media muestral, en horas)  
$s = 3.25$ (cuasidesviación típica muestral, en horas)  

Se supone que el tiempo dedicado al estudio sigue una distribución normal: $X \sim N(\mu, \sigma^2)$, con $\mu$ y $\sigma$ desconocidos. Dado que $\sigma$ es desconocida y se usa la cuasidesviación típica muestral $s$, el intervalo de confianza para $\mu$ se basa en la distribución $t$ de Student con $n - 1 = 49$ grados de libertad.

---

**a) Intervalo de confianza al 99% para la media $\mu$**  

El intervalo de confianza para $\mu$ con $\sigma$ desconocida se calcula como:  
$\bar{x} \pm t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}$  

Nivel de confianza: $1 - \alpha = 0.99 \implies \alpha = 0.01 \implies \alpha/2 = 0.005$  
Valor crítico de la distribución $t$ de Student con 49 grados de libertad: $t_{0.005, 49} \approx 2.680$ (consultado en tablas de $t$ de Student, interpolando entre $\nu = 40$ y $\nu = 60$ si es necesario).  
Error estándar: $\frac{s}{\sqrt{n}} = \frac{3.25}{\sqrt{50}} \approx \frac{3.25}{7.071} \approx 0.4596$  

Límites del intervalo:  
$\bar{x} - t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}} \leq \mu \leq \bar{x} + t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}$  
$\phantom{\bar{x} - t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}} = 10.5 - 2.680 \cdot 0.4596 \leq \mu \leq 10.5 + 2.680 \cdot 0.4596$  
$\phantom{\bar{x} - t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}} = 10.5 - 1.2317 \leq \mu \leq 10.5 + 1.2317$  
$\phantom{\bar{x} - t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}} = 9.2683 \leq \mu \leq 11.7317$  


### b) Contraste de hipótesis para la diferencia de medias de distribuciones normales

#### **Desarrollo**

**Definiciones iniciales**  
Datos muestrales:  
- Grupo 1 (GrIA): $n_x = 50$, $\bar{x} = 10.5$ (media muestral, en horas), $s_x = 3.25$ (cuasidesviación típica muestral, en horas)  
- Grupo 2 (otras titulaciones): $n_y = 100$, $\bar{y} = 9$ (media muestral, en horas), $s_y = 3.5$ (cuasidesviación típica muestral, en horas)  

Se supone que el tiempo dedicado al estudio en ambos grupos sigue una distribución normal: $X \sim N(\mu_x, \sigma_x^2)$ para GrIA y $Y \sim N(\mu_y, \sigma_y^2)$ para otras titulaciones, con $\mu_x, \mu_y, \sigma_x, \sigma_y$ desconocidos. Dado que las varianzas poblacionales son desconocidas y se usan las cuasidesviaciones típicas muestrales $s_x$ y $s_y$, y no se especifica que las varianzas poblacionales sean iguales, usamos la aproximación de Welch para dos muestras independientes con varianzas desconocidas y posiblemente diferentes.

Se desea contrastar si la media del tiempo dedicado al estudio en el GrIA ($\mu_x$) es mayor que la media en otras titulaciones ($\mu_y$), es decir, si $\mu_x > \mu_y$.

---

**b) Contraste de hipótesis con $\alpha = 0.05$**  

Hipótesis:  
$H_0: \mu_x - \mu_y \leq 0$ (el tiempo medio en GrIA no es mayor que en otras titulaciones)  
$H_1: \mu_x - \mu_y > 0$ (el tiempo medio en GrIA es mayor que en otras titulaciones)  

Estadístico de prueba (con varianzas desconocidas):  
$t = \frac{(\bar{x} - \bar{y}) - (\mu_x - \mu_y)_0}{\sqrt{\frac{s_x^2}{n_x} + \frac{s_y^2}{n_y}}}$  

Valor observado:  
$(\mu_x - \mu_y)_0 = 0$ (bajo $H_0$)  
$s_x = 3.25 \implies s_x^2 = (3.25)^2 = 10.5625$  
$s_y = 3.5 \implies s_y^2 = (3.5)^2 = 12.25$  
$\sqrt{\frac{s_x^2}{n_x} + \frac{s_y^2}{n_y}} = \sqrt{\frac{10.5625}{50} + \frac{12.25}{100}} = \sqrt{0.21125 + 0.1225} = \sqrt{0.33375} \approx 0.5777$  
$t = \frac{(\bar{x} - \bar{y}) - (\mu_x - \mu_y)_0}{\sqrt{\frac{s_x^2}{n_x} + \frac{s_y^2}{n_y}}} = \frac{(10.5 - 9) - 0}{0.5777} \approx \frac{1.5}{0.5777} \approx 2.596$  

Grados de libertad (aproximación de Welch):
$$
\begin{align*}
\nu &= \frac{\left( \frac{s_x^2}{n_x} + \frac{s_y^2}{n_y} \right)^2}
          {\frac{\left( \frac{s_x^2}{n_x} \right)^2}{n_x - 1} + \frac{\left( \frac{s_y^2}{n_y} \right)^2}{n_y - 1}} \\
&= \frac{\left( \frac{10.5625}{50} + \frac{12.25}{100} \right)^2}
          {\frac{\left( \frac{10.5625}{50} \right)^2}{49} + \frac{\left( \frac{12.25}{100} \right)^2}{99}} \\
&= \frac{(0.21125 + 0.1225)^2}
          {\frac{(0.21125)^2}{49} + \frac{(0.1225)^2}{99}} \\
&= \frac{(0.33375)^2}
          {\frac{0.044627}{49} + \frac{0.015006}{99}} \\
&= \frac{0.111389}
          {\frac{0.044627}{49} + \frac{0.015006}{99}} 
  \approx \frac{0.111389}{0.0009108 + 0.0001516} 
  \approx \frac{0.111389}{0.0010624} 
  \approx 104.85
\end{align*}
$$

Tomamos $\nu \approx 105$ (redondeamos al entero más cercano para consultar tablas de $t$).  

Región crítica (unilateral a la derecha, distribución $t$ de Student con $\nu \approx 105$ grados de libertad, $\alpha = 0.05$):  
$t_{\alpha, \nu} = t_{0.05, 105} \approx 1.660$ (consultado en tablas de $t$ de Student, interpolando entre $\nu = 100$ y $\nu = 120$ si es necesario; para $\nu$ grandes, se aproxima al valor crítico de $N(0, 1)$, que es 1.645)  
Rechazamos $H_0$ si $t > t_{\alpha, \nu}$, es decir, si $t > 1.660$.  

Decisión:  
$t = 2.596 > 1.660 \implies$ Rechazamos $H_0$.

Conclusión: Con un nivel de significación del 5%, hay evidencias suficientes para afirmar que el tiempo medio diario dedicado al estudio es mayor en el alumnado del GrIA que en otras titulaciones.

---

### Resultado final

a) El intervalo de confianza al 99% para el tiempo medio diario de horas dedicadas al estudio $\mu$ es:  
$[9.2683, 11.7317]$

b) Con un nivel de significación del 5%, hay evidencias suficientes para afirmar que el tiempo medio diario dedicado al estudio es mayor en el alumnado del GrIA que en otras titulaciones ($t = 2.596 > 1.660$).
{{% /details %}}