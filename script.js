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

// LLUVIA DE NIEVE
let nieveActiva = false;

function activarNieve() {
    if (nieveActiva) return;
    nieveActiva = true;

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
