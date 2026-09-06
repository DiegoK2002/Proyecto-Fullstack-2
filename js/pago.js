// carrito ya está declarado y cargado por main.js (debe incluirse antes que este script)

// Formatear valor a peso chileno
function formatoPrecio(precio) {
    return "$" + precio.toLocaleString("es-CL");
}

// Renderizar dinámicamente los productos del carrito
function mostrarResumen() {
    const resumen = document.getElementById("resumenPedido");
    const totalPago = document.getElementById("totalPago");
    const subtotalPago = document.getElementById("subtotalPago");
    const btnPagar = document.querySelector('#formPago button[type="submit"]');

    if (!resumen || !totalPago) return;

    resumen.innerHTML = "";

    // VALIDACIÓN: Carrito vacío
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
        
        // Deshabilitar botón de pago de entrada
        if (btnPagar) {
            btnPagar.disabled = true;
            btnPagar.classList.add("disabled");
        }
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

    // Restringir a solo números y limitar a 16 dígitos el número de tarjeta
    const tarjetaInput = document.getElementById("numeroTarjeta");
    if (tarjetaInput) {
        tarjetaInput.addEventListener("input", (e) => {
            // 1. Quitar todo lo que no sea número
            let val = e.target.value.replace(/\D/g, "");
            
            // 2. Limitar a máximo 16 dígitos reales
            val = val.slice(0, 16);
            
            // 3. Insertar espacio cada 4 dígitos
            const grupos = val.match(/.{1,4}/g);
            
            // 4. Unir con espacios en blanco
            e.target.value = grupos ? grupos.join(" ") : "";
        });
    }


    // Restringir a solo números y limitar a 3 dígitos el cvv de la tarjeta
    const cvvInput = document.getElementById("cvv");
    if (cvvInput) {
        cvvInput.addEventListener("input", (e) => {
            // Remueve todo lo que no sea un número y recorta a 3 dígitos
            e.target.value = e.target.value.replace(/\D/g, "").slice(0, 3);
        });
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

        // Doble verificación del carrito al enviar
        if (carrito.length === 0) {
            mostrarAlertaError("Tu carrito está vacío. Agrega productos antes de pagar.");
            return;
        }

        const medioPago = document.querySelector('input[name="formaPago"]:checked').value;
        alert(`¡Gracias por tu compra! Tu pago por [${medioPago.toUpperCase()}] ha sido procesado exitosamente.`);

        // Limpiar el carrito en localStorage y redirigir
        localStorage.removeItem("carrito");
        window.location.href = "main.html";
    });
}

// Función auxiliar para renderizar alertas Bootstrap
function mostrarAlertaError(mensaje) {
    let alertaContainer = document.getElementById("alertaPagoContainer");
    
    if (!alertaContainer) {
        alertaContainer = document.createElement("div");
        alertaContainer.id = "alertaPagoContainer";
        const form = document.getElementById("formPago");
        form.parentNode.insertBefore(alertaContainer, form);
    }

    alertaContainer.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show mb-4" role="alert">
            <strong>¡Atención!</strong> ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarResumen();
    inicializarFormulario();
});