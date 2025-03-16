---
date: 2025-03-16
title: Como crear un acceso directo á web dende móbil + notas de cambios
description: Creación dun manifest personalizado para permitir engadir a web como aplicación en dispositivos móbiles
tags:
  - Móbil
  - interface
authors:
  - name: pisco
    link: https://github.com/piscolabi
    image: https://github.com/piscolabi.png?size=40
toc: true
excludeSearch: true
sidebar:
  exclude: true
---

## Como instalar memorIA no teu dispositivo:

{{% steps %}}

### Abre a páxina en Chrome ou outro navegador compatible
Visita memorIA desde o teu dispositivo móbil usando Chrome, Safari ou outro navegador compatible con PWA.

### Preme en "Menú" (tres puntos verticais)
Localiza o menú do navegador, normalmente representado por tres puntos verticais na esquina superior dereita.

### Selecciona "Engadir á pantalla de inicio" ou "Instalar aplicación"
Dependendo do navegador e dispositivo, esta opción pode aparecer como "Engadir á pantalla de inicio", "Instalar aplicación" ou "Engadir a Home Screen".

### Confirma a instalación
Preme "Engadir" ou "Instalar" no recuadro de confirmación que aparece. Agora terás memorIA dispoñible como unha aplicación no teu dispositivo!
{{% /steps %}}


## Resumo das modificacións

Nesta actualización implementouse un ficheiro `site.webmanifest` personalizado que permite aos usuarios engadir a páxina web aos seus dispositivos móbiles como unha aplicación nativa, substituíndo a configuración predeterminada do tema Hextra.

{{< callout type="info" >}}
Esta mellora facilita o acceso rápido á páxina desde dispositivos móbiles.
{{< /callout >}}

## Melloras implementadas

### Integración como aplicación en dispositivos móbiles

- **Web App Manifest personalizado**: Creouse un ficheiro `site.webmanifest` específico para a plataforma memorIA
- **Iconas personalizadas**: Substituíronse as iconas predeterminadas de Hextra polas propias do proxecto
- **Mellora na experiencia de usuario**: Agora os usuarios poden engadir a web á súa pantalla de inicio como unha aplicación completa


### Creación do ficheiro site.webmanifest
```json
{
    "name": "memorIA | recursos académicos",
    "short_name": "memorIA",
    "start_url": "index.html",
    "icons": [
      {
        "src": "android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "theme_color": "#000000",
    "background_color": "#000000",
    "display": "standalone"
  }

```

## Detalles técnicos

- **Cores temáticas**: Definíronse `background_color` e `theme_color` para manter a coherencia co deseño da web
- **Modo de visualización**: Configurouse como `standalone` para que a aplicación se abra sen a interface do navegador
- **Tamaños de icona**: Incluíronse múltiples tamaños para garantir a compatibilidade con diferentes dispositivos
- **Compatibilidade**: Espero que funcione en mais teléfonos que o meu
 
## Próximos pasos

- Engadir funcionalidades offline para permitir o acceso a certos contidos sen conexión a internet
- Implementar notificacións push ??? para informar sobre novas actualizacións de contido
- Mellorar o rendemento e os tempos de carga ???
