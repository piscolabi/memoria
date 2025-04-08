# Diseño de Estrategia con LoRaWAN para Sistema de Medición de Temperatura
(exercicio de exame)

## Planteamiento del problema

Debemos diseñar un sistema que mida la temperatura desde la catedral hasta la ETSE utilizando:
- Sensor de temperatura DS18B20
- Dispositivo MKR WAN 1310 con LoRaWAN
- Batería de 2000 mAh

## Estrategia de operación

El sistema operará en ciclos con tres estados principales:
1. **Sleep**: Estado de bajo consumo
2. **Medición**: Lectura del sensor de temperatura
3. **Envío**: Transmisión de datos vía LoRaWAN

Establecemos un ciclo de operación de 5 minutos (300 segundos), lo que resulta en 288 ciclos por día:

$$24 \text{ horas} \times \frac{60 \text{ minutos}}{\text{hora}} \times \frac{1 \text{ ciclo}}{5 \text{ minutos}} = 288 \text{ ciclos/día}$$


## Datos sacados de Google

Para el diseño de esta estrategia, se han consultado los siguientes datos técnicos:

- **MKR WAN 1310 consumo en sleep**: 60.4 μA (sobreestimado a 100 μA = 0.1 mA)
  *Búsqueda: "MKR WAN 1310 sleep current consumption"*

- **MKR WAN 1310 consumo en transmisión**: ~70 mA (valor sobreestimado)
  *Búsqueda: "MKR WAN 1310 power consumption transmission"*

- **MKR WAN 1310 consumo en modo activo**: ~50 mA
  *Búsqueda: "MKR WAN 1310 active current consumption"*

- **Sensor DS18B20 consumo durante medición**: ~1 mA
  *Búsqueda: "DS18B20 current consumption during measurement"*

- **Tiempo de medición DS18B20**: ~100 ms (0.1 segundos)
  *Búsqueda: "DS18B20 conversion time"*

- **Tiempo de transmisión LoRaWAN**: Calculado mediante la herramienta online
  *URL: "https://avbentem.github.io/airtime-calculator/ttn/eu868"*

## Análisis del consumo energético

### 1. Tiempo de envío

El tiempo de envío depende del tamaño del payload y del factor de dispersión (SF).

- **Payload**: Utilizaremos 9 bits para representar la temperatura (2^9 = 512 valores posibles), lo que resulta en 2 bytes
- **Factor de dispersión**: Seleccionamos SF12 para maximizar el alcance y garantizar la comunicación entre la catedral y la ETSE

Según el calculador de tiempo de transmisión LoRaWAN (https://avbentem.github.io/airtime-calculator/ttn/eu868):
- Overhead: 13 bytes
- Payload: 2 bytes
- SF12: 1155.1 ms ≈ 1.2 segundos

*Nota: Con SF6 el tiempo sería de solo 23.2 ms, pero tendríamos menor alcance*

### 2. Tiempo de medición

Para el sensor DS18B20:
- Tiempo de medición estimado: 0.1 segundos
- Consumo durante medición: 1 mA

Para el Arduino MKR WAN 1310 durante la medición:
- Tiempo activo: 0.15 segundos
- Consumo estimado: 50 mA

### 3. Tiempo de sleep

$$\text{Tiempo sleep} = \text{Tiempo total ciclo} - \text{Tiempo envío} - \text{Tiempo medición}$$
$$\text{Tiempo sleep} = 300\text{ s} - 1.2\text{ s} - (0.1\text{ s} + 0.15\text{ s})$$
$$\text{Tiempo sleep} = 300\text{ s} - 1.2\text{ s} - 0.25\text{ s} = 298.55\text{ s}$$

- Consumo en modo sleep del MKR WAN 1310: 60.4 μA (sobreestimamos a 100 μA = 0.1 mA)

## Cálculo de consumo por ciclo

### Consumo durante sleep

$$\text{Consumo sleep} = 0.1\text{ mA} \times 298.55\text{ s} \times \frac{1\text{ h}}{3600\text{ s}} = 0.00829\text{ mAh}$$

Aproximando:
$$\text{Consumo sleep} \approx 0.1\text{ mA} \times 300\text{ s} \times \frac{1\text{ h}}{3600\text{ s}} = 0.00833\text{ mAh}$$

### Consumo durante envío

Consumo del MKR WAN 1310 durante transmisión: 70 mA (valor sobreestimado)

$$\text{Consumo envío} = 70\text{ mA} \times 1.2\text{ s} \times \frac{1\text{ h}}{3600\text{ s}} = 0.02333\text{ mAh}$$

### Consumo durante medición

Sensor DS18B20:
$$\text{Consumo sensor} = 1\text{ mA} \times 0.1\text{ s} \times \frac{1\text{ h}}{3600\text{ s}} = 0.00003\text{ mAh}$$

Arduino MKR WAN 1310 activo:
$$\text{Consumo Arduino} = 50\text{ mA} \times 0.15\text{ s} \times \frac{1\text{ h}}{3600\text{ s}} = 0.00208\text{ mAh}$$

### Consumo total por ciclo

$$\text{Consumo por ciclo} = \text{Consumo sleep} + \text{Consumo envío} + \text{Consumo sensor} + \text{Consumo Arduino}$$
$$\text{Consumo por ciclo} = 0.00833 + 0.02333 + 0.00003 + 0.00208 = 0.03377\text{ mAh}$$

## Duración de la batería

$$\text{Consumo diario} = \text{Consumo por ciclo} \times \text{Ciclos por día}$$
$$\text{Consumo diario} = 0.03377\text{ mAh/ciclo} \times 288\text{ ciclos/día} = 9.726\text{ mAh/día}$$

Por lo tanto:
$$\text{Duración (días)} = \frac{2000\text{ mAh}}{9.726\text{ mAh/día}} = 205.63\text{ días}$$

## Conclusión

Con la configuración establecida, la batería de 2000 mAh tendría una duración aproximada de 205 días (aproximadamente 6.8 meses).

**Nota importante**: Si utilizáramos SF6 en lugar de SF12, el tiempo de transmisión se reduciría significativamente (de 1.2 s a 23.2 ms), lo que disminuiría el consumo energético y aumentaría la duración de la batería, pero comprometería el alcance del sistema.