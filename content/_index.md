---
title: memorIA | Recursos académicos
layout: hextra-home
---

<style>
  /* Aliñamento responsivo para todo o contido */
  .text-container, .badge-container {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
  }
  
  /* Estilo para o subtítulo personalizado */
  .custom-subtitle {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(160, 160, 175, 0.9);
    margin-top: 1rem;
  }
  
  @media (min-width: 768px) {
    .text-container, .badge-container {
      text-align: left;
      margin-left: 0;
      margin-right: 0;
    }
    
    .button-container {
      justify-content: flex-start;
    }
    
    .custom-subtitle {
      font-size: 1.1rem;
    }
  }
  
  /* Modo escuro */
  @media (prefers-color-scheme: dark) {
    .custom-subtitle {
      color: rgba(180, 180, 190, 0.8);
    }
  }
</style>

<div class="badge-container">
{{< hextra/hero-badge link="/changelog/" >}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  <span>Beta</span>
  {{< icon name="arrow-circle-right" attributes="height=14 class=hx-text-purple-500 style=fill:transparent!important;" >}}
{{< /hextra/hero-badge >}}
</div>

{{< two-column-hero >}}
<div class="hx-mt-4 hx-mb-4 text-container">
{{< hextra/hero-headline >}}
  memorIA
  <div class="hx-h-2 sm:hx-h-3"></div>
  <span class="hx-text-xl sm:hx-text-2xl md:hx-text-3xl hx-font-semibold hx-opacity-90">Repositorio de recursos académicos</span>
{{< /hextra/hero-headline >}}
</div>

<div class="hx-mb-8 text-container">
  <p class="custom-subtitle">
    Un espazo colaborativo onde atopar e compartir material de estudo, exercicios resoltos, apuntes e recursos didácticos. Proxecto de código aberto.
  </p>
</div>

<div class="hx-mb-12 button-container">
{{< hextra/hero-button text="Explorar Contidos" link="docs" class="hx-bg-purple-500 hover:hx-bg-purple-600" >}}
</div>
{{< /two-column-hero >}}


<div class="hx-mt-16"></div>
<div class="hx-mt-16"></div>

{{< hextra/feature-grid columns="3">}}
  {{< hextra/feature-card
    title="Apuntes Organizados"
    subtitle="Notas detalladas e organizadas por temas e materias."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="images/apuntes.png"
    imageClass="hx-top-[20%] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%, rgba(147, 51, 234, 0.2), rgba(28, 26, 36, 0)); box-shadow: 0 4px 20px rgba(147, 51, 234, 0.1);"
    icon="clipboard-list"
  >}}
  {{< hextra/feature-card
    title="Biblioteca de Vídeos"
    subtitle="Colección de vídeos explicativos e titoriais."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-lg:hx-min-h-[340px]"
    image="images/videos.png"
    imageClass="hx-top-[20%] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%, rgba(52, 211, 153, 0.2), rgba(28, 26, 36, 0)); box-shadow: 0 4px 20px rgba(52, 211, 153, 0.1);"
    icon="video-camera"
  >}}
  {{< hextra/feature-card
    title="Arquivos Descargables"
    subtitle="Documentos e materiais de estudo en distintos formatos listos para descargar (exames, apuntes, libros...)."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="images/arquivos.png"
    imageClass="hx-top-[20%] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%, rgba(59, 130, 246, 0.2), rgba(28, 26, 36, 0)); box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);"
    icon="download"
  >}}
  {{< hextra/feature-card
    title="Busca Rápida"
    subtitle="Atopa exactamente o que precisas co sistema de busca integrado."
    style="background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(28, 26, 36, 0)); box-shadow: 0 4px 20px rgba(147, 51, 234, 0.1);"
    icon="search"
  >}}
  {{< hextra/feature-card
    title="Actualización Constante"
    subtitle="Novos materiais e recursos engadidos regularmente."
    style="background: linear-gradient(45deg, rgba(16, 185, 129, 0.15), rgba(28, 26, 36, 0)); box-shadow: 0 4px 20px rgba(16, 185, 129, 0.1);"
    icon="refresh"
  >}}
  {{< hextra/feature-card
    title="Proxecto Open Source"
    subtitle="Todo o código dispoñible en GitHub para que calquera poida revisalo."
    style="background: linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(28, 26, 36, 0)); box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);"
    icon="code"
  >}}
  {{< hextra/feature-card
    title="Deseño Adaptable"
    subtitle="Navegación cómoda en calquera dispositivo, pantalla ou momento do día."
    style="background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(28, 26, 36, 0)); box-shadow: 0 4px 20px rgba(147, 51, 234, 0.1);"
    icon="device-mobile"
  >}}
  {{< hextra/feature-card
    title="Comunidade de Aprendizaxe"
    subtitle="Únete a un espazo colaborativo onde compartir coñecementos entre todos."
    style="background: linear-gradient(45deg, rgba(16, 185, 129, 0.15), rgba(28, 26, 36, 0)); box-shadow: 0 4px 20px rgba(16, 185, 129, 0.1);"
    icon="user-group"
  >}}
  {{< hextra/feature-card
    title="Contribucións Abertas"
    subtitle="Calquera pode axudar a mellorar ou engadir novos contidos."
    style="background: linear-gradient(45deg, rgba(14, 165, 233, 0.15), rgba(28, 26, 36, 0)); box-shadow: 0 4px 20px rgba(14, 165, 233, 0.1);"
    icon="pencil-alt"
  >}}
{{< /hextra/feature-grid >}}