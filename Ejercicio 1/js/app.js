const








//cambio de tema oscuro y claro
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