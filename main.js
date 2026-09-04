let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function formatoPrecio(precio) {
    return "$" + precio.toLocaleString("es-CL");
}

function actualizarCarrito() {

    const carritoLista = document.getElementById("carritoLista");
    const carritoTotal = document.getElementById("carritoTotal");
    const carritoContador = document.getElementById("carritoContador");

    if (!carritoLista || !carritoTotal) {
        return;
    }

    carritoLista.innerHTML = "";

    if (carrito.length === 0) {

        carritoLista.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío
            </p>
        `;

        carritoTotal.textContent = "$0";

        if (carritoContador) {
            carritoContador.textContent = "0";
            carritoContador.classList.add("d-none");
        }

        return;
    }

     let total = 0;
    let cantidadTotal = 0;

    carrito.forEach((producto, indice) => {

        const subtotal = producto.precio * producto.cantidad;

        total += subtotal;
        cantidadTotal += producto.cantidad;


        const productoHTML = document.createElement("div");

        productoHTML.classList.add(
            "d-flex",
            "align-items-center",
            "mb-3",
            "border-bottom",
            "pb-3"
        );

        productoHTML.innerHTML = `

            <img src="${producto.imagen}"
                 alt="${producto.nombre}"
                 width="70"
                 height="70"
                 style="object-fit: cover;"
                 class="me-3 rounded">

            <div class="flex-grow-1">

                <strong>
                    ${producto.nombre}
                </strong>

                <p class="mb-1">
                    ${formatoPrecio(producto.precio)}
                </p>

                <div class="d-flex align-items-center">

                    <button
                        class="btn btn-sm btn-outline-secondary btn-restar"
                        data-indice="${indice}">
                        -
                    </button>

                    <span class="mx-2">
                        ${producto.cantidad}
                    </span>

                    <button
                        class="btn btn-sm btn-outline-secondary btn-sumar"
                        data-indice="${indice}">
                        +
                    </button>

                    <button
                        class="btn btn-sm btn-outline-danger ms-3 btn-eliminar"
                        data-indice="${indice}">
                        🗑️
                    </button>

                </div>

            </div>

            <strong class="ms-2">
                ${formatoPrecio(subtotal)}
            </strong>
        `;

        carritoLista.appendChild(productoHTML);
    });

    carritoTotal.textContent = formatoPrecio(total);


    if (carritoContador) {

        carritoContador.textContent = cantidadTotal;

        carritoContador.classList.remove("d-none");
    }
}


document.addEventListener("click", function(event) {

    const boton = event.target.closest(".btn-agregar-carrito");

    if (!boton) {
        return;
    }


    const nombre = boton.dataset.nombre;
    const precio = Number(boton.dataset.precio);
    const imagen = boton.dataset.imagen;

    const productoExistente = carrito.find(
        producto => producto.nombre === nombre
    );


    if (productoExistente) {

        // Si ya existe, aumentar cantidad
        productoExistente.cantidad++;

    } else {

        // Si no existe, agregar producto nuevo
        carrito.push({
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        });
    }


    guardarCarrito();
    actualizarCarrito();

    mostrarMensajeCarrito();

    // Abrir automáticamente el carrito
    const carritoOffcanvas = document.getElementById("carritoOffcanvas");

    if (carritoOffcanvas) {
        const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(carritoOffcanvas);
        offcanvas.show();
    }


});



document.addEventListener("click", function(event) {
     // AUMENTAR
    if (event.target.classList.contains("btn-sumar")) {

        const indice = Number(event.target.dataset.indice);

        carrito[indice].cantidad++;

        guardarCarrito();
        actualizarCarrito();
    }


    // DISMINUIR
    if (event.target.classList.contains("btn-restar")) {

        const indice = Number(event.target.dataset.indice);

        carrito[indice].cantidad--;

        if (carrito[indice].cantidad <= 0) {
            carrito.splice(indice, 1);
        }

        guardarCarrito();
        actualizarCarrito();
    }


    // ELIMINAR
    if (event.target.classList.contains("btn-eliminar")) {

        const indice = Number(event.target.dataset.indice);

        carrito.splice(indice, 1);

        guardarCarrito();
        actualizarCarrito();
    }

});



document.addEventListener("click", function(event) {

    if (event.target.id === "carritoVaciar") {

        carrito = [];

        guardarCarrito();
        actualizarCarrito();
    }

});


document.addEventListener("DOMContentLoaded", function() {

    actualizarCarrito();

});


function mostrarMensajeCarrito() {
    const mensaje = document.createElement("div");
    mensaje.textContent = "PRODUCTO AGREGADO ✓";
    mensaje.classList.add("mensaje-carrito");

    document.body.appendChild(mensaje);

    setTimeout(function() {
        mensaje.remove();
    }, 3000);
}


