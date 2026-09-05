let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Formatear valor a peso chileno
function formatoPrecio(precio) {
    return "$" + precio.toLocaleString("es-CL");
}

// Renderizar dinámicamente los productos del carrito
function mostrarResumen() {
    const resumen = document.getElementById("resumenPedido");
    const totalPago = document.getElementById("totalPago");
    const subtotalPago = document.getElementById("subtotalPago");

    if (!resumen || !totalPago) return;

    resumen.innerHTML = "";

    if (carrito.length === 0) {
        resumen.innerHTML = `
            <div class="text-center py-4">
                <p class="text-muted mb-3">Tu carrito está vacío.</p>
                <a href="catalogo.html" class="btn btn-outline-primary btn-sm">
                    Explorar catálogo
                </a>
            </div>
        `;
        totalPago.textContent = "$0";
        if (subtotalPago) subtotalPago.textContent = "$0";
        return;
    }

    let total = 0;

    carrito.forEach(function(producto) {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const productoHTML = document.createElement("div");
        productoHTML.classList.add(
            "d-flex",
            "align-items-center",
            "py-2",
            "border-bottom"
        );

        productoHTML.innerHTML = `
            <img src="${producto.imagen || 'https://via.placeholder.com/60'}" 
                 alt="${producto.nombre}" 
                 width="55" 
                 height="55" 
                 style="object-fit: cover;" 
                 class="rounded me-3 border">
            <div class="flex-grow-1 min-w-0">
                <h6 class="mb-0 text-truncate small fw-bold">${producto.nombre}</h6>
                <small class="text-muted d-block">Cant: ${producto.cantidad}</small>
                <span class="small fw-semibold text-primary">${formatoPrecio(subtotal)}</span>
            </div>
        `;

        resumen.appendChild(productoHTML);
    });

    totalPago.textContent = formatoPrecio(total);
    if (subtotalPago) subtotalPago.textContent = formatoPrecio(total);
}

// Manejo del formulario de pago e interacción
function inicializarFormulario() {
    const formPago = document.getElementById("formPago");
    const opcionesPago = document.querySelectorAll('input[name="formaPago"]');
    const datosTarjeta = document.getElementById("datosTarjeta");
    const inputsTarjeta = datosTarjeta ? datosTarjeta.querySelectorAll("input") : [];

    if (!formPago) return;

    // Conmutar sección de datos de tarjeta
    function toggleDatosTarjeta(metodo) {
        if (!datosTarjeta) return;

        if (metodo === "tarjeta") {
            datosTarjeta.style.display = "block";
            inputsTarjeta.forEach(input => input.setAttribute("required", "true"));
        } else {
            datosTarjeta.style.display = "none";
            inputsTarjeta.forEach(input => {
                input.removeAttribute("required");
                input.value = "";
            });
        }
    }

    // Escuchar cambios de opción de pago
    opcionesPago.forEach(radio => {
        radio.addEventListener("change", (e) => {
            toggleDatosTarjeta(e.target.value);
        });
    });

    // Formatear automáticamente fecha MM/AA
    const vencimientoInput = document.getElementById("vencimiento");
    if (vencimientoInput) {
        vencimientoInput.addEventListener("input", (e) => {
            let val = e.target.value.replace(/\D/g, "");
            if (val.length >= 2) {
                e.target.value = val.slice(0, 2) + "/" + val.slice(2, 4);
            } else {
                e.target.value = val;
            }
        });
    }

    // Procesar envío del formulario
    formPago.addEventListener("submit", function(e) {
        e.preventDefault();

        if (carrito.length === 0) {
            alert("No puedes realizar el pago porque tu carrito está vacío.");
            return;
        }

        const medioPago = document.querySelector('input[name="formaPago"]:checked').value;
        alert(`¡Gracias por tu compra! Tu pago por [${medioPago.toUpperCase()}] ha sido procesado exitosamente.`);

        // Limpiar el carrito en el almacenamiento local y redirigir
        localStorage.removeItem("carrito");
        window.location.href = "main.html";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarResumen();
    inicializarFormulario();
});