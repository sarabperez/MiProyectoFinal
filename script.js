const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));


document.addEventListener('DOMContentLoaded', function () {
  var botonMostrar = document.getElementById('mostrarVentana');
  var ventanaEmergente = document.getElementById('miVentanaEmergente');
  var botonCerrar = document.getElementById('cerrarVentana');

  //ocultar la ventana al cargar
  ventanaEmergente.style.display='none';

  
  botonMostrar.addEventListener('click', function () {
    ventanaEmergente.style.display = 'block';
  });

  botonCerrar.addEventListener('click', function () {
    ventanaEmergente.style.display = 'none';
  });

  // Cierra la ventana emergente si se hace clic fuera de ella
  window.addEventListener('click', function (event) {
    if (event.target === ventanaEmergente) {
      ventanaEmergente.style.display = 'none';
    }
  });
});


