let nevando = false;
let intervaloNieve = null;

function activarNieve() {
    const btn = document.getElementById('btnNavidad');
    
    if (!nevando) {
        nevando = true;
        btn.innerText = "❄️ Desactivar Nieve ❄️";
        
        intervaloNieve = setInterval(() => {
            const copo = document.createElement('div');
            copo.innerHTML = '❄';
            copo.style.position = 'fixed';
            copo.style.top = '-20px';
            copo.style.left = Math.random() * 100 + 'vw';
            copo.style.fontSize = (Math.random() * 15 + 10) + 'px';
            copo.style.color = '#ffffff';
            copo.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
            copo.style.opacity = Math.random();
            copo.style.pointerEvents = 'none';
            copo.style.zIndex = '9999';
            copo.style.transition = 'transform 5s linear, opacity 5s linear';
            
            document.body.appendChild(copo);
            
            setTimeout(() => {
                copo.style.transform = `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`;
                copo.style.opacity = '0';
            }, 50);
            
            setTimeout(() => {
                copo.remove();
            }, 5000);
        }, 200);
        
    } else {
        nevando = false;
        btn.innerText = "🎄 Especial Navidad - Activar Nieve ❄️";
        clearInterval(intervaloNieve);
    }
}

// Funciones para el Modal de Imágenes
function abrirModal(src) {
    const modal = document.getElementById("modalImagen");
    const imgAmpliada = document.getElementById("imgAmpliada");
    if (modal && imgAmpliada) {
        modal.style.display = "block";
        imgAmpliada.src = src;
    }
}

function cerrarModal() {
    const modal = document.getElementById("modalImagen");
    if (modal) {
        modal.style.display = "none";
    }
}
