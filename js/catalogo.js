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

function renderizarCatalogo() {
  const contenedor = document.getElementById("catalogo-container");
  if (!contenedor) return;

  const lista = obtenerProductosPublicos();
  const params = new URLSearchParams(window.location.search);
  const categoriaFiltro = params.get("categoria");

  // Filtrar si existe parámetro de categoría en la URL
  const filtrados = categoriaFiltro
    ? lista.filter((p) => p.categoria.toLowerCase().includes(categoriaFiltro.toLowerCase()))
    : lista;

  if (filtrados.length === 0) {
    contenedor.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted fs-5">No hay productos disponibles en esta categoría.</p>
        <a href="catalogo.html" class="btn btn-outline-primary btn-sm">Ver todo el catálogo</a>
      </div>`;
    return;
  }

  contenedor.innerHTML = filtrados.map((p) => `
    <div class="col">
      <div class="card h-100 shadow-sm">
        <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold">${p.nombre}</h5>
          <p class="card-text text-muted flex-grow-1">${p.descripcion}</p>
          <h4 class="text-primary fw-bold my-2">${formatearPrecio(p.precio)}</h4>
          <div class="d-flex gap-2 mt-2">
            <a href="producto-detalle.html?id=${p.id}" class="btn btn-outline-primary w-50">Ver detalle</a>
            <button class="btn btn-primary btn-agregar-carrito w-50" onclick="agregarAlCarrito(${p.id})">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderizarDetalleProducto() {
  const contenedor = document.getElementById("detalle-container");
  if (!contenedor) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const lista = obtenerProductosPublicos();
  const producto = lista.find((p) => p.id === id);

  if (!producto) {
    contenedor.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="fs-5 text-muted">Producto no encontrado.</p>
        <a href="catalogo.html" class="btn btn-primary">Volver al catálogo</a>
      </div>`;
    return;
  }

  document.title = `${producto.nombre} - Sonido Vivo`;

  contenedor.innerHTML = `
    <div class="col-md-5">
      <img src="${producto.imagen}" class="img-fluid rounded shadow-sm" alt="${producto.nombre}">
    </div>
    <div class="col-md-7">
      <span class="badge text-bg-secondary mb-2">${producto.categoria}</span>
      <h2 class="fw-bold">${producto.nombre}</h2>
      <h3 class="text-primary fw-bold my-3">${formatearPrecio(producto.precio)}</h3>
      <p class="lead text-secondary">${producto.descripcionLarga || producto.descripcion}</p>
      <p class="text-muted">Stock disponible: <strong>${producto.stock}</strong> unidades</p>
      <div class="d-flex gap-2 mt-4">
        <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        <a href="catalogo.html" class="btn btn-outline-secondary">Volver al catálogo</a>
      </div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo();
  renderizarDetalleProducto();
});