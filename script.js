// Manejo de audio al pasar el cursor sobre las tarjetas
document.querySelectorAll('.card-container').forEach(card => {
    const audio = card.querySelector('.audio');

    card.addEventListener('mouseenter', () => {
        if (audio) {
            audio.play();
        }
    });

    card.addEventListener('mouseleave', () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});

// Manejo del formulario de contacto y respuesta al envío
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
                <a href='#contact' id='backToForm'>Volver al formulario</a>
            `;
            responseMessage.style.display = 'block'; // Muestra el mensaje de respuesta

            // Limpiar el formulario
            form.reset();

            // Agregar evento para el enlace "Volver al formulario"
            const backToForm = document.getElementById('backToForm');
            if (backToForm) {
                backToForm.addEventListener('click', function(event) {
                    event.preventDefault(); // Previene el comportamiento predeterminado del enlace
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza suavemente al inicio de la página
                });
            }
        });
    }
});


// const card = document.querySelector('.card-continer');
// const audio = document.querySelector('.audio');

// card.addEventListener('mouseenter', () => {
//     if (audio) {
//         audio.play();
//     }
// });

// card.addEventListener('mouseleave', () => {
//     if (audio) {
//         audio.pause();
//         audio.currentTime = 0;
//     }
// }); 

