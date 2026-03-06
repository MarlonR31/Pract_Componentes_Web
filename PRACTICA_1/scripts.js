const btnSaludar = document.getElementById('btnSaludar');
const nombreUsuario = document.getElementById('nombreUsuario');
const mensaje = document.getElementById('mensaje');

    btnSaludar.addEventListener('click', () => {
    const nombre = nombreUsuario.value.trim();
    if (nombre) {
        mensaje.textContent = `¡Hola, ${nombre}! Ejercicio de DOM completado.`;
        nombreUsuario.value = '';
    } else {
        mensaje.textContent = 'Por favor, ingrese su nombre.';
        nombreUsuario.value = '';
    }
});


const formularioSuscripcion = document.getElementById("formularioSuscripcion");
const inputCorreo = document.getElementById("email");
const mensajeEnviado = document.getElementById("mensajeEnviado");

formularioSuscripcion.addEventListener("submit", function(event) {
    event.preventDefault(); // evita recargar la página
    const correo = inputCorreo.value.trim();

    if (correo) {
        mensajeEnviado.textContent = `¡Gracias por suscribirte con el correo: ${correo}!`;
        formularioSuscripcion.reset(); // limpia el formulario
    } else {
        mensajeEnviado.textContent = "Por favor, ingrese un correo válido.";
    }
});
