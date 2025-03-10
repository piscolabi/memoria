// Definir a constante AUTH_TEMPLATE para que estea accesible globalmente
window.AUTH_TEMPLATE = `
  <div class="auth-container">
    <div class="auth-content">
      <div class="auth-animation">
        <div class="auth-icon-bg"></div>
        <div class="auth-icon">
          <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <defs>
              <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#9333EA" />
                <stop offset="50%" stop-color="#4338CA" />
                <stop offset="100%" stop-color="#DB2777" />
              </linearGradient>
              <mask id="hexHole">
                <rect width="100%" height="100%" fill="white"/>
                <path fill="black" d="M90,45 L50,65 L50,115 L90,135 L130,115 L130,65 Z" />
              </mask>
              <clipPath id="hexClip">
                <path d="M90,25 L30,55 L30,125 L90,155 L150,125 L150,55 Z" />
              </clipPath>
            </defs>
            
            <path fill="url(#gradientFill)" d="M90,25 L30,55 L30,125 L90,155 L150,125 L150,55 Z" mask="url(#hexHole)" />
            
            <path fill="none" stroke="currentColor" stroke-width="2" d="M90,45 L50,65 L50,115 L90,135 L130,115 L130,65 Z" />
            
            <g clip-path="url(#hexClip)">
              <path d="M90,15 L90,45" stroke="currentColor" stroke-width="2" />
              <path d="M20,45 L50,65" stroke="currentColor" stroke-width="2" />
              <path d="M160,45 L130,65" stroke="currentColor" stroke-width="2" />
              <path d="M20,135 L50,115" stroke="currentColor" stroke-width="2" />
              <path d="M160,135 L130,115" stroke="currentColor" stroke-width="2" />
              <path d="M90,165 L90,135" stroke="currentColor" stroke-width="2" />
            </g>
            
            <!-- Candado centrado dentro do hexágono -->
            <path d="M90,67 C83.5,67 78,72.5 78,79 L78,90 L75,90 C73.3,90 72,91.3 72,93 L72,110 C72,111.7 73.3,113 75,113 L105,113 C106.7,113 108,111.7 108,110 L108,93 C108,91.3 106.7,90 105,90 L102,90 L102,79 C102,72.5 96.5,67 90,67 Z M90,71 C94.4,71 98,74.6 98,79 L98,90 L82,90 L82,79 C82,74.6 85.6,71 90,71 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <div class="auth-message">
        <h2>Acceso protexido</h2>
        <p>Esta páxina require contrasinal para acceder ao contido.</p>
        <div class="auth-form">
          <input id="password-input" type="password" placeholder="Escriba a contrasinal" autofocus>
          <button id="submit-button" class="primary-btn">Acceder</button>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .auth-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(15, 15, 20, 0.95);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      font-family: var(--font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif);
    }
    
    .auth-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3rem;
      padding: 3rem;
      border-radius: 12px;
      background: rgba(28, 26, 36, 0.6);
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      max-width: 90%;
      width: 700px;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(147, 51, 234, 0.2);
    }
    
    .auth-content::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #9333EA, #4338CA, #DB2777);
      z-index: 1;
    }
    
    .auth-animation {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: float 6s infinite ease-in-out;
    }
    
    .auth-icon-bg {
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(67, 56, 202, 0.1) 70%, transparent 100%);
      animation: pulse 3s infinite ease-in-out;
    }
    
    .auth-icon {
      position: relative;
      z-index: 2;
      color: rgba(147, 51, 234, 0.9);
    }
    
    .auth-message {
      text-align: left;
      z-index: 2;
    }
    
    .auth-message h2 {
      font-size: 2.25rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      background: linear-gradient(90deg, #9333EA, #4338CA);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    
    .auth-message p {
      font-size: 1.125rem;
      margin: 0 0 1.75rem 0;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }
    
    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .auth-form input {
      padding: 0.75rem 1rem;
      border-radius: 6px;
      border: 1px solid rgba(147, 51, 234, 0.3);
      background: rgba(15, 15, 20, 0.6);
      color: white;
      font-size: 1rem;
      outline: none;
      transition: all 0.3s ease;
    }
    
    .auth-form input:focus {
      border-color: #9333EA;
      box-shadow: 0 0 0 2px rgba(147, 51, 234, 0.2);
    }
    
    .primary-btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 500;
      transition: all 0.3s ease;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1rem;
      background: linear-gradient(135deg, #9333EA, #4338CA);
      color: white;
      box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
    }
    
    .primary-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(147, 51, 234, 0.4);
    }
    
    .primary-btn:active {
      transform: translateY(-1px);
    }
    
    @media (max-width: 768px) {
      .auth-content {
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
      }
      
      .auth-message {
        text-align: center;
      }
      
      .auth-message h2 {
        font-size: 1.75rem;
      }
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.1); opacity: 0.7; }
      100% { transform: scale(1); opacity: 0.5; }
    }
  </style>
`;

// Indicar que o template está cargado
window.authTemplateLoaded = true;
console.log("Template de autenticación cargado correctamente");