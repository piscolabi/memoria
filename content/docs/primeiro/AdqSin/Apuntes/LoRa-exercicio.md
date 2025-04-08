---
linkTitle: "Exercicio Lora"
title: 'Deseño de Estratexia con LoRaWAN'
description: "Exercicio feito o martes 8 de abril de LoraWan (exercicio de exame)"
toc: true
math: true
width: full
weight: 1
sidebar:
  hide: true
cascade:
  type: boletin
---

## Formulación do problema

Debemos deseñar un sistema que mida a **temperatura** desde a Catedral ata a ETSE utilizando:
- Sensor de temperatura DS18B20
- Dispositivo MKR WAN 1310 con LoRaWAN
- Batería de 2000 mAh

## Estratexia de operación

O sistema operará en ciclos con tres estados principais:
1. **Sleep**: Estado de baixo consumo
2. **Medición**: Lectura do sensor de temperatura
3. **Envío**: Transmisión de datos vía LoRaWAN

Establecemos un ciclo de operación de 5 minutos (300 segundos), o que resulta en 288 ciclos por día:

$$24 \text{ horas} \times \frac{60 \text{ minutos}}{\text{hora}} \times \frac{1 \text{ ciclo}}{5 \text{ minutos}} = 288 \text{ ciclos/día}$$

## Datos obtidos de Google

Para o deseño desta estratexia, consultáronse os seguintes datos técnicos:

- **MKR WAN 1310 consumo en sleep**: 60.4 μA (sobreestimado a 100 μA = 0.1 mA)
  *Busca: "MKR WAN 1310 sleep current consumption"*

- **MKR WAN 1310 consumo en transmisión**: ~70 mA (valor sobreestimado)
  *Busca: "MKR WAN 1310 power consumption transmission"*

- **MKR WAN 1310 consumo en modo activo**: ~50 mA
  *Busca: "MKR WAN 1310 active current consumption"*

- **Sensor DS18B20 consumo durante medición**: ~1 mA
  *Busca: "DS18B20 current consumption during measurement"*

- **Tempo de medición DS18B20**: ~100 ms (0.1 segundos)
  *Busca: "DS18B20 conversion time"*

- **Tempo de transmisión LoRaWAN**: Calculado mediante a ferramenta online
  *URL: "https://avbentem.github.io/airtime-calculator/ttn/eu868"*

## Análise do consumo enerxético

### 1. Tempo de envío

O tempo de envío depende do tamaño do payload e do factor de dispersión (SF).

- **Payload**: Utilizaremos 9 bits para representar a temperatura (2^9 = 512 valores posibles), o que resulta en 2 bytes
- **Factor de dispersión**: Seleccionamos SF12 para maximizar o alcance e garantir a comunicación entre a catedral e a ETSE

Segundo o calculador de tempo de transmisión LoRaWAN (https://avbentem.github.io/airtime-calculator/ttn/eu868):
- Overhead: 13 bytes
- Payload: 2 bytes
- SF12: 1155.1 ms ≈ 1.2 segundos

*Nota: Con SF6 o tempo sería de só 23.2 ms, pero teriamos menor alcance*

### 2. Tempo de medición

Para o sensor DS18B20:
- Tempo de medición estimado: 0.1 segundos
- Consumo durante medición: 1 mA

Para o Arduino MKR WAN 1310 durante a medición:
- Tempo activo: 0.15 segundos
- Consumo estimado: 50 mA

### 3. Tempo de sleep

$$\text{Tempo sleep} = \text{Tempo total ciclo} - \text{Tempo envío} - \text{Tempo medición}$$
$$\text{Tempo sleep} = 300\text{ s} - 1.2\text{ s} - (0.1\text{ s} + 0.15\text{ s})$$
$$\text{Tempo sleep} = 300\text{ s} - 1.2\text{ s} - 0.25\text{ s} = 298.55\text{ s}$$

- Consumo en modo sleep do MKR WAN 1310: 60.4 μA (sobreestimamos a 100 μA = 0.1 mA)

## Cálculo de consumo por ciclo

### Consumo durante sleep

$$\text{Consumo sleep} = 0.1\text{ mA} \times 298.55\text{ s} \times \frac{1\text{ h}}{3600\text{ s}} = 0.00829\text{ mAh}$$

Aproximando:
$$\text{Consumo sleep} \approx 0.1\text{ mA} \times 300\text{ s} \times \frac{1\text{ h}}{3600\text{ s}} = 0.00833\text{ mAh}$$

### Consumo durante envío

Consumo do MKR WAN 1310 durante transmisión: 70 mA (valor sobreestimado)

$$\text{Consumo envío} = 70\text{ mA} \times 1.2\text{ s} \times \frac{1\text{ h}}{3600\text{ s}} = 0.02333\text{ mAh}$$

### Consumo durante medición

Sensor DS18B20:
$$\text{Consumo sensor} = 1\text{ mA} \times 0.1\text{ s} \times \frac{1\text{ h}}{3600\text{ s}} = 0.00003\text{ mAh}$$

Arduino MKR WAN 1310 activo:
$$\text{Consumo Arduino} = 50\text{ mA} \times 0.15\text{ s} \times \frac{1\text{ h}}{3600\text{ s}} = 0.00208\text{ mAh}$$

### Consumo total por ciclo

$$\text{Consumo por ciclo} = \text{Consumo sleep} + \text{Consumo envío} + \text{Consumo sensor} + \text{Consumo Arduino}$$
$$\text{Consumo por ciclo} = 0.00833 + 0.02333 + 0.00003 + 0.00208 = 0.03377\text{ mAh}$$

## Duración da batería

$$\text{Consumo diario} = \text{Consumo por ciclo} \times \text{Ciclos por día}$$
$$\text{Consumo diario} = 0.03377\text{ mAh/ciclo} \times 288\text{ ciclos/día} = 9.726\text{ mAh/día}$$

Polo tanto:
$$\text{Duración (días)} = \frac{2000\text{ mAh}}{9.726\text{ mAh/día}} = 205.63\text{ días}$$

## Conclusión

Coa configuración establecida, a batería de 2000 mAh tería unha duración aproximada de 205 días (aproximadamente 6.8 meses).

**Nota importante**: Se utilizásemos SF6 en lugar de SF12, o tempo de transmisión reduciríase significativamente (de 1.2 s a 23.2 ms), o que diminuiría o consumo enerxético e aumentaría a duración da batería, pero comprometería o alcance do sistema.