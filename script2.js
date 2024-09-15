// Espera a que el contenido del DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Obtén el formulario y el contenedor del mensaje de respuesta
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    // Verifica que el formulario y el contenedor de respuesta existan
    if (form && responseMessage) {
        // Agrega un listener para el evento submit del formulario
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío del formulario

            // Opcional: Obtén los valores del formulario (puedes hacer algo con ellos si es necesario)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Muestra el mensaje de respuesta
            responseMessage.classList.add('success');
            responseMessage.innerHTML = `
                <h1>No disponible por el momento.</h1>
                <p>Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</p>
                <a href='#contact'>Volver al formulario</a>
            `;
            responseMessage.style.display = 'block'; // Muestra el mensaje de respuesta

            // Opcional: Limpiar el formulario
            form.reset();
        });
    }
});
