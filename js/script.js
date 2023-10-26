// Realizar una solicitud a la API de JSONPlaceholder para obtener las fotos
fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {
    const imageContainer = document.getElementById('image-container');
    // Itera sobre los primeros 4 datos y crea elementos para las imágenes
    for (let i = 0; i < 5 && i < data.length; i++) {
        const photo = data[i];
        const card = document.createElement('div');
        card.className = 'card';
        card.style = '--clr: #009688';
        const imgBox = document.createElement('div');
        imgBox.className = 'img-box';
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.title;
        const content = document.createElement('div');
        content.className = 'content';
        const h2 = document.createElement('h2');
        h2.textContent = 'Producto'; // Puedes cambiar este valor si es necesario
        const p = document.createElement('p');
        p.textContent = 'Estas imagenes pertenecen a la API de JsonPlaceHolder';
        const a = document.createElement('a');
        a.href = ''; // Agrega el enlace adecuado si es necesario
        a.textContent = 'Sumar al carrito';

        // Organiza los elementos
        imgBox.appendChild(img);
        content.appendChild(h2);
        content.appendChild(p);
        content.appendChild(a);
        card.appendChild(imgBox);
        card.appendChild(content);
        imageContainer.appendChild(card);
    }
})
.catch(error => {
    console.error('Error al cargar las imágenes desde la API: ' + error);
})




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

