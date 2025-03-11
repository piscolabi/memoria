(function() {
    // (non modificar estas constantes)
    const _0xd72f = [
      'R2FsZWdvUmVwb3NpdG9yaW8yMDI1', // Sal en Base64
      '==QZtFmb', 'vd2bQBCf', 'kRWYsN2c', 'hBCZpVmb', 'pxWY2JXZ',  // Fragmentos de datos confusos
      '5dc7a', '85b2c9', '4e1f3b', '2d6a08', // Fragmentos do hash (non en orde)
      'zJXZ39Gd', 'jF2czVmcj', 'NHel5WZ', // Máis confusión
      'd78c98d6aa0392bc48b101a9525a469f20ec4f764dccd928e2ca325bc21a5b0', // Hash orixinal (obsoleto, só para confundir)
      '9cb3', '67f1d', 'e02a5' // Máis fragmentos
    ];
    
    // Matriz de iteracións dinámicas (baseada na data actual)
    const _iterBase = new Date().getDate() + 7;
    
    // Funcións para manexar cookies
    function setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Strict";
    }
    
    function getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    
    function deleteCookie(name) {
      document.cookie = name + '=; Max-Age=-99999999; path=/';
    }

    // Función para corrixir inconsistencias no estado de autenticación
    function fixAuthenticationState() {
        const cookieAuth = getCookie('siteAuthenticated') === 'true';
        const localAuth = localStorage.getItem('siteAuthenticated') === 'true';
        const sessionAuth = sessionStorage.getItem('siteAuthenticated') === 'true';
        
        // Se hai inconsistencias, establecer todo ao valor máis común
        if (cookieAuth !== localAuth || localAuth !== sessionAuth || cookieAuth !== sessionAuth) {
          console.log("Detectada inconsistencia no estado de autenticación, corrixindo...");
          console.log("- Cookie:", cookieAuth);
          console.log("- localStorage:", localAuth);
          console.log("- sessionStorage:", sessionAuth);
          
          // Contar cantos son true
          const trueCount = (cookieAuth ? 1 : 0) + (localAuth ? 1 : 0) + (sessionAuth ? 1 : 0);
          
          // Se a maioría son true, establecer todo a true
          if (trueCount >= 2) {
            console.log("Resolvendo a inconsistencia: establecendo todo a TRUE");
            setAuthenticated(true);
          } else {
            console.log("Resolvendo a inconsistencia: establecendo todo a FALSE");
            setAuthenticated(false);
          }
        }
      }


    
    // Función para comprobar se o usuario está autenticado (usando calquera método)
    function isAuthenticated() {
      return getCookie('siteAuthenticated') === 'true' || 
             localStorage.getItem('siteAuthenticated') === 'true' || 
             sessionStorage.getItem('siteAuthenticated') === 'true';
    }
    
    // Función para establecer a autenticación en todos os medios dispoñibles
    function setAuthenticated(value) {
      try {
        // Establecer cookie (7 días de duración)
        setCookie('siteAuthenticated', value ? 'true' : '', value ? 7 : -1);
      } catch (e) {
        console.error('Erro ao establecer cookie:', e);
      }
      
      try {
        // Establecer en localStorage para compartir entre ventás
        if (value) {
          localStorage.setItem('siteAuthenticated', 'true');
        } else {
          localStorage.removeItem('siteAuthenticated');
        }
      } catch (e) {
        console.error('Erro ao establecer localStorage:', e);
      }
      
      try {
        // Establecer en sessionStorage para compatibilidade
        if (value) {
          sessionStorage.setItem('siteAuthenticated', 'true');
        } else {
          sessionStorage.removeItem('siteAuthenticated');
        }
      } catch (e) {
        console.error('Erro ao establecer sessionStorage:', e);
      }
    }
    
    // Función para transformar unha mensaxe con múltiples pasadas
    async function secureTransform(message) {
      try {
        // Decodificar o sal desde Base64
        const salt = atob(_0xd72f[0]);
        
        // Aplicar transformacións múltiples
        let result = message;
        
        // 1. Primeira transformación: Engadir sal
        result = salt + ":" + result + ":" + salt.split('').reverse().join('');
        
        // 2. Primeira pasada de hash
        const encoder = new TextEncoder();
        let hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(result));
        
        // 3. Iteracións múltiples (baseadas na data para dificultar a análise)
        for (let i = 0; i < _iterBase; i++) {
          // Combinar o hash actual co sal e un contador
          const iterData = new Uint8Array([
            ...new Uint8Array(hashBuffer),
            ...encoder.encode(salt + i.toString())
          ]);
          // Aplicar outro hash
          hashBuffer = await crypto.subtle.digest('SHA-256', iterData);
        }
        
        // 4. Converter a hexadecimal
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
      } catch (error) {
        console.error('Erro na transformación segura', error);
        // En caso de erro, usar un hash simple como fallback
        return sha256(message);
      }
    }
    
    // Función de hash simple (como fallback)
    async function sha256(message) {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
    
    // Función para verificar a contrasinal
    async function verifyPassword(input) {
      // Hash correcto (reconstruído dinamicamente)
      // Este hash corresponde á contrasinal real transformada co algoritmo de arriba
      // Nota: Debes xerar este hash coa túa contrasinal usando o algoritmo secureTransform
      const fragmentos = [
        '21e17f50c7', '68af012e55', '97116b5582', 
        'd2d99060bf', 'e1c309a443', 'bdc66aba84', '103c'
      ];
      
      // Permutar os fragmentos para dificultar a análise estática
      const correctHash = fragmentos.join('');
      
      try {
        // Transformar a entrada do usuario
        const transformedInput = await secureTransform(input);
        
        // Comparar de forma segura (tempo constante para evitar ataques de tempo)
        let result = 0;
        for (let i = 0; i < correctHash.length; i++) {
          result |= (transformedInput.charCodeAt(i) ^ correctHash.charCodeAt(i));
        }
        
        return result === 0;
      } catch (error) {
        console.error('Erro ao verificar a contrasinal:', error);
        return false;
      }
    }
    
    // Función principal de autenticación
    function initAuthentication() {
      // IMPORTANTE: Comprobar primeiro se xa estamos autenticados
      if (isAuthenticated()) {
        console.log("Usuario xa autenticado, mostrando contido");
        // Xa autenticado, asegurarse de que o contido é visible
        document.addEventListener('DOMContentLoaded', function() {
          const siteContent = document.getElementById('site-content');
          if (siteContent) {
            siteContent.style.display = 'block';
          }
        });
        return; // Importante: saír da función se xa estamos autenticados
      }
      
      // Se chegamos aquí, non estamos autenticados
      console.log("Usuario non autenticado, mostrando formulario de login");
      
      // Executar cando o DOM estea cargado
      document.addEventListener('DOMContentLoaded', function() {
        // Ocultar o contido da páxina
        const siteContent = document.getElementById('site-content');
        if (siteContent) {
          siteContent.style.display = 'none';
        }
        
        // Non limpar todo o body, só ocultar o contido principal
        document.title = "Acceso Protexido";
        
        // Crear o formulario de login
        const loginForm = document.createElement('div');
        
        // Comprobar se o template está dispoñible
        if (window.AUTH_TEMPLATE) {
          loginForm.innerHTML = window.AUTH_TEMPLATE;
        } else {
          // Template de emerxencia
          loginForm.innerHTML = `
            <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#f5f5f7;display:flex;align-items:center;justify-content:center;z-index:9999;">
              <div style="background:white;padding:30px;border-radius:10px;text-align:center;max-width:400px;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
                <h2 style="margin-bottom:20px;color:#333;">Acceso protexido</h2>
                <input id="password-input" type="password" placeholder="Escriba a contrasinal" style="width:100%;padding:12px;margin-bottom:15px;border-radius:4px;border:1px solid #ddd;">
                <button id="submit-button" style="background:#4338CA;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;width:100%;">Acceder</button>
              </div>
            </div>
          `;
        }
        
        document.body.appendChild(loginForm);
        
        // Enfocar o input
        setTimeout(() => {
          const passwordInput = document.getElementById('password-input');
          if (passwordInput) {
            passwordInput.focus();
          }
        }, 100);
        
        // Engadir event listeners
        const submitButton = document.getElementById('submit-button');
        const passwordInput = document.getElementById('password-input');
        
        if (submitButton) {
          submitButton.addEventListener('click', checkPassword);
        }
        
        if (passwordInput) {
          passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
              checkPassword();
            }
          });
        }
        
        async function checkPassword() {
          const passwordInput = document.getElementById('password-input');
          if (!passwordInput) return;
          
          const enteredPassword = passwordInput.value;
          
          try {
            console.log("Verificando contrasinal...");
            
            // Verificar a contrasinal
            const isValid = await verifyPassword(enteredPassword);
            console.log("Resultado da verificación:", isValid);
            
            if (isValid) {
              console.log("Contrasinal correcta, establecendo autenticación");
              
              // Autenticación correcta - establecer en todos os medios dispoñibles
              setAuthenticated(true);
              
              // IMPORTANTE: Mostrar un mensaxe antes de recargar
              const loginContainer = document.querySelector('.auth-container') || loginForm;
              if (loginContainer) {
                loginContainer.innerHTML = `
                  <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#f5f5f7;display:flex;align-items:center;justify-content:center;z-index:9999;">
                    <div style="background:white;padding:30px;border-radius:10px;text-align:center;max-width:400px;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
                      <h2 style="margin-bottom:20px;color:#333;">Acceso correcto</h2>
                      <p style="margin-bottom:20px;">Cargando o contido da páxina...</p>
                      <div style="width:50px;height:50px;border:5px solid #f3f3f3;border-top:5px solid #4338CA;border-radius:50%;margin:0 auto;animation:spin 1s linear infinite;"></div>
                    </div>
                  </div>
                  <style>@keyframes spin {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}}</style>
                `;
              }
              
              // Recargar a páxina despois de mostrar o mensaxe (con pequeno retraso)
              setTimeout(function() {
                window.location.reload();
              }, 800);
            } else {
              // Contrasinal incorrecta
              passwordInput.value = '';
              passwordInput.style.borderColor = '#DB2777';
              passwordInput.style.boxShadow = '0 0 0 2px rgba(219, 39, 119, 0.2)';
              passwordInput.placeholder = 'Contrasinal incorrecta';
              
              // Efecto de sacudida no input
              passwordInput.animate([
                { transform: 'translateX(-6px)' },
                { transform: 'translateX(6px)' },
                { transform: 'translateX(-6px)' },
                { transform: 'translateX(6px)' },
                { transform: 'translateX(-3px)' },
                { transform: 'translateX(3px)' },
                { transform: 'translateX(0)' }
              ], {
                duration: 500,
                easing: 'ease-in-out'
              });
              
              setTimeout(() => {
                passwordInput.style.borderColor = '';
                passwordInput.style.boxShadow = '';
                passwordInput.placeholder = 'Escriba a contrasinal';
              }, 2000);
            }
          } catch (error) {
            console.error('Erro ao verificar a contrasinal:', error);
          }
        }
      });
    }
    
    // Función para cerrar sesión (podes chamar a isto desde un botón)
    window.logoutSite = function() {
      setAuthenticated(false);
      window.location.reload();
    };
    
    // Verificar o estado de autenticación ao inicio
    console.log("Estado de autenticación:");
    console.log("- Cookie:", getCookie('siteAuthenticated'));
    console.log("- localStorage:", localStorage.getItem('siteAuthenticated'));
    console.log("- sessionStorage:", sessionStorage.getItem('siteAuthenticated'));
    
    // Corrixir calquera inconsistencia no estado de autenticación
    fixAuthenticationState();

    // Comprobar se o template está cargado e iniciar a autenticación
    if (window.authTemplateLoaded) {
      initAuthentication();
    } else {
      // Esperar a que o template estea cargado
      window.addEventListener('load', function checkTemplate() {
        if (window.authTemplateLoaded) {
          window.removeEventListener('load', checkTemplate);
          initAuthentication();
        } else {
            console.error("Erro: auth-template.js non está cargado correctamente");
            // Intentar cargar de novo despois dun tempo
            setTimeout(function() {
              if (window.authTemplateLoaded) {
                initAuthentication();
              } else {
                console.error("Erro crítico: Non se puido cargar o template de autenticación");
                // Usar un template de emerxencia e iniciar a autenticación
                window.AUTH_TEMPLATE = `
                  <div class="auth-container" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:9999;">
                    <div style="background:white;padding:20px;border-radius:10px;text-align:center;max-width:400px;">
                      <h2 style="margin-bottom:20px;">Acceso protexido</h2>
                      <input id="password-input" type="password" placeholder="Escriba a contrasinal" style="width:100%;padding:10px;margin-bottom:15px;border-radius:4px;border:1px solid #ddd;">
                      <button id="submit-button" style="background:#4338CA;color:white;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;">Acceder</button>
                    </div>
                  </div>
                `;
                initAuthentication();
              }
            }, 1000);
          }
        });
      }
  })();