// Maneja el carrito usando LocalStorage.
// Se incluye las páginas para poder mostrar el contador
// del ícono de carrito en la barra, además renderiza el
// contenido del carrito cuando se ejecuta en carrito.html.

const CARRITO_KEY = "sonidoVivo_carrito";

// --- Lectura / escritura en LocalStorage ---

function obtenerCarrito() {
  try {
    const data = localStorage.getItem(CARRITO_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("No se pudo leer el carrito de LocalStorage:", error);
    return [];
  }
}

function guardarCarrito(carrito) {
  localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito));
  actualizarBadgeCarrito();
}

// --- Operaciones sobre el carrito ---

function agregarAlCarrito(idProducto, cantidad = 1) {
  const carrito = obtenerCarrito();
  const item = carrito.find((i) => i.id === idProducto);

  if (item) {
    item.cantidad += cantidad;
  } else {
    carrito.push({ id: idProducto, cantidad: cantidad });
  }

  guardarCarrito(carrito);
  mostrarConfirmacionAgregado(idProducto);

  if (document.getElementById("carrito-container")) {
    renderizarCarrito();
  }
}

function quitarDelCarrito(idProducto) {
  const carrito = obtenerCarrito().filter((i) => i.id !== idProducto);
  guardarCarrito(carrito);
  renderizarCarrito();
}

function cambiarCantidad(idProducto, delta) {
  const carrito = obtenerCarrito();
  const item = carrito.find((i) => i.id === idProducto);
  if (!item) return;

  item.cantidad += delta;

  if (item.cantidad < 1) {
    quitarDelCarrito(idProducto);
    return;
  }

  guardarCarrito(carrito);
  renderizarCarrito();
}

function vaciarCarrito() {
  guardarCarrito([]);
  renderizarCarrito();
}

// --- Utilidades ---

function formatearPrecio(valor) {
  return "$" + valor.toLocaleString("es-CL");
}

function mostrarConfirmacionAgregado(idProducto) {
  const boton = document.querySelector(
    '[data-agregar-id="' + idProducto + '"]'
  );
  if (!boton) return;

  const textoOriginal = boton.textContent;
  boton.textContent = "✓ Agregado";
  boton.disabled = true;
  setTimeout(() => {
    boton.textContent = textoOriginal;
    boton.disabled = false;
  }, 900);
}

// --- Icono de carrito (barra) ---

function actualizarBadgeCarrito() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;

  const carrito = obtenerCarrito();
  const totalItems = carrito.reduce((suma, i) => suma + i.cantidad, 0);

  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? "inline-block" : "none";
}

// --- Render de la página carrito.html ---

function renderizarCarrito() {
  const contenedor = document.getElementById("carrito-container");
  if (!contenedor) return;

  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    contenedor.innerHTML =
      '<div class="col-12 text-center py-5">' +
      "<p>Tu carrito está vacío.</p>" +
      '<a href="catalogo.html" class="btn btn-primary">Ir al catálogo</a>' +
      "</div>";
    const totalEl = document.getElementById("carrito-total");
    if (totalEl) totalEl.textContent = formatearPrecio(0);
    return;
  }

  let html = "";
  let total = 0;

  carrito.forEach((item) => {
    const producto = productos.find((p) => p.id === item.id);
    if (!producto) return;

    const subtotal = producto.precio * item.cantidad;
    total += subtotal;

    html +=
      '<div class="col-12">' +
      '<div class="card mb-3 shadow-sm">' +
      '<div class="card-body">' +
      '<div class="row g-3 align-items-center">' +
      '<div class="col-4 col-md-2 text-center">' +
      '<img src="' +
      producto.imagen +
      '" class="img-fluid rounded" alt="' +
      producto.nombre +
      '" style="max-height:110px; width:100%; object-fit:cover;">' +
      "</div>" +
      '<div class="col-8 col-md-4">' +
      '<h5 class="mb-1">' +
      producto.nombre +
      "</h5>" +
      '<p class="mb-0 text-muted">' +
      formatearPrecio(producto.precio) +
      " c/u</p>" +
      "</div>" +
      '<div class="col-6 col-md-3">' +
      '<div class="d-flex align-items-center justify-content-center justify-content-md-start gap-2">' +
      '<button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(' +
      producto.id +
      ', -1)">−</button>' +
      '<span class="fw-bold px-2">' +
      item.cantidad +
      "</span>" +
      '<button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(' +
      producto.id +
      ', 1)">+</button>' +
      "</div>" +
      "</div>" +
      '<div class="col-4 col-md-2 text-center text-md-end fw-bold fs-5">' +
      formatearPrecio(subtotal) +
      "</div>" +
      '<div class="col-2 col-md-1 text-end">' +
      '<button class="btn btn-outline-danger btn-sm" title="Quitar" onclick="quitarDelCarrito(' +
      producto.id +
      ')">✕</button>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  });

  contenedor.innerHTML = html;

  const totalEl = document.getElementById("carrito-total");
  if (totalEl) totalEl.textContent = formatearPrecio(total);
}

// --- Inicialización ---

document.addEventListener("DOMContentLoaded", () => {
  actualizarBadgeCarrito();
  if (document.getElementById("carrito-container")) {
    renderizarCarrito();
  }

  const btnVaciar = document.getElementById("btn-vaciar-carrito");
  if (btnVaciar) {
    btnVaciar.addEventListener("click", vaciarCarrito);
  }
});
