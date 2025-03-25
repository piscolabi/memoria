// Template do formulario de autenticación
window.AUTH_TEMPLATE = `
<div class="auth-overlay" style="
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 20, 0.95);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: var(--font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif);
">
  <div class="auth-content" style="
    background: rgba(28, 26, 36, 0.6);
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    width: 90%;
    max-width: 420px;
    padding: 0;
    border: 1px solid rgba(147, 51, 234, 0.2);
    animation: fadeIn 0.5s ease-out;
    position: relative;
  ">
    <!-- Barra de cor superior -->
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
      padding: 2.5rem 2rem 2rem;
      text-align: center;
    ">
      <div style="
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      ">
        <!-- Ícono personalizado do hexágono co candado -->
        <div class="auth-animation" style="
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          margin-bottom: 1.75rem;
          margin-top: 0.5rem;
        ">
          <div class="auth-icon-bg" style="
            position: absolute;
            width: 140px;
            height: 140px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(67, 56, 202, 0.1) 70%, transparent 100%);
          "></div>
          
          <div class="auth-icon" style="
            position: relative;
            z-index: 2;
            color: rgba(147, 51, 234, 0.9);
          ">
            <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
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
        
        <h2 style="
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(90deg, #9333EA, #4338CA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        ">Acceso Protexido</h2>
        <p style="
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
        ">Introduce o contrasinal para acceder</p>
      </div>
      
      <div style="
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      ">
        <input 
          type="password" 
          id="password-input" 
          placeholder="Introduce o contrasinal" 
          style="
            width: 100%;
            padding: 0.875rem 1rem;
            border-radius: 0.5rem;
            background: rgba(15, 15, 20, 0.6);
            border: 1px solid rgba(147, 51, 234, 0.3);
            color: white;
            font-size: 1rem;
            transition: all 0.3s;
            outline: none;
          "
        >
        
        <button 
          id="submit-button" 
          style="
            width: 100%;
            padding: 0.875rem 1rem;
            border-radius: 0.5rem;
            background: linear-gradient(135deg, #9333EA, #4338CA);
            color: white;
            font-weight: 600;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
          "
        >
          <span>Acceder</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.7; }
    100% { transform: scale(1); opacity: 0.5; }
  }
  
  @keyframes shake-input {
    0%, 100% { transform: translateX(0); }
    15% { transform: translateX(-6px); }
    30% { transform: translateX(5px); }
    45% { transform: translateX(-4px); }
    60% { transform: translateX(3px); }
    75% { transform: translateX(-2px); }
    90% { transform: translateX(1px); }
  }
  
  .auth-animation {
    animation: float 6s infinite ease-in-out;
  }
  
  .auth-icon-bg {
    animation: pulse 3s infinite ease-in-out;
  }
  
  #password-input {
    transition: border-color 0.3s, box-shadow 0.3s;
    will-change: transform;
  }
  
  #password-input:focus {
    border-color: #9333EA !important;
    box-shadow: 0 0 0 2px rgba(147, 51, 234, 0.2) !important;
  }
  
  #submit-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(147, 51, 234, 0.4);
  }
  
  .shake-animation {
    animation: shake-input 0.7s ease-in-out !important;
    border-color: #EF4444 !important;
  }
</style>
`;