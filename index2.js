// Objeto con la información de los jabones
const jabones = {
    eucalipto: {
      titulo: "Jabón Eucalipto",
      descripcion: "Ideal para pieles grasas. Refresca, limpia y tiene propiedades antisépticas naturales.",
      imagen: "eucalipto.avif"
    },
    miel: {
      titulo: "Jabón Miel",
      descripcion: "Nutre e hidrata profundamente la piel. Ideal para pieles secas y sensibles.",
      imagen: "miel.webp"
    },
    sabila: {
      titulo: "Jabón Sábila",
      descripcion: "Con extracto de aloe vera que ayuda a regenerar la piel, calmar irritaciones y quemaduras.",
      imagen: "sabila.jpg"
    },
    calendula: {
      titulo: "Jabón Caléndula",
      descripcion: "Antiinflamatorio natural, perfecto para pieles delicadas o con acné.",
      imagen: "calendula.jpg"
    }
  };
  
  // Mostrar el modal cuando se hace clic en el botón "Más Información"
  document.querySelectorAll(".info-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.closest("div"); // Encuentra el div contenedor del botón
      const title = parent.querySelector("h3").textContent; // Toma el título del jabón
      const key = title.toLowerCase().replace('jabón ', ''); // Elimina "Jabón" y hace todo minúsculas
  
      const jabon = jabones[key]; // Obtener la información del jabón usando la clave
  
      if (jabon) {
        document.getElementById("modal-title").textContent = jabon.titulo;
        document.getElementById("modal-description").textContent = jabon.descripcion;
        document.getElementById("modal-image").src = jabon.imagen;
        document.getElementById("modal").style.display = "block"; // Muestra el modal
      }
    });
  });
  
  // Cerrar el modal cuando se hace clic en el icono de cerrar
  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });
  
  // Cerrar el modal si se hace clic fuera de él
  window.addEventListener("click", (event) => {
    if (event.target === document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
    }
  });
  
  // Funcionalidad del botón "Comprar"
  document.getElementById("buy-button").addEventListener("click", () => {
    alert("Gracias por tu interés 😊. Pronto podrás comprar directamente aquí.");
  });
  
  // Validar formulario de contacto
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Validar si los campos están llenos
    if (name && email && message) {
      alert("¡Mensaje enviado con éxito!");
      this.reset(); // Limpiar el formulario después de enviar
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
  
  // Desplazamiento suave a las secciones de la página
  document.addEventListener("DOMContentLoaded", function() {
    const missionLink = document.querySelector("a[href='#Mision']");
    const visionLink = document.querySelector("a[href='#Vision']");
    const qualityLink = document.querySelector("a[href='#Politicas']");
  
    missionLink.addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("Mision").scrollIntoView({ behavior: "smooth" });
    });
  
    visionLink.addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("Vision").scrollIntoView({ behavior: "smooth" });
    });
  
    qualityLink.addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("Politicas").scrollIntoView({ behavior: "smooth" });
    });
  });
  