function showAlert() {
    alert("🎉🎉SE LOGRÓ🎉🎉")
} 

// Obtenemos el 2do botón por su id
let segundoBoton = document.getElementById("segundoBoton");

//Añadimos un Event Listener para que "Esuche" el evento "click"
segundoBoton.addEventListener("click", function() {
    alert("¡SE LOGRO OTRA VEZ!");
});

const miFormulario = document.getElementById("miFormulario");

miFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
})

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }

  document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})