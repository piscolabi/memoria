---
date: 2025-03-16
title: Interface de usuario e autenticación
description: Optimización do deseño responsivo e solución de problemas na verificación de contrasinais
tags:
  - commit
  - frontend
  - autenticación
  - deseño
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

Nesta actualización realizáronse melloras significativas no deseño responsivo da páxina principal e resolveuse un problema crítico no sistema de autenticación que impedía a correcta visualización da animación de erro ao usar a tecla Enter.

{{< callout type="info" >}}
Esta actualización céntrase principalmente en mellorar a experiencia de usuario en dispositivos móbiles e garantir unha autenticación consistente en todos os dispositivos.
{{< /callout >}}

## Melloras implementadas

### Deseño responsivo da páxina principal

- **Optimización da cabeceira**: Refinouse a disposición dos elementos na cabeceira para mellorar a experiencia en dispositivos móbiles e de escritorio
- **Alixeiramento de textos**: Optimizouse o subtítulo para mellorar a lexibilidade en diferentes tamaños de pantalla
- **Botón de acción principal**: Centrouse o botón "Explorar Contidos" para mellorar a súa visibilidade e accesibilidade


### Código CSS optimizado
```css
/* Estilos base para todas as pantallas */
.badge-container, .text-container, .title-container {
  text-align: left;
}

.badge-container {
  display: flex;
  justify-content: left;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 400px;
  max-width: 100%;
}

.custom-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(120, 120, 120, 0.85);
  margin-top: 1rem;
  max-width: 400px;
  text-align: left;
}

/* Media queries */
@media (min-width: 768px) {
  .custom-subtitle {
    font-size: 1.2rem;
    max-width: 430px;
  }
  
  .button-container {
    width: 430px;
  }
}
```

### Separación entre elementos
Engadiuse espazo adicional entre o botón principal e a animación en dispositivos móbiles:
```html
<div class="md:hx-hidden hx-h-8"></div>
```


## Correccións de erros

### Sistema de autenticación

{{< callout type="warning" >}}
**Problema q levo como 4 días con el**: A animación de "shake" e o cambio de cor do borde non funcionaban correctamente ao usar a tecla Enter para enviar o formulario de autenticación.
{{< /callout >}}

- **Problema**: Identificouse que a animación de "shake" e o cambio de cor do borde non se aplicaban correctamente cando se usaba a tecla Enter para enviar o formulario
- **Causa**: Comportamento inconsistente entre a activación por botón e por teclado
- **Solución**: Non din solucionado nada e foi pura chorra pq implementei un sistema de temporizador para deshabilitar temporalmente o campo de contrasinal e mostra unha conta atrás, dando tempo suficiente ao navegador para procesar correctamente os cambios visuais, e así non toco máis nada porque funciona


### Implementación do temporizador
```js
// Constantes e variables para o sistema de temporizador
const RETRY_DELAY = 3000; // 3 segundos de espera entre intentos
let isPasswordDisabled = false; // Variable para controlar se o campo está desactivado

// Función para mostrar o erro con temporizador
function showErrorMessage(passwordInput, submitButton) {
  if (!passwordInput) return;
  
  // Desactivar o campo e o botón
  isPasswordDisabled = true;
  passwordInput.disabled = true;
  if (submitButton) submitButton.disabled = true;
  
  // Cambiar o estilo para indicar desactivación
  passwordInput.value = "";
  passwordInput.placeholder = "Contrasinal incorrecto";
  passwordInput.style.borderColor = "#EF4444";
  passwordInput.style.opacity = "0.7";
  if (submitButton) submitButton.style.opacity = "0.7";
  
  // Aplicar animación de shake
  passwordInput.classList.remove('shake-animation');
  void passwordInput.offsetWidth; // Forzar reflow
  passwordInput.classList.add('shake-animation');
  
  // Iniciar temporizador de conta atrás
  let timeLeft = Math.floor(RETRY_DELAY / 1000);
  passwordInput.placeholder = `Espera ${timeLeft}s para volver a intentar`;
  
  const countdownInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      enablePasswordField(passwordInput, submitButton);
    } else {
      passwordInput.placeholder = `Espera ${timeLeft}s para volver a intentar`;
    }
  }, 1000);
  
  // Habilitar o campo despois do tempo de espera
  setTimeout(() => {
    if (countdownInterval) clearInterval(countdownInterval);
    enablePasswordField(passwordInput, submitButton);
  }, RETRY_DELAY);
}
```

### Función para reactivar o campo
```js
// Función para volver a habilitar o campo de contrasinal
function enablePasswordField(passwordInput, submitButton) {
  isPasswordDisabled = false;
  
  if (passwordInput) {
    passwordInput.disabled = false;
    passwordInput.placeholder = "Introduce o contrasinal";
    passwordInput.style.borderColor = "";
    passwordInput.style.opacity = "1";
    passwordInput.focus();
  }
  
  if (submitButton) {
    submitButton.disabled = false;
    submitButton.style.opacity = "1";
  }
}
```


## Cambios técnicos

### Optimización de rendemento

- **Mellorada a xestión de eventos**: Refinouse a captura de eventos de teclado para garantir un comportamento consistente entre diferentes métodos de entrada
- **Optimización de animacións**: Implementouse a propiedade CSS `will-change: transform` para mellorar o rendemento das animacións

```css
#password-input {
  transition: border-color 0.3s, box-shadow 0.3s;
  will-change: transform; /* Mellora o rendemento da animación */
}
```

## Próximos pasos

- Refinar o deseño das tarxetas de cursos para incluír máis información sen comprometer a estética
- Optimizar o código JavaScript para reducir o tamaño e mellorar o rendemento
- Facer un README para informar de como cambiar contidos e os estándares