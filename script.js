// Función para filtrar productos por categorías
function filtrarCatalogo(categoria, boton) {
    // 1. Cambiar el estado activo de los botones
    const botones = document.querySelectorAll('.btn-filtro');
    botones.forEach(btn => btn.classList.remove('active'));
    boton.classList.add('active');

    // 2. Mostrar u ocultar las tarjetas según la categoría
    const productos = document.querySelectorAll('.producto-card');
    productos.forEach(card => {
        if (categoria === 'todos' || card.classList.contains(categoria)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Función para el botón especial de Navidad
function crearLluviaNieve() {
    alert("❄️ ¡Próximamente lanzaremos la colección especial navideña! Permanece atento a nuestras novedades.");
}
