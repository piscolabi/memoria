---
date: 2025-03-14
title: Melloras para un deseño máis responsivo
description: Correccións de formato de texto na pantalla de inicio
tags:
  - commit
  - web
  - style
authors:
  - name: pisco
    link: https://github.com/piscolabi
    image: https://github.com/piscolabi.png?size=40
toc: true
excludeSearch: true
sidebar:
  exclude: true
---
## Melloras no deseño da páxina principal

### Cambios no encabezado

- **Maior espazo entre elementos**: Aumentouse a separación entre o título "memorIA" e o subtítulo "Repositorio de recursos académicos" para mellorar a lexibilidade.
  - Modificouse a clase de altura de `hx-h-2 sm:hx-h-3` a `hx-h-4 sm:hx-h-5` para duplicar o espazo vertical.

### Optimización do subtítulo descritivo

- **Formato de texto mellorado**: Reorganizouse o texto descritivo para que semelle un recadro máis compacto e coherente.
  - Eliminouse a xustificación do texto para evitar espazos irregulares entre palabras.
  - Mantívose o texto centrado en dispositivos móbiles e aliñado á esquerda en pantallas grandes.

- **Responsividade mellorada**:
  - Para pantallas pequenas: ancho máximo de 350px, texto centrado.
  - Para pantallas grandes (>768px): ancho máximo de 430px, texto aliñado á esquerda.

### Optimización visual

- **Axustes de cor**: Refinouse a cor do texto no modo escuro para mellorar o contraste e a lexibilidade.
  - Cambiouse a cor a `rgba(122, 133, 133, 0.8)` no modo escuro.

- **Mellora na estrutura de contido**: Reorganizáronse os elementos para crear unha distribución máis equilibrada e visualmente atractiva.

## Melloras no contido

- **Refinamento de textos**: Mellorouse a redacción de varios textos descritivos para ser máis claros e directos.
  - Optimizouse o texto do subtítulo principal para unha mellor lectura en diferentes dispositivos.

- **Adaptación responsiva de contidos**: Implementáronse axustes para garantir que os textos se visualicen correctamente en calquera tamaño de pantalla.

## Próximos pasos

- Seguro que axustarei máis o deseño, pero únicamente da autentificación e a páxina principal, que son as únicas que empregan animacións.
- Refinar a paleta de cores para o modo escuro??