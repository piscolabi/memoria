---
linkTitle: "Resumo"
title: ''
description: "Guía con todos os conceptos e circuítos traballados nas prácticas de laboratorio"
toc: false
math: true
sidebar:
  exclude: true
---

# Resumo global das prácticas de laboratorio

Este documento recolle de forma estruturada todos os conceptos, circuítos e procedementos traballados ao longo das prácticas de laboratorio da materia. Serve como guía de estudo e referencia rápida para o exame práctico.

## Práctica 1: Leis fundamentais de circuítos

### Conceptos clave
- **Lei de Ohm**: Relación entre tensión (V), corrente (I) e resistencia (R): $V = I \times R$
- **Leis de Kirchhoff**:
  - Lei das correntes (LCK): $\sum I = 0$ en calquera nodo
  - Lei das tensións (LTK): $\sum V = 0$ en calquera malla

### Procedementos experimentais
- Medición de resistencias co polímetro
- Montaxe de circuítos con resistencias en serie e paralelo
- Medición de tensións e correntes nun circuíto con dúas fontes
- Análise de circuítos por nodos e mallas

### Cálculos teóricos vs. experimentais
- Comparación dos resultados experimentais cos cálculos teóricos
- Análise dos erros e discrepancias

## Práctica 2: Teoremas de Thevenin e Norton

### Conceptos clave
- **Teorema de Thevenin**: Todo circuíto lineal pode substituírse por unha fonte de tensión en serie cunha resistencia
- **Teorema de Norton**: Todo circuíto lineal pode substituírse por unha fonte de corrente en paralelo cunha resistencia
- **Partidor de tensión**: $V_{out} = \frac{R_2}{R_1+R_2} \times V_{in}$

### Procedementos experimentais
- Determinación dos parámetros de Thevenin ($V_{TH}$ e $R_{TH}$)
- Montaxe do circuíto equivalente de Thevenin
- Uso do potenciómetro (100 k$\Omega$) como resistencia variable
- Medición da potencia entregada á carga

### Transferencia máxima de potencia
- Determinación experimental da resistencia de carga ($R_L$) para máxima potencia
- Verificación da condición $R_L = R_{TH}$ para máxima transferencia de potencia
- Táboas de medición de potencia vs. resistencia de carga

## Práctica 3: Introdución á corrente alterna

### Conceptos clave
- **Partidor de tensión con condensador**
- **Diagramas de Bode**: representación da resposta en frecuencia
  - Atenuación en decibelios ($dB$)
  - Retardo de fase

### Procedementos experimentais
- Uso do PicoScope para medición en corrente alterna
- Medición da amplitude de entrada e saída
- Elaboración de táboas de resposta en frecuencia
- Verificación experimental das fórmulas teóricas

## Práctica 4: Diodos e rectificación

### Conceptos clave
- **Diodo semiconductor**: Comportamento e curva característica
- **Rectificación de media onda e onda completa**
- **Carga e descarga do condensador**

### Procedementos experimentais
- Montaxe de circuítos rectificadores
- Visualización de formas de onda co PicoScope
- Uso de canles matemáticas para obter a curva do diodo
- Análise dos semiciclos positivos e negativos

## Práctica 5: Amplificadores operacionais

### Conceptos clave
- **Amplificador operacional** microA741:
  - Configuración en lazo aberto e pechado
  - Configuración inversora e non inversora
  - Concepto de cortocircuíto virtual
- **Superdiodos** (rectificadores de precisión)

### Procedementos experimentais
- Identificación de pins do amplificador operacional
- Montaxe de circuítos con e sen diodo
- Visualización e comparación das curvas características
- Análise do comportamento nos semiciclos positivos e negativos

## Práctica 6: Temporizador 555

### Conceptos clave
- **Circuíto integrado 555**:
  - Configuración astable (oscilador)
  - Introdución á configuración monoestable

### Procedementos experimentais
- Montaxe do circuíto 555 en modo astable
- Visualización das formas de onda co PicoScope
- Cálculo e medición de frecuencias e ciclos de traballo

## Equipamento utilizado

- **Polímetro**: Para medición de resistencias, tensións e correntes
- **PicoScope**: Osciloscopio dixital para visualización de formas de onda
- **Fonte de alimentación**: Para proporcionar tensión continua
- **Xerador de funcións**: Para sinais de corrente alterna
- **Protoboard**: Para montaxe rápida de circuítos
- **Compoñentes**: Resistencias, condensadores, diodos, amplificadores operacionais, temporizador 555


---

*Nota: Este documento é un resumo orientativo. Consulta os guións de prácticas e os teus apuntamentos para información máis detallada.*

texto orixinal:
P1 7F- ley de ohm, como actúan as resistencias cando pasa corrente \
     LEIS DE KIRCHOFF, medicion de resistencias e tensión con polímetro para un circuito simple con 2 fontes de tension \
     Teoremas Thevenin e Norton, circuitos equivalentes e como actúan as correntes en cortocircuito \
     coller resistencias medir resistencias, medir correntes e o sumatorio tiña uqe ser 0, usar polimetro para medir todo, por nodos dsps por maias ...
     con eses datos queda de deberes, medir teóricamente por nodos e maias as tensións que deberían dar e comparalas cos resultados experimentais

P2 14F- (Comprobar teoremas thevv. e Norton, resistencias equivalentes, cortocircuitos, partidor de tension, ecuacion do partidor, polimetros,
coller 5 resistencias - tensión de thevenin e comprobar que nos deran o mesmo (primeiro experimental e despois teoricamente as tensions e correntes)
 Introducir potenciómetro (100kohms) para facer un circuito equivalente ao feito na practica anterior, 
 montar circ. thevenin sen desmontar o anterior e comprobar que eran icrcuitos equivalentes, comprobar resistencia de carga que deran o mesmo
para qué valor de R_l a potencia é máxima'?? <- medir potencias e tensións cambiandolle o valor ao potenciometro, (cúmplese que é máxima cando a derivada é 0, empezar unha tabla)

P3 21F - Tª maxima potencia transferecial(fuerza de transmision);
     Introdución alterna - partidor de tension con condensador - Introduccion diagramas de Bode (atenuación por dB e retardo por fases) , medir experimentalmente con Picoscope Amplitude de entrada e de saída, facer unha táboa e comprobar resultados cas fórmulas,

P4 28F - O mismo que a P3 (repetimos todo) \
    Introducción do diodo, rectificacion de media onda e onda completa, carga e descarga do condensador, <- Picoscope graficar a diferenza do canal A e B era a curva do diodo (canales matematicos)

P5 7 M- Introduccion Superdiodos (rectificador de precisión), Operational amplifier ma741: en lazo cerrado, en lazo aberto, configuración inversora/non inversora, pins, como se comporta un circuito con superdiodo (curva característica de tension), semiciclos positivos e negativos, cortocircuito virtual <- Picoscope 2 circuitos un sin diodo outro con diodo

P6 14 M- da clases Victor, circuito 555 astable, introdución ao monoestable pero non deu tempo <- Picoscope montar circuito 555