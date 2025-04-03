---
date: 2025-04-03
title: Melloras no layout e visualización de contido
description: Optimización da estrutura de páxinas, melloras na visualización en diferentes dispositivos e implementación de shortcodes personalizados
tags:
  - commit
  - frontend
  - deseño
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

Nesta actualización centrámonos en mellorar a visualización do contido en diferentes tamaños de pantalla, optimizar o layout das páxinas e crear shortcodes personalizados para facilitar a xestión do contido.

## Melloras implementadas

### Deseño responsivo
- **Optimización do ancho de contido**: Axustáronse as marxes laterais para mellorar a lexibilidade en pantallas grandes e medianas
- **Posicionamento do TOC**: Modificouse o layout para que a táboa de contidos apareza á dereita en pantallas medianas e grandes
- **Visualización do sidebar**: Implementouse unha solución para que o sidebar non ocupe espazo cando está oculto

### Shortcode para ocultar sidebar
- **Funcionalidade**: O shortcode `hide-sidebar.html` permite ocultar o sidebar en páxinas específicas
- **Compatibilidade móbil**: Asegurouse de que o menú de tres puntiños siga funcionando en pantallas pequenas
- **Resultado**: Non me gustou o resultado entón polo de agora non o vou a usar por conflitos, pero deixoo por telo nun futuro
- **Código implementado**:
  ```html
  <style>
    /* Ocultar a barra lateral e o TOC só en pantallas medianas e grandes */
    @media (min-width: 768px) {
      .sidebar-container, 
      .toc-container {
        display: none !important;
      }
      
      /* Facer que o contido ocupe toda a anchura en pantallas medianas e grandes */
      .article-container {
        grid-template-columns: 1fr !important;
        max-width: 100% !important;
      }
      
      /* Engadir marxes laterais en pantallas grandes para evitar que o contido quede demasiado ancho */
      .content {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
      
      /* Axuste adicional para pantallas moi grandes */
      @media (min-width: 1280px) {
        .content {
          padding-left: 10% !important;
        }
      }
    }
    
    /* Estes estilos aplícanse a todas as pantallas */
    .article-content {
      max-width: 80rem !important;
      margin: 0 auto !important;
    }

    .content {
      width: 100% !important;
    }
    
    .hx-mx-auto {
      margin-left: auto !important;
      margin-right: auto !important;
    }
    
    /* Asegurar que o botón de menú e o seu contido son visibles en pantallas pequenas */
    @media (max-width: 767px) {
      .mobile-menu-button,
      .mobile-menu-container {
        display: block !important;
        visibility: visible !important;
      }
    }
  </style>
  ```

### Modificación do layout single.html
- **Centralización do título**: Implementouse un estilo centrado para os títulos das páxinas
- **Marxes adaptativas**: Axustáronse as marxes laterais para diferentes tamaños de pantalla
- **Exemplo de código**:
  ```html
  {{ define "main" }}
    <div class='hx-mx-auto hx-max-w-screen-xl hx-relative'>
      <!-- Sidebar con posición absoluta para que non afecte ao layout -->
      <div class="sidebar-wrapper hx-absolute hx-left-0 hx-top-0 md:hx-hidden">
        {{ partial "sidebar.html" (dict "context" .) }}
      </div>
      
      <div class="hx-flex hx-w-full">
        <article class="hx-w-full hx-break-words hx-flex hx-min-h-[calc(100vh-var(--navbar-height))] hx-min-w-0 hx-justify-center hx-pb-8">
          <main class="hx-w-full hx-min-w-0 hx-max-w-3xl hx-px-6 hx-pt-4 hx-md:px-8 hx-mx-auto">
            {{ partial "breadcrumb.html" . }}
            <h1 class="hx-mt-2 hx-text-4xl hx-font-bold hx-tracking-tight hx-text-slate-900 dark:hx-text-slate-100 hx-text-center">{{ .Title }}</h1>
            
            <div class="content hx-text-left">
              {{ .Content }}
            </div>
            {{ partial "components/last-updated.html" . }}
            {{ partial "components/pager.html" . }}
            {{ partial "components/comments.html" . }}
          </main>
        </article>
        
        <!-- TOC á dereita -->
        <div class="toc-right hx-hidden md:hx-block hx-w-64 hx-pt-20">
          <div class="hx-sticky hx-top-20">
            {{ partial "toc.html" . }}
          </div>
        </div>
      </div>
    </div>
  {{ end }}
  ```

### Visualización de boletíns
- **Layout personalizado**: Creouse un layout específico para os boletíns con marxes reducidas
- **Aliñamento de breadcrumbs**: Asegurouse de que os breadcrumbs estean correctamente aliñados co contido

## Correccións de erros

### Visualización en móbil
- **Problema**: O menú de tres puntiños non funcionaba ao ocultar o sidebar
- **Causa**: Os estilos para ocultar o sidebar tamén afectaban ao menú móbil
- **Solución**: Implementáronse media queries para aplicar diferentes estilos segundo o tamaño da pantalla

### Aliñamento de breadcrumbs
- **Problema**: Os breadcrumbs non se aliñaban co contido ao aplicar marxes personalizadas
- **Solución**: Aplicáronse os mesmos estilos de padding aos breadcrumbs que ao contido principal

## Próximos pasos

- Implementar un shortcode para o formato de casillas de verificación no changelog
- Mellorar a visualización dos boletíns en dispositivos móbiles
- Optimizar a carga de recursos estáticos para mellorar o rendemento
- Refinar a posición do TOC para que se integre mellor co deseño xeral