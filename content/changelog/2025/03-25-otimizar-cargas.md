---
date: 2025-03-25
title: Optimización do reprodutor de YouTube e melloras de rendemento
description: Implementación de lite-youtube-embed e optimización da carga de recursos
tags:
  - commit
  - optimización
  - rendemento
  - multimedia
authors:
  - name: piscolabi
    link: https://github.com/piscolabi
    image: https://github.com/piscolabi.png?size=40
toc: true
excludeSearch: true
sidebar:
  exclude: true
---

## Resumo das modificacións

Nesta actualización implementamos unha solución lixeira para a carga de vídeos de YouTube que reduce drasticamente o tamaño de carga dos iframes. Ademais, optimizamos o rendemento xeral da páxina mediante técnicas de caché e procesamento de recursos estáticos.

## Melloras implementadas

### Reprodutor de YouTube lixeiro
- **Implementación de lite-youtube-embed**: Substituíuse o iframe estándar de YouTube por unha solución lixeira que reduce o tamaño de carga de ~4MB a só uns poucos KB.
- **Razón**: Os iframes normais de YouTube cargan moitos recursos innecesarios que ralentizan a páxina.
- **Detalles técnicos**: Implementouse un shortcode personalizado que utiliza o compoñente lite-youtube para cargar os vídeos só cando o usuario interactúa con eles.
  ```html
  {{ $id := .Get "id" }}
  {{ $title := .Get "title" | default "" }}
  {{ $playlabel := .Get "playlabel" | default "Reproducir vídeo" }}
  {{ $params := .Get "params" | default "" }}
  {{ $jsapi := .Get "jsapi" | default false }}
  {{ $class := .Get "class" | default "mb-8 mx-auto" }}

  <div class="{{ $class }}">
    <lite-youtube 
      videoid="{{ $id }}" 
      {{ if $title }}title="{{ $title }}"{{ end }}
      {{ if $playlabel }}playlabel="{{ $playlabel }}"{{ end }}
      {{ if $params }}params="{{ $params }}"{{ end }}
      {{ if $jsapi }}js-api{{ end }}
      style="background-image: url('https://i.ytimg.com/vi/{{ $id }}/hqdefault.jpg');">
      <button type="button" class="lyt-playbtn">
        <span class="lyt-visually-hidden">{{ $playlabel }}</span>
      </button>
    </lite-youtube>
  </div>
  ```

### Optimización de rendemento
- **Configuración de caché**: Implementouse unha política de caché agresiva para recursos estáticos como CSS, JS e imaxes.
- **Razón**: Reducir o número de solicitudes ao servidor e acelerar as cargas posteriores.
- **Detalles técnicos**: Configuráronse cabeceiras de caché no arquivo netlify.toml para recursos inmutables:
  ```toml
  [[headers]]
    for = "*.css"
    [headers.values]
      Cache-Control = "public, max-age=31536000, immutable"

  [[headers]]
    for = "*.js"
    [headers.values]
      Cache-Control = "public, max-age=31536000, immutable"
  ```

### Procesamento de recursos con Hugo Pipes
- **Optimización de CSS e JS**: Implementouse o procesamento de recursos mediante Hugo Pipes.
- **Razón**: Minificar e optimizar os arquivos para producción, reducindo o seu tamaño.
- **Detalles técnicos**: Creáronse parciais personalizados para procesar os recursos:
  ```html
  {{ if eq hugo.Environment "production" }}
    {{ $liteYtCss := resources.Get "css/lite-yt-embed.css" | resources.Minify | resources.Fingerprint }}
    <link rel="preload" href="{{ $liteYtCss.RelPermalink }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="{{ $liteYtCss.RelPermalink }}"></noscript>
  {{ else }}
    <link rel="stylesheet" href="/css/lite-yt-embed.css">
  {{ end }}
  ```

## Cambios técnicos

### Reorganización da estrutura de arquivos
- **Cambio**: Movéronse recursos estáticos da carpeta `/static/` á carpeta `/assets/` para aproveitar Hugo Pipes.
- **Impacto**: Permite procesamento avanzado como minificación e fingerprinting.
- **Detalles técnicos**: Os arquivos en `/assets/` poden ser procesados con `resources.Get`, mentres que os arquivos en `/static/` son copiados directamente sen procesamento.

### Optimización da carga de JavaScript
- **Cambio**: Engadiuse o atributo `defer` aos scripts non críticos.
- **Impacto**: Mellora o tempo de carga inicial da páxina permitindo que o contido se renderice antes de cargar os scripts.
- **Detalles técnicos**: Modificouse o baseof.html para reorganizar a carga de scripts:
  ```html
  <!DOCTYPE html>
  <html lang="{{ .Site.Language.Lang }}">
    <head>
      {{- partial "head.html" . -}}
      {{- partial "custom-scripts.html" . -}}
    </head>
    <body>
      <!-- Contido da páxina -->
      {{- partial "custom-footer-scripts.html" . -}}
    </body>
  </html>
  ```

### Prevención de carga duplicada
- **Problema**: Os recursos JS e CSS cargábanse varias veces ao usar múltiples shortcodes.
- **Solución**: Centralizouse a carga de recursos en arquivos parciais que se inclúen unha soa vez.

## Resultados de rendemento
- **Antes**: Carga lenta con tempos de execución de ~6.49s para main.css e ~3.49s para a páxina completa.
- **Despois**: Carga significativamente máis rápida con caché efectiva para visitas recorrentes.
- **Impacto en vídeos**: Redución de ~4MB a uns poucos KB por cada vídeo de YouTube.

## Próximos pasos

- Implementar lazy loading para máis compoñentes da páxina
- Optimizar imaxes mediante conversión a formatos modernos como WebP
- Explorar a posibilidade de dividir o CSS en crítico e non crítico para mellorar o First Contentful Paint
- Implementar un sistema de monitorización de rendemento para seguir optimizando a experiencia de usuario
