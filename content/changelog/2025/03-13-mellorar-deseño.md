---
date: 2025-03-13
title: Melloras na autenticación e deseño
description: Correccións na animación, deseño e autenticación da páxina
tags:
  - commit
  - web
authors:
  - name: pisco
    link: https://github.com/piscolabi
    image: https://github.com/piscolabi.png?size=40
toc: true
excludeSearch: true
sidebar:
  exclude: true
---

## Melloras implementadas hoxe

Realizáronse varias correccións e melloras no repositorio, centrándome principalmente na autenticación e no deseño responsivo da páxina.

### 1. Corrección da animación IA

- **Problema**: A animación non se mostraba correctamente en dispositivos móbiles
- **Solución**: Implementouse un detector de dispositivos móbiles para axustar o `VERTICAL_OFFSET`
  ```js
  // Función para detectar se o usuario está nun dispositivo móbil real
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  // Axustar o offset vertical baseado no tipo de dispositivo
  const VERTICAL_OFFSET = isMobileDevice() ? 8 : 4; // 8px para móbil, 4px para ordenador
  ```

### 2. Corrección da autenticación con contrasinal

- **Problema**: O borde vermello no input de contrasinal non funcionaba correctamente ao premer Enter
- **Solución**: Ningunha, vouno deixar tal e como está pero implementouse unha xestión unificada de eventos de autenticación
  ```js
  // Función para configurar todos os eventos de autenticación
  function setupAuthEvents() {
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-button');
    
    if (!passwordInput || !submitButton) {
      console.error("Non se atoparon os elementos de autenticación");
      return;
    }
    
    // Función para manexar calquera intento de verificación
    function handleVerificationAttempt(e) {
      if (e) e.preventDefault();
      verifyPassword();
    }
    
    // Engadir eventos
    submitButton.addEventListener('click', handleVerificationAttempt);
    passwordInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') handleVerificationAttempt(e);
    });
    
    // Foco automático
    setTimeout(() => passwordInput.focus(), 100);
  }
  ```

- Engadiuse un sistema de intervalo para forzar que o borde permaneza vermello durante toda a animación
  ```js
  // Asegurar que o borde permaneza vermello durante a animación
  let redBorderInterval = setInterval(() => {
    passwordInput.style.borderColor = "#EF4444";
  }, 50);
  
  // Eliminar o intervalo cando a animación termine
  setTimeout(() => {
    passwordInput.classList.remove('shake-animation');
    clearInterval(redBorderInterval);
  }, 700);
  ```

### 3. Melloras no deseño da páxina principal

- Optimizouse o espazo entre seccións para mellorar a visualización en dispositivos móbiles
- Axustouse o tamaño das tarxetas de características para unha mellor visualización
- Modificouse o título: "memorIA | Recursos académicos"

```md
<div class="hx-mt-4 hx-mb-6">
{{\< hextra/hero-headline >}}
  memorIA <div class="max-md:hx-h-2 md:hx-h-4"></div> repositorio colaborativo <br class="max-sm:hx-hidden"> de recursos académicos
{{\< /hextra/hero-headline >}}
</div>
```

Edit: (puxen as \ para que non se renderizara o div)

### 4. Corrección de problemas co Netlify

- Resolveuse o problema de porto no arquivo `netlify.toml` para o comando `netlify dev --live`
- Axustouse a configuración para que coincida co porto que usa Hugo por defecto

## Próximos pasos

- Comezar a engadir contido real ao repositorio
- Mirar se realmente vai todo igual en ordenador que en teléfono
- Implementar máis funcionalidades para a comunidade

Por fin parece que está todo funcionando correctamente. Agora pódese continuar co desenvolvemento do contido do repositorio.