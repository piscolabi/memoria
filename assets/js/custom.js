document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.hamburger-menu');
    
    // Función para corrixir os títulos no menú móbil
    function fixMobileMenuTitles() {
      // Selecciona o contenedor da barra lateral (que se usa como menú móbil)
      const sidebarContainer = document.querySelector('.sidebar-container');
      if (!sidebarContainer) return;
      
      // Busca e corrixe os enlaces
      sidebarContainer.querySelectorAll('a[href="/docs/"]').forEach(function(link) {
        link.textContent = "Memoria";
      });
      
      sidebarContainer.querySelectorAll('a[href="/changelog/"]').forEach(function(link) {
        link.textContent = "Cambios";
      });
      
      sidebarContainer.querySelectorAll('a[href="/about/"]').forEach(function(link) {
        link.textContent = "Info";
      });
    }
    
    // Executa a función cando se abre o menú
    if (menu) {
      menu.addEventListener('click', function() {
        // Pequeno retraso para asegurarse de que o menú está completamente aberto
        setTimeout(fixMobileMenuTitles, 50);
      });
    }
    
    // Tamén executa a función ao cargar a páxina por se o menú xa está aberto
    fixMobileMenuTitles();
    
    // Executa a función periodicamente para asegurarse de que os títulos están correctos
    // (isto é útil se o menú se carga de forma dinámica)
    setInterval(fixMobileMenuTitles, 1000);
  });