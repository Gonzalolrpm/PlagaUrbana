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