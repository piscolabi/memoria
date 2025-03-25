let modalAberto = false;
let teclaPremida = false;

function mostrarMensaxeRepositorio() {
  if (modalAberto) return false;
  modalAberto = true;
  
  function detectarTemaActual() {
    // Método 1: Comprobar clases
    if (document.documentElement.classList.contains('dark') || 
        document.body.classList.contains('dark')) {
      return true;
    }
    
    // Método 2: Analizar cor de fondo
    const bodyColor = window.getComputedStyle(document.body).backgroundColor;
    if (bodyColor) {
      let rgb = bodyColor;
      if (bodyColor.startsWith('rgba')) {
        const parts = bodyColor.match(/rgba?\((\d+), (\d+), (\d+)/);
        if (parts) rgb = `rgb(${parts[1]}, ${parts[2]}, ${parts[3]})`;
      }
      
      if (rgb.startsWith('rgb')) {
        const parts = rgb.match(/rgb\((\d+), (\d+), (\d+)\)/);
        if (parts) {
          const luminosity = (0.299 * parseInt(parts[1]) + 0.587 * parseInt(parts[2]) + 0.114 * parseInt(parts[3])) / 255;
          return luminosity < 0.5;
        }
      }
    }
    // Método 3: Preferencia do sistema
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  const isDarkMode = detectarTemaActual();
  
  // Crear elementos
  const modal = document.createElement('div');
  modal.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(15,15,20,0.95);backdrop-filter:blur(10px);z-index:9999;display:flex;align-items:center;justify-content:center;font-family:var(--font-family,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif);animation:fadeIn 0.5s ease-out`;
  
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `background:${isDarkMode?'rgba(28,26,36,0.6)':'rgba(255,255,255,0.9)'};box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);width:90%;max-width:420px;padding:0;border:1px solid rgba(147,51,234,0.2);position:relative;overflow:hidden;border-radius:16px`;
  
  modalContent.innerHTML = `
    <div style="position:relative;overflow:hidden">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#9333EA,#4338CA,#DB2777);z-index:1"></div>
      
      <div style="padding:2.5rem 2rem 2rem;text-align:center">
        <div style="margin-bottom:1.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center">
          <div class="auth-animation" style="position:relative;display:flex;align-items:center;justify-content:center;width:120px;height:120px;margin-bottom:1.75rem;margin-top:0.5rem">
            <div class="auth-icon-bg" style="position:absolute;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(147,51,234,0.2) 0%,rgba(67,56,202,0.1) 70%,transparent 100%)"></div>
            
            <div class="auth-icon" style="position:relative;z-index:2;color:rgba(147,51,234,0.9)">
              <svg viewBox="0 0 24 24" width="80" height="80" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
          </div>
          
          <h2 style="font-size:1.75rem;font-weight:700;margin-bottom:0.5rem;background:linear-gradient(90deg,#9333EA,#4338CA);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Código Fonte Dispoñible</h2>
          
          <p style="font-size:1.125rem;color:${isDarkMode?'rgba(255,255,255,0.7)':'rgba(28,26,36,0.8)'};margin-bottom:1.5rem">Este proxecto é de código aberto e podes acceder ao repositorio completo en GitHub, onde o código está mellor organizado.</p>
        </div>
        
        <div style="display:flex;flex-direction:column;gap:1.5rem">
          <a href="https://github.com/piscolabi/memoria" target="_blank" style="width:100%;padding:0.875rem 1rem;border-radius:0.5rem;background:linear-gradient(135deg,#9333EA,#4338CA);color:white;font-weight:600;font-size:1rem;border:none;cursor:pointer;transition:all 0.3s;display:flex;align-items:center;justify-content:center;gap:0.5rem;box-shadow:0 4px 12px rgba(147,51,234,0.3);text-decoration:none">
            <span>Ver no GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m5 12h14"></path><path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          
          <button id="cerrarModal" style="width:100%;padding:0.875rem 1rem;border-radius:0.5rem;background:${isDarkMode?'rgba(15,15,20,0.6)':'rgba(240,240,250,0.8)'};color:${isDarkMode?'rgba(255,255,255,0.8)':'rgba(28,26,36,0.9)'};font-weight:600;font-size:1rem;border:1px solid ${isDarkMode?'rgba(147,51,234,0.2)':'rgba(147,51,234,0.15)'};cursor:pointer;transition:all 0.3s;display:flex;align-items:center;justify-content:center">
            Volver á páxina
          </button>
        </div>
      </div>
    </div>
  `;
  
  // Estilos
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}
    @keyframes float{0%{transform:translateY(0px)}50%{transform:translateY(-8px)}100%{transform:translateY(0px)}}
    @keyframes pulse{0%{transform:scale(1);opacity:0.5}50%{transform:scale(1.1);opacity:0.7}100%{transform:scale(1);opacity:0.5}}
    .auth-animation{animation:float 6s infinite ease-in-out}
    .auth-icon-bg{animation:pulse 3s infinite ease-in-out}
    #cerrarModal:hover{background:${isDarkMode?'rgba(25,25,35,0.8)':'rgba(230,230,250,0.9)'};transform:translateY(-2px)}
    a:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgba(147,51,234,0.4)}
  `;

  // Engadir ao DOM
  document.head.appendChild(style);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  function pecharModal() {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
      document.head.removeChild(style);
      modalAberto = false;
    }
  }
  
  document.getElementById('cerrarModal').addEventListener('click', pecharModal);
  document.addEventListener('keydown', function closeOnEsc(e) {
    if (e.key === 'Escape') {
      pecharModal();
      document.removeEventListener('keydown', closeOnEsc);
    }
  });
  
  // Observer para cambios de tema
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (['class', 'data-theme', 'style'].includes(mutation.attributeName) && document.body.contains(modal)) {
        pecharModal();
        mostrarMensaxeRepositorio();
        break;
      }
    }
  });
  
  observer.observe(document.documentElement, { attributes: true });
  observer.observe(document.body, { attributes: true });
  
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('keydown', function(e) {
    if (teclaPremida) return;
    
    const key = e.key.toLowerCase();
    if ((e.ctrlKey && key === 'u') || key === 'f12' || (e.ctrlKey && key === 's')) {
      e.preventDefault();
      teclaPremida = true;
      mostrarMensaxeRepositorio();
      return false;
    }
  });
  
  document.addEventListener('keyup', function() {
    teclaPremida = false;
  });
});