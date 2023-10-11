const $form = document.querySelector('#form');

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    const emailInput = $form.querySelector('input[name="email"]');
    const messageInput = $form.querySelector('textarea[name="message"]');
    const nameInput = $form.querySelector('input[name="name"]')
    
    if (emailInput.value.trim() === '' || messageInput.value.trim() === '' ||  nameInput.value.trim() === '') {
        // Muestra una notificación de error si los campos están vacíos
        Swal.fire(
            'Atención',
            'Por favor, complete todos los campos obligatorios.',
            'error'
        );
        return; // Detiene el envío del formulario si hay errores
    }

    // Realiza el envío del formulario si pasa la validación
    const form = new FormData($form);
    const response = await fetch($form.action, {
        method: $form.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        $form.reset();
        Swal.fire(
            'Gracias por contactarnos.',
            'Nos comunicaremos contigo pronto.',
            'success'
        );
    } else {
        Swal.fire(
            'Error',
            'Hubo un problema al enviar el formulario.',
            'error'
        );
    }
}
