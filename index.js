document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Simular el envío del formulario (aquí podrías agregar funcionalidad para enviar a un servidor)
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);

    // Mostrar un mensaje de éxito
    const formMensaje = document.getElementById('formMensaje');
    formMensaje.textContent = '¡Formulario enviado correctamente!';
    formMensaje.style.display = 'block';

    // Reiniciar el formulario
    document.getElementById('contactForm').reset();
});

// Función para mostrar/ocultar el modal
function toggleQRModal() {
    const modal = document.querySelector('.qr-modal'); // Selecciona el modal
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'flex'; // Muestra el modal
        console.log('Modal mostrado'); // Para depuración
    } else {
        modal.style.display = 'none'; // Oculta el modal
        console.log('Modal oculto'); // Para depuración
    }
}

// Asegúrate de que el modal esté oculto al cargar la página
window.onload = () => {
    document.querySelector('.qr-modal').style.display = 'none'; // Asegúrate de usar querySelector
};

// Asegúrate de que el modal esté oculto al cargar la página
window.onload = () => {
    const modal = document.querySelector('.qr-modal');
    if (modal) {
        modal.style.display = 'none'; // Asegúrate de usar querySelector
    } else {
        console.error('El modal no se encontró al cargar la página.');
    }
};