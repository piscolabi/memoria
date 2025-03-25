---
date: 2025-03-17
title: Sistema de vídeos e novo contido
description: Implementación de thumbnails para vídeos, solucións para a visualización en móbiles e melloras na estrutura de contidos
tags:
  - commit
  - deseño
  - contido
  - mellora
authors:
  - name: pisco
    link: https://github.com/piscolabi
    image: https://github.com/piscolabi.png?size=40
toc: true
excludeSearch: true
sidebar:
  exclude: true
---

## Resumo das modificacións

Mellorar a experiencia de usuario con contido multimedia, implementando un sistema de miniaturas para vídeos de YouTube, solucionando problemas de visualización en dispositivos móbiles e refinando a estrutura de contidos das asignaturas.

## Melloras implementadas

### Sistema de vídeos
- **Thumbnails para YouTube**: Implementouse un sistema que mostra miniaturas de vídeos en lugar de embeds directos, mellorando o rendemento da páxina
- **Parámetro maxWidth**: Engadiuse un novo parámetro ao shortcode de YouTube para controlar o ancho máximo do contedor
- **Exemplo de código**:
  ```html
  {{< card
        link="https://youtu.be/qfWIjb48mjE?t=40"
        title="555 Timer Modes Explained - The Learning Circuit"
        image="https://i3.ytimg.com/vi/qfWIjb48mjE/hqdefault.jpg"
        imageStyle="object-fit:cover; aspect-ratio:16/9;"
  >}}
  ```

### Visualización de contido
- **Shortcode hide-sidebar**: Creouse un novo shortcode para ocultar a barra lateral en páxinas específicas
  ```html
  {{< hide-sidebar >}}
  ```
- **Clase destacado**: Corrixiuse o problema dos bordes redondeados na clase "destacado"
  ```css
  .destacado {
    box-shadow: 0 0 10px rgba(255, 238, 2, 0.849);
    border-radius: 8px !important;
    overflow: hidden;
  }
  ```

### Estrutura de contidos
- **Organización de asignaturas**: Refinouse a estrutura das carpetas para materiais de asignaturas
- **Formato LaTeX**: Mellorouse a presentación de fórmulas matemáticas usando LaTeX
  ```latex
  $V_{out} = \frac{R_2}{R_1+R_2} \times V_{in}$
  ```

## Correccións de erros

### Compatibilidade con móbiles
- **Problema**: Os vídeos de YouTube non se cargaban correctamente en dispositivos móbiles debido á política de seguridade de contido
- **Causa**: A configuración Content-Security-Policy no arquivo netlify.toml non permitía contido de YouTube
- **Solución**: Actualizouse a política para incluír os dominios de YouTube
  ```toml
  Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://player.vimeo.com"
  ```

### Shortcode de YouTube
- **Problema**: O shortcode de YouTube producía un erro "query keys must be strings"
- **Causa**: Os parámetros non estaban sendo convertidos a cadeas de texto antes de pasalos á función `querify`
- **Solución**: Implementouse unha construción manual dos parámetros da URL para evitar problemas de tipos
  ```go
  {{- $queryParams := "" }}
  {{- if ne $autoplay 0 }}
    {{- $queryParams = printf "%sautoplay=%d&" $queryParams $autoplay }}
  {{- end }}
  ```

## Cambios técnicos

### Optimización de rendemento
- **Thumbnails vs. Embeds**: Cambiouse o enfoque de embeds directos a thumbnails con enlaces, mellorando significativamente o tempo de carga e o consumo de recursos
- **Impacto**: Redución do tempo de carga inicial e mellor experiencia en conexións lentas
- **Detalles técnicos**: As miniaturas cargan só unha imaxe estática, mentres que os embeds cargan todo o reprodutor de YouTube

### Configuración de seguridade
- **Modificación de CSP**: Actualizouse a política de seguridade de contido para permitir recursos externos mentres se mantén un nivel adecuado de seguridade
- **Compatibilidade de dispositivos**: Mellorouse a experiencia en móbiles ao permitir que os enlaces a YouTube abran o selector de aplicacións

## Próximos pasos

- Continuar a mellora do deseño responsivo para todas as páxinas
- Engadir máis contido para as prácticas de laboratorio
- Explorar opcións adicionais para optimizar a carga de recursos multimedia