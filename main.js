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


// AGREGAR PRODUCTO AL CARRITO

document.addEventListener("click", function(event) {

    const boton = event.target.closest(".btn-agregar-carrito");

    if (!boton) {
        return;
    }

    //alert("El botón funciona");

        const nombre = boton.dataset.nombre;
    const precio = Number(boton.dataset.precio);
    const imagen = boton.dataset.imagen;

    console.log("Nombre:", nombre);
    console.log("Precio:", precio);
    console.log("Imagen:", imagen);
    console.log("Carrito antes:", carrito);

    const productoExistente = carrito.find(
        producto => producto.nombre === nombre
    );

    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        });

    }

    console.log("Carrito después:", carrito);

    guardarCarrito();

    console.log("Carrito guardado");

    actualizarCarrito();

    console.log("Carrito actualizado");

    mostrarMensajeCarrito();

    console.log("Mensaje mostrado");

    const carritoOffcanvas = document.getElementById("carritoOffcanvas");

    if (carritoOffcanvas) {

        const offcanvas =
            bootstrap.Offcanvas.getOrCreateInstance(carritoOffcanvas);

        offcanvas.show();

    }

});


// AUMENTAR Y DISMINUIR CANTIDAD

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


// VACIAR CARRITO

document.addEventListener("click", function(event) {

    if (event.target.id === "carritoVaciar") {

        carrito = [];

        guardarCarrito();

        actualizarCarrito();

    }

});


// CARGAR CARRITO AL INICIAR LA PÁGINA

document.addEventListener("DOMContentLoaded", function() {

    actualizarCarrito();

});


// MENSAJE DE PRODUCTO AGREGADO

function mostrarMensajeCarrito() {

    const mensaje = document.createElement("div");

    mensaje.textContent = "PRODUCTO AGREGADO ✓";

    mensaje.classList.add("mensaje-carrito");

    document.body.appendChild(mensaje);

    setTimeout(function() {

        mensaje.remove();

    }, 3000);

}

// GENERAR DROPDOWN DE CATEGORÍAS
document.addEventListener('DOMContentLoaded', () => {
    generarDropdownCategorias();
});

function generarDropdownCategorias() {
  const menuCategorias = document.getElementById("menuCategorias");
  if (!menuCategorias) return;

  // Usa tu función obtenerProductosPublicos() para que considere también productos en localStorage
  const lista = obtenerProductosPublicos();
  if (lista.length === 0) return;

  // Extrae categorías únicas y elimina espacios extras
  const categoriasUnicas = [...new Set(lista.map((p) => p.categoria.trim()))];

  let html = `
    <li><a class="dropdown-item" href="catalogo.html">Todos los Productos</a></li>
    <li><hr class="dropdown-divider"></li>
  `;

  categoriasUnicas.forEach((cat) => {
    html += `
      <li>
        <a class="dropdown-item" href="catalogo.html?categoria=${encodeURIComponent(cat)}">
          ${cat}
        </a>
      </li>
    `;
  });

  menuCategorias.innerHTML = html;

}



function obtenerProductosPublicos() {
  const guardados = localStorage.getItem("productos");
  if (guardados) {
    return JSON.parse(guardados);
  }
  return typeof productos !== "undefined" ? productos : [];
}

function formatearPrecio(precio) {
  return "$" + Number(precio).toLocaleString("es-CL");
}

function generarDropdownCategorias() {
  const menuCategorias = document.getElementById("menuCategorias");
  if (!menuCategorias) return;

  const lista = obtenerProductosPublicos();
  if (lista.length === 0) return;

  // Obtenemos las categorías únicas eliminando espacios
  const categoriasUnicas = [...new Set(lista.map((p) => p.categoria.trim()))];

  let html = `
    <li><a class="dropdown-item" href="catalogo.html">Todos los Productos</a></li>
    <li><hr class="dropdown-divider"></li>
  `;

  categoriasUnicas.forEach((cat) => {
    html += `
      <li>
        <a class="dropdown-item" href="catalogo.html?categoria=${encodeURIComponent(cat)}">
          ${cat}
        </a>
      </li>
    `;
  });

  menuCategorias.innerHTML = html;
}



// Se ejecuta automáticamente al cargar CUALQUIER página que incluya main.js
document.addEventListener("DOMContentLoaded", () => {
  generarDropdownCategorias();
});