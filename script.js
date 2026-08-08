// Variable para evitar duplicar temporizadores de nieve
let nieveActiva = false;

function activarNieveYIrNavidad() {
    // 1. Activar Nieve
    if (!nieveActiva) {
        crearCoposDeNieve();
        nieveActiva = true;
    }

    // 2. Scroll suave hasta la sección de Navidad
    const seccionNavidad = document.getElementById("navidad");
    if (seccionNavidad) {
        seccionNavidad.scrollIntoView({ behavior: "smooth" });
    }
}

function crearCoposDeNieve() {
    const contenedor = document.getElementById("nieve-container");
    const cantidadCopos = 40;

    for (let i = 0; i < cantidadCopos; i++) {
        setTimeout(() => {
            const copo = document.createElement("div");
            copo.classList.add("copo-nieve");
            copo.innerHTML = "❄";
            
            // Posición horizontal aleatoria
            copo.style.left = Math.random() * 100 + "vw";
            
            // Tamaño aleatorio
            const tamano = Math.random() * 1.2 + 0.6;
            copo.style.fontSize = tamano + "rem";
            
            // Duración de la caída aleatoria
            const duracion = Math.random() * 5 + 4;
            copo.style.animationDuration = duracion + "s";
            
            contenedor.appendChild(copo);

            // Eliminar y regenerar cuando termina la animación
            setTimeout(() => {
                copo.remove();
                if (nieveActiva) {
                    crearUnCopo();
                }
            }, duracion * 1000);

        }, i * 150);
    }
}

function crearUnCopo() {
    const contenedor = document.getElementById("nieve-container");
    if (!contenedor) return;

    const copo = document.createElement("div");
    copo.classList.add("copo-nieve");
    copo.innerHTML = "❄";
    copo.style.left = Math.random() * 100 + "vw";
    
    const tamano = Math.random() * 1.2 + 0.6;
    copo.style.fontSize = tamano + "rem";
    
    const duracion = Math.random() * 5 + 4;
    copo.style.animationDuration = duracion + "s";
    
    contenedor.appendChild(copo);

    setTimeout(() => {
        copo.remove();
        if (nieveActiva) {
            crearUnCopo();
        }
    }, duracion * 1000);
}

// MODAL PARA AGRANDAR FOTOS
function abrirModal(src) {
    const modal = document.getElementById("modalImagen");
    const img = document.getElementById("imgAmpliada");
    modal.style.display = "flex";
    img.src = src;
}

function cerrarModal() {
    document.getElementById("modalImagen").style.display = "none";
}
