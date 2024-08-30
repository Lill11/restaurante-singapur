document.addEventListener('DOMContentLoaded', () => {
    // Función para cargar contenido HTML desde un archivo
    function includeHTML() {
      const elements = document.querySelectorAll('[data-include]');
      elements.forEach(element => {
        const file = element.getAttribute('data-include');
        fetch(file)
          .then(response => response.text())
          .then(data => {
            element.innerHTML = data;
          });
      });
    }
  
    includeHTML();
  });
  