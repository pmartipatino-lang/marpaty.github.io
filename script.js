// MODAL PARA AGRANDAR IMÁGENES
function abrirModal(src) {
    const modal = document.getElementById("modalImagen");
    const imgAmpliada = document.getElementById("imgAmpliada");
    modal.style.display = "block";
    imgAmpliada.src = src;
}

function cerrarModal() {
    document.getElementById("modalImagen").style.display = "none";
}

// LLUVIA DE NIEVE INTERACTIVA
let nieveActiva = false;

function activarNieve() {
    if (nieveActiva) return;
    nieveActiva = true;

    const btnNavidad = document.getElementById('btnNavidad');
    if (btnNavidad) {
        btnNavidad.innerHTML = '✨ ¡Nieve Activada! ❄️';
        btnNavidad.style.backgroundColor = '#218838';
        btnNavidad.style.borderColor = '#28a745';
    }

    for (let i = 0; i < 40; i++) {
        setTimeout(crearCopo, i * 150);
    }
}

function crearCopo() {
    const copo = document.createElement('div');
    copo.classList.add('copo-nieve');
    copo.innerHTML = '❄';
    copo.style.left = Math.random() * 100 + 'vw';
    copo.style.animationDuration = Math.random() * 3 + 2 + 's';
    copo.style.opacity = Math.random();
    copo.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(copo);

    setTimeout(() => {
        copo.remove();
        if (nieveActiva) crearCopo();
    }, 5000);
}

// LÓGICA DEL SLIDER COMPARATIVO ANTES / DESPUÉS (CABALLO)
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("caballoSlider");
    if (!slider) return;

    const resize = slider.querySelector(".resize");
    const handle = slider.querySelector(".handle");
    let arrastrando = false;

    function moverSlider(x) {
        const rect = slider.getBoundingClientRect();
        let posX = x - rect.left;

        if (posX < 0) posX = 0;
        if (posX > rect.width) posX = rect.width;

        const porcentaje = (posX / rect.width) * 100;
        resize.style.width = porcentaje + "%";
        handle.style.left = porcentaje + "%";
    }

    // Eventos Mouse
    handle.addEventListener("mousedown", () => arrastrando = true);
    window.addEventListener("mouseup", () => arrastrando = false);
    window.addEventListener("mousemove", (e) => {
        if (arrastrando) moverSlider(e.clientX);
    });

    // Eventos Táctiles (Celulares)
    handle.addEventListener("touchstart", () => arrastrando = true);
    window.addEventListener("touchend", () => arrastrando = false);
    window.addEventListener("touchmove", (e) => {
        if (arrastrando && e.touches[0]) moverSlider(e.touches[0].clientX);
    });
});
