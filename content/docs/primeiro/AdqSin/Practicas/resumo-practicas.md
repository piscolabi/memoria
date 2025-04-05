---
linkTitle: "Resumo"
title: ''
description: "Guía con todos os conceptos e circuítos traballados nas prácticas de laboratorio"
toc: true
math: true
sidebar:
  exclude: true
  hide: true
# cascade:
#   type: boletin
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
- **Componentes**: Resistencias, condensadores, diodos, amplificadores operacionais, temporizador 555

## Práctica 7: Introdución a Arduino e LEDs

### Conceptos clave
- **Díodos LED**: Curva característica de corrente
- **Arduino UNO**: Plataforma de prototipado electrónico
- **Análise de sinais**: Observación de flancos de subida e baixada dos LEDs

### Procedementos experimentais
- Visualización do comportamento dos LEDs por primeira vez
- Análise con PicoScope das curvas de carga e descarga dos díodos LED
- Observación dos tempos de resposta (flancos de subida e baixada)
- Realización de exercicios prácticos co IDE de Arduino
- Montaxe de circuítos básicos con diversos componentes

## Práctica 8: Contador de parking con Arduino e temporizador 555

### Conceptos clave
- **Arduino UNO**:
  - Programación no IDE de Arduino
  - Uso de entradas e saídas dixitais
  - Control de LEDs como indicadores
- **Circuíto integrado 555**:
  - Configuración monoestable
  - Xeración de ondas cadradas
  - Interacción entre Arduino e o temporizador 555
- **Análise de sinais**:
  - Visualización de formas de onda con PicoScope
  - Medición de sinais de entrada e saída

### Procedementos experimentais
#### Parte 1: Contador de parking con Arduino
- Montaxe dun circuíto con Arduino para simular un contador de parking
- Programación no IDE de Arduino para:
  - Contar vehículos ata un máximo de 10
  - Acender un LED verde cando o reconto está entre 0 e 9 (parking dispoñible)
  - Acender un LED vermello cando o reconto chega a 10 (parking completo)
- Probas e verificación do funcionamento do circuíto

#### Parte 2: Temporizador 555 en modo monoestable
- Montaxe dun circuíto co temporizador 555 en configuración monoestable
- Xeración dunha sinal de disparo (trigger) desde Arduino, controlada mediante programación
- Conexión do circuíto ao PicoScope para medir e visualizar as formas de onda
- Análise das ondas cadradas xeradas:
  - Sinal de entrada de 5 V ao activar o pin de disparo
  - Observación da sinal de saída do temporizador 555

## Equipamento utilizado
- **Arduino UNO**: Plataforma de prototipado electrónico
- **PicoScope**: Osciloscopio dixital para visualización de formas de onda
- **Componentes**: Resistencias, condensadores, LEDs, temporizador 555
---

*Nota: Este documento é un resumo orientativo. Consulta os guións de prácticas e os teus apuntamentos para información máis detallada.*
