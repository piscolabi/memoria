(function() {
  // Función para atopar o contenedor con ID que comeza por "wordContainer-"
  function findWordContainer() {
    const containers = document.querySelectorAll('[id^="wordContainer-"]');
    if (containers.length > 0) {
      return containers[0];
    }
    return null;
  }
  
  // Función para detectar se o usuario está nun dispositivo móbil real
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  // cte para subir ou baixar pixeles das palabras (valores negativos suben, positivos baixan)
  const VERTICAL_OFFSET = isMobileDevice() ? 8 : 4; // 8px para móbil, 4px para ordenador
  
  const words = ["memor", "estud", "teor", "bibliograf", "emprend"];
  const container = findWordContainer();
  
  if (!container) {
    console.error("Non se atopou o contenedor de palabras");
    return;
  }
  
  // Crear elementos para cada palabra
  words.forEach((word) => {
    const wordElement = document.createElement('div');
    wordElement.className = 'word';
    wordElement.textContent = word;
    container.appendChild(wordElement);
  });
  
  const wordElements = Array.from(container.querySelectorAll('.word'));
  let currentIndex = 0;
  let isAnimating = false;
  
  // Asegurar que todos os elementos estean na posición inicial
  wordElements.forEach(word => {
    word.style.opacity = "0";
    word.style.transform = `translateY(80px)`;
  });
  
  function showNextWord() {
    if (isAnimating) return;
    
    // Ocultar a palabra actual
    if (currentIndex < wordElements.length) {
      const currentWord = wordElements[currentIndex];
      isAnimating = true;
      
      // Animar saída
      setTimeout(() => {
        currentWord.style.opacity = "0";
        currentWord.style.transform = `translateY(-80px)`;
        
        // Preparar para a seguinte animación
        setTimeout(() => {
          isAnimating = false;
          
          // Incrementar índice
          currentIndex = (currentIndex + 1) % wordElements.length;
          
          // Se chegamos ao final, resetear todas as palabras
          if (currentIndex === 0) {
            wordElements.forEach(word => {
              word.style.opacity = "0";
              word.style.transform = `translateY(80px)`;
            });
          }
          
          showNextWord();
        }, 1200); // 1200ms para a animación de saída
      }, 2500); // 2500ms de pausa na posición central
    }
    
    const nextWord = wordElements[currentIndex];
    nextWord.style.opacity = "1";
    nextWord.style.transform = `translateY(${VERTICAL_OFFSET}px)`;
  }
  
  // Iniciar a animación
  setTimeout(() => { 
    showNextWord();
  }, 500);
})();