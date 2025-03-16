(function() {
  const SESSION_EXPIRATION = 24 * 60 * 60 * 1000;
  const RETRY_DELAY = 2000;
  let isPasswordDisabled = false;

  // Comprobar dispoñibilidade de almacenamento
  function isStorageAvailable(type) {
    try {
      const storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) { return false; }
  }
  
  const hasLocalStorage = isStorageAvailable('localStorage');
  const hasSessionStorage = isStorageAvailable('sessionStorage');
  
  // Funcións para cookies
  function setCookie(name, value, days) {
    try {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Strict";
      return true;
    } catch (e) {
      console.error('Erro ao establecer cookie:', e);
      return false;
    }
  }
  
  function getCookie(name) {
    try {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    } catch (e) {
      console.error('Erro ao obter cookie:', e);
      return null;
    }
  }
  
  function deleteCookie(name) {
    try {
      document.cookie = name + '=; Max-Age=-99999999; path=/';
      return true;
    } catch (e) {
      console.error('Erro ao eliminar cookie:', e);
      return false;
    }
  }

  // Funcións de almacenamento unificadas
  function getStorageItem(key) {
    if (hasLocalStorage) {
      try { return localStorage.getItem(key); } 
      catch (e) { console.warn('Erro ao ler de localStorage:', e); }
    }
    
    if (hasSessionStorage) {
      try { return sessionStorage.getItem(key); } 
      catch (e) { console.warn('Erro ao ler de sessionStorage:', e); }
    }
    
    return getCookie(key);
  }
  
  function setStorageItem(key, value) {
    let success = false;
    
    if (hasLocalStorage) {
      try { localStorage.setItem(key, value); success = true; } 
      catch (e) { console.warn('Erro ao escribir en localStorage:', e); }
    }
    
    if (hasSessionStorage) {
      try { sessionStorage.setItem(key, value); success = true; } 
      catch (e) { console.warn('Erro ao escribir en sessionStorage:', e); }
    }
    
    if (setCookie(key, value, 1)) success = true;
    
    return success;
  }
  
  function removeStorageItem(key) {
    if (hasLocalStorage) {
      try { localStorage.removeItem(key); } 
      catch (e) { console.warn('Erro ao eliminar de localStorage:', e); }
    }
    
    if (hasSessionStorage) {
      try { sessionStorage.removeItem(key); } 
      catch (e) { console.warn('Erro ao eliminar de sessionStorage:', e); }
    }
    
    deleteCookie(key);
  }

  // Funcións de autenticación
  function isAuthenticated() {
    const authTimestamp = getStorageItem('authTimestamp');
    if (authTimestamp) {
      const currentTime = Date.now();
      if (currentTime - parseInt(authTimestamp) > SESSION_EXPIRATION) {
        setAuthenticated(false);
        return false;
      }
    } else if (getStorageItem('siteAuthenticated') === 'true') {
      setStorageItem('authTimestamp', Date.now().toString());
    }
    
    return getStorageItem('siteAuthenticated') === 'true';
  }
  
  function setAuthenticated(value) {
    try {
      if (value) {
        setStorageItem('siteAuthenticated', 'true');
        setStorageItem('authTimestamp', Date.now().toString());
      } else {
        removeStorageItem('siteAuthenticated');
        removeStorageItem('authTimestamp');
      }
    } catch (e) {
      console.error('Erro ao xestionar o estado de autenticación:', e);
    }
  }
  
  // UI: Formulario de autenticación
  function showAuthForm() {
    if (!window.AUTH_TEMPLATE) {
      console.error("Template de autenticación non atopado!");
      return;
    }
    
    if (document.getElementById('auth-overlay')) return;
    
    const authElement = document.createElement('div');
    authElement.id = 'auth-overlay';
    authElement.innerHTML = window.AUTH_TEMPLATE;
    document.body.appendChild(authElement);
    
    setupAuthEvents();
  }
  
  function setupAuthEvents() {
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-button');
    
    if (!passwordInput || !submitButton) {
      console.error("Non se atoparon os elementos do formulario!");
      return;
    }
    
    function handleVerificationAttempt(e) {
      if (e) e.preventDefault();
      verifyPassword();
    }

    submitButton.addEventListener('click', handleVerificationAttempt);
    passwordInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
        handleVerificationAttempt(e);
      }
    });

    setTimeout(() => passwordInput.focus(), 100);
  }

  // Verificación de contrasinal
  async function verifyPassword() {
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-button');

    if (!passwordInput || isPasswordDisabled) return;

    const password = passwordInput.value;
    let isCorrect = false;
    
    try {
      if (window.x7kR9p && typeof window.x7kR9p.q8bZ3 === 'function') {
        isCorrect = await window.x7kR9p.q8bZ3(password);
      } else {
        console.error("Sistema de verificación non dispoñible");
        return;
      }
    } catch (error) {
      console.error("Erro ao verificar a contrasinal:", error);
      return;
    }
    
    if (isCorrect) {
      setAuthenticated(true);
      showSuccessMessage();
    } else {
      showErrorMessage(passwordInput, submitButton);
    }
  }
  
  // Mostrar mensaxe de erro
  function showErrorMessage(passwordInput, submitButton) {
    if (!passwordInput) return;

    isPasswordDisabled = true;
    passwordInput.disabled = true;
    if (submitButton) submitButton.disabled = true;

    passwordInput.value = "";
    passwordInput.placeholder = "Contrasinal incorrecto";
    passwordInput.style.borderColor = "#EF4444";
    passwordInput.style.opacity = "0.7";
    if (submitButton) submitButton.style.opacity = "0.7";
    
    passwordInput.classList.remove('shake-animation');
    void passwordInput.offsetWidth; // Forzar reflow
    passwordInput.classList.add('shake-animation');
    
    const handleAnimationEnd = () => {
      passwordInput.classList.remove('shake-animation');
      passwordInput.removeEventListener('animationend', handleAnimationEnd);
    };
    
    passwordInput.addEventListener('animationend', handleAnimationEnd);

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

    setTimeout(() => {
      if (countdownInterval) clearInterval(countdownInterval);
      enablePasswordField(passwordInput, submitButton);
    }, RETRY_DELAY);
  }

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
  
  // Mostrar mensaxe de éxito
  function showSuccessMessage() {
    const authContainer = document.querySelector('.auth-content');
    if (!authContainer) return;
    
    authContainer.innerHTML = `
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#9333EA,#4338CA,#DB2777);z-index:1"></div>
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;color:white;width:100%">
        <div style="background:rgba(147,51,234,0.2);border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;margin-bottom:1.5rem">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(147,51,234,1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2 style="font-size:1.75rem;margin-bottom:1rem;background:linear-gradient(90deg,#9333EA,#4338CA);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-align:center">Acceso correcto</h2>
        <p style="font-size:1.125rem;margin-bottom:0.5rem;color:rgba(255,255,255,0.8);text-align:center">Redirixindo á páxina principal...</p>
        <div class="loading-bar" style="width:200px;height:4px;background:rgba(255,255,255,0.2);border-radius:2px;overflow:hidden;margin-top:1rem;position:relative">
          <div class="loading-progress" style="position:absolute;top:0;left:0;height:100%;width:0%;background:linear-gradient(90deg,#9333EA,#4338CA,#DB2777);border-radius:2px;transition:width 1.5s ease"></div>
        </div>
      </div>
    `;
    
    // Animar barra de progreso
    setTimeout(() => {
      const progressBar = document.querySelector('.loading-progress');
      if (progressBar) progressBar.style.width = '100%';
    }, 100);

    // Mostrar contido sen recargar
    setTimeout(() => {
      try {
        const overlay = document.getElementById('auth-overlay');
        if (overlay && overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
        
        const content = document.getElementById('site-content');
        if (content) {
          content.style.display = 'block';
          document.body.classList.add('auth-loaded');
          
          if (document.title === "Acceso Protexido") {
            const titleMeta = document.querySelector('meta[property="og:title"]');
            document.title = titleMeta ? titleMeta.getAttribute('content') : "Páxina Principal";
          }
        } else {
          window.location.href = window.location.pathname;
        }
      } catch (e) {
        console.error("Erro ao mostrar o contido:", e);
        window.location.href = window.location.pathname;
      }
    }, 1500);
  }

  // Inicialización
  function init() {
    if (isAuthenticated()) {
      const content = document.getElementById('site-content');
      if (content) content.style.display = 'block';
      document.body.classList.add('auth-loaded');
    } else {
      const content = document.getElementById('site-content');
      if (content) content.style.display = 'none';
      showAuthForm();
    }
  }

  // Executar inicialización
  init();
})();