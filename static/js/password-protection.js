// Sistema de protección con contrasinal optimizado
(function() {
  // Tempo de expiración da sesión en milisegundos (24 horas)
  const SESSION_EXPIRATION = 24 * 60 * 60 * 1000;
  
  // Comprobar se o almacenamento está dispoñible
  function isStorageAvailable(type) {
    try {
      const storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // Determinar que métodos de almacenamento están dispoñibles
  const hasLocalStorage = isStorageAvailable('localStorage');
  const hasSessionStorage = isStorageAvailable('sessionStorage');
  
  // Funcións para manexar cookies
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

  // Función para obter un valor do almacenamento
  function getStorageItem(key) {
    if (hasLocalStorage) {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        console.warn('Erro ao ler de localStorage:', e);
      }
    }
    
    if (hasSessionStorage) {
      try {
        return sessionStorage.getItem(key);
      } catch (e) {
        console.warn('Erro ao ler de sessionStorage:', e);
      }
    }
    
    return getCookie(key);
  }
  
  // Función para establecer un valor no almacenamento
  function setStorageItem(key, value) {
    let success = false;
    
    if (hasLocalStorage) {
      try {
        localStorage.setItem(key, value);
        success = true;
      } catch (e) {
        console.warn('Erro ao escribir en localStorage:', e);
      }
    }
    
    if (hasSessionStorage) {
      try {
        sessionStorage.setItem(key, value);
        success = true;
      } catch (e) {
        console.warn('Erro ao escribir en sessionStorage:', e);
      }
    }
    
    // Sempre intentar establecer unha cookie como fallback
    if (setCookie(key, value, 1)) {
      success = true;
    }
    
    return success;
  }
  
  // Función para eliminar un valor do almacenamento
  function removeStorageItem(key) {
    if (hasLocalStorage) {
      try {
        localStorage.removeItem(key);
      } catch (e) {
        console.warn('Erro ao eliminar de localStorage:', e);
      }
    }
    
    if (hasSessionStorage) {
      try {
        sessionStorage.removeItem(key);
      } catch (e) {
        console.warn('Erro ao eliminar de sessionStorage:', e);
      }
    }
    
    deleteCookie(key);
  }

  // Función para comprobar se o usuario está autenticado e se a sesión está vixente
  function isAuthenticated() {
    // Comprobar se a sesión expirou (24 horas)
    const authTimestamp = getStorageItem('authTimestamp');
    if (authTimestamp) {
      const currentTime = Date.now();
      if (currentTime - parseInt(authTimestamp) > SESSION_EXPIRATION) {
        // A sesión expirou, eliminar datos
        setAuthenticated(false);
        return false;
      }
    } else if (getStorageItem('siteAuthenticated') === 'true') {
      // Se está autenticado pero non ten timestamp, engadir agora
      setStorageItem('authTimestamp', Date.now().toString());
    }
    
    return getStorageItem('siteAuthenticated') === 'true';
  }
  
  // Función para establecer a autenticación en todos os medios dispoñibles
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
  
  // Función para verificar a autenticación
  function checkAuthentication() {
    return isAuthenticated();
  }
  
  // Función para mostrar o formulario de autenticación
  function showAuthForm() {
    // Usar o template definido en auth-template.js
    if (!window.AUTH_TEMPLATE) {
      console.error("Template de autenticación non atopado!");
      return;
    }
    
    // Comprobar se xa existe o formulario
    if (document.getElementById('auth-overlay')) {
      return;
    }
    
    // Crear e engadir o elemento de autenticación ao body
    const authElement = document.createElement('div');
    authElement.id = 'auth-overlay';
    authElement.innerHTML = window.AUTH_TEMPLATE;
    document.body.appendChild(authElement);
    
    // Engadir event listeners
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-button');
    
    if (!passwordInput || !submitButton) {
      console.error("Non se atoparon os elementos do formulario!");
      return;
    }
    
    // Función para verificar a contrasinal
    async function verifyPassword() {
      const password = passwordInput.value;
      
      // Verificar usando o sistema ofuscado
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
        try {
          // Gardar a autenticación en todos os medios
          setAuthenticated(true);
          
          // Mostrar mensaxe de éxito antes de recargar
          const authContainer = document.querySelector('.auth-content');
          if (authContainer) {
            // Cambiar a un mensaxe de éxito
            authContainer.innerHTML = `
              <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #9333EA, #4338CA, #DB2777);
                z-index: 1;
              "></div>
              <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 2rem;
                color: white;
                width: 100%;
              ">
                <div style="
                  background: rgba(147, 51, 234, 0.2);
                  border-radius: 50%;
                  width: 80px;
                  height: 80px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-bottom: 1.5rem;
                ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(147, 51, 234, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 style="
                  font-size: 1.75rem;
                  margin-bottom: 1rem;
                  background: linear-gradient(90deg, #9333EA, #4338CA);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  text-align: center;
                ">Acceso correcto</h2>
                <p style="
                  font-size: 1.125rem;
                  margin-bottom: 0.5rem;
                  color: rgba(255, 255, 255, 0.8);
                  text-align: center;
                ">Redirixindo á páxina principal...</p>
                <div class="loading-bar" style="
                  width: 200px;
                  height: 4px;
                  background: rgba(255, 255, 255, 0.2);
                  border-radius: 2px;
                  overflow: hidden;
                  margin-top: 1rem;
                  position: relative;
                ">
                  <div class="loading-progress" style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 0%;
                    background: linear-gradient(90deg, #9333EA, #4338CA, #DB2777);
                    border-radius: 2px;
                    transition: width 1.5s ease;
                  "></div>
                </div>
              </div>
            `;
            
            // Animar a barra de progreso
            setTimeout(() => {
              const progressBar = document.querySelector('.loading-progress');
              if (progressBar) {
                progressBar.style.width = '100%';
              }
            }, 100);

            // Mostrar o contido sen recargar
            setTimeout(() => {
              try {
                // Eliminar o overlay de autenticación
                const overlay = document.getElementById('auth-overlay');
                if (overlay && overlay.parentNode) {
                  overlay.parentNode.removeChild(overlay);
                }
                
                // Mostrar o contido da páxina
                const content = document.getElementById('site-content');
                if (content) {
                  content.style.display = 'block';
                  document.body.classList.add('auth-loaded');
                  
                  // Restaurar o título orixinal
                  if (document.title === "Acceso Protexido") {
                    // Intentar obter o título do meta tag
                    const titleMeta = document.querySelector('meta[property="og:title"]');
                    if (titleMeta) {
                      document.title = titleMeta.getAttribute('content');
                    } else {
                      // Fallback a un título xenérico
                      document.title = "Páxina Principal";
                    }
                  }
                } else {
                  // Se non podemos mostrar o contido, recargar
                  window.location.href = window.location.pathname;
                }
              } catch (e) {
                console.error("Erro ao mostrar o contido:", e);
                // Fallback: recargar a páxina
                window.location.href = window.location.pathname;
              }
            }, 1800);
          } else {
            // Se non se atopa o contedor, intentar mostrar o contido directamente
            try {
              const overlay = document.getElementById('auth-overlay');
              if (overlay && overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
              }
              
              const content = document.getElementById('site-content');
              if (content) {
                content.style.display = 'block';
                document.body.classList.add('auth-loaded');
              } else {
                window.location.href = window.location.pathname;
              }
            } catch (e) {
              console.error("Erro ao mostrar o contido:", e);
              window.location.href = window.location.pathname;
            }
          }
          
          console.log("Autenticación correcta!");
        } catch (error) {
          console.error("Erro ao procesar autenticación correcta:", error);
          // Fallback: intentar mostrar o contido sen recargar
          try {
            const overlay = document.getElementById('auth-overlay');
            if (overlay) {
              overlay.style.display = 'none';
            }
            const content = document.getElementById('site-content');
            if (content) {
              content.style.display = 'block';
            }
          } catch (e) {
            console.error("Erro ao mostrar contido no fallback:", e);
          }
        }
      } else {
        // Mostrar erro (con animación)
        passwordInput.value = "";
        passwordInput.placeholder = "Contrasinal incorrecto";
        passwordInput.style.borderColor = "#EF4444";
        passwordInput.classList.remove('shake-animation');
        
        void passwordInput.offsetWidth;
        
        passwordInput.classList.add('shake-animation');
        
        // Eliminar a animación despois de completarse
        setTimeout(() => {
          passwordInput.classList.remove('shake-animation');
        }, 700);
        
        // Restaurar o placeholder despois dun tempo
        setTimeout(() => {
          passwordInput.placeholder = "Introduce o contrasinal";
          passwordInput.style.borderColor = ""; 
        }, 1500);
      }
    }
    
    // Engadir evento para o botón
    if (submitButton) {
      submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        verifyPassword();
      });
    }
    
    // Engadir evento para o input (presionar Enter)
    if (passwordInput) {
      passwordInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          verifyPassword();
        }
      });
      
      // Foco automático no input
      setTimeout(() => {
        passwordInput.focus();
      }, 100);
    }
    // Engadir evento para o input (presionar Enter)
    if (passwordInput) {
      passwordInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          verifyPassword();
        }
      });
      
      // Foco automático no input
      setTimeout(() => {
        passwordInput.focus();
      }, 100);
    }
  }
  
  // Inicialización
  function init() {
    try {
      // Comprobar se o contido xa está visible
      const content = document.getElementById('site-content');
      if (content && window.getComputedStyle(content).display === 'none') {
        // Comprobar autenticación
        if (checkAuthentication()) {
          // Se está autenticado, mostrar o contido
          content.style.display = 'block';
          document.body.classList.add('auth-loaded');
          
          // Comprobar se debemos renovar o timestamp
          const authTimestamp = getStorageItem('authTimestamp');
          if (authTimestamp) {
            const currentTime = Date.now();
            const elapsedTime = currentTime - parseInt(authTimestamp);
            
            // Se pasou máis da metade do tempo de expiración, renovar o timestamp
            if (elapsedTime > (SESSION_EXPIRATION / 2)) {
              setStorageItem('authTimestamp', currentTime.toString());
            }
          }
        } else {
          // Se non está autenticado, mostrar o formulario
          showAuthForm();
        }
      }
    } catch (error) {
      console.error("Erro ao inicializar:", error);
      // En caso de erro, intentar mostrar o formulario
      showAuthForm();
    }
  }
  
  // Comprobar se o documento xa está cargado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Comprobar periodicamente a expiración da sesión (cada minuto)
  setInterval(() => {
    try {
      if (!isAuthenticated()) {
        // Se a sesión expirou e o contido está visible, ocultalo e mostrar o formulario
        const content = document.getElementById('site-content');
        const overlay = document.getElementById('auth-overlay');
        
        if (content && !overlay) {
          content.style.display = 'none';
          document.body.classList.remove('auth-loaded');
          showAuthForm();
        }
      }
    } catch (error) {
      console.error("Erro na comprobación periódica:", error);
    }
  }, 60000); // 60 segundos
})();