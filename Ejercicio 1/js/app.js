const formulario = document.getElementById('contactForm');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let nombre = document.getElementById("name").value.trim();
    let correo = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");
    let checkbox = document.getElementById("terms").checked;

    formMessage.textContent = "";

    if (nombre === "" || correo === "" || mensaje === "") {
        formMessage.textContent = "Por favor, completa todos los campos.";
        formMessage.style.color = "#d32f2f";
    } else if (!correo.includes("@")) {
        formMessage.textContent = "Por favor, ingresa un correo válido.";
        formMessage.style.color = "#d32f2f";
    } else if (!checkbox) {
        formMessage.textContent = "Debes aceptar los términos y condiciones.";
        formMessage.style.color = "#d32f2f";
    }
    else {
        formMessage.textContent = "¡Formulario enviado con éxito!";
        formMessage.style.color = "#388e3c";
        formulario.reset();
    }
});

// Spinner de carga
window.addEventListener('load', function () {
    var contenedor = document.getElementById("contenedor-carga");
    if (!contenedor) return;

    contenedor.classList.add("ocultar");

    var tiempoEspera = 700;
    setTimeout(function () {
        if (contenedor && contenedor.parentNode) {
            contenedor.parentNode.removeChild(contenedor);
        }
    }, tiempoEspera);
});




// Cambio de tema oscuro y claro
const btnTema = document.getElementById('btnTema');
const keyTema = 'tema-bootstrap';

function aplicarTema(tema) {
    document.documentElement.setAttribute('data-bs-theme', tema);
    if (btnTema) {
        btnTema.checked = tema === 'dark';
    }
}

function cargarTema() {
    const temaGuardado = localStorage.getItem(keyTema);
    if (temaGuardado === 'dark' || temaGuardado === 'light') {
        aplicarTema(temaGuardado);
    } else {
        aplicarTema('light');
    }
}

if (btnTema) {
    btnTema.addEventListener('change', () => {
        const nuevoTema = btnTema.checked ? 'dark' : 'light';
        aplicarTema(nuevoTema);
        localStorage.setItem(keyTema, nuevoTema);
    });
}

cargarTema();