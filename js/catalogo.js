// Renderiza el catálogo y la vista de detalle
// (producto-detalle.html) a partir de 'productos' (productos.js).

function renderizarCatalogo() {
  const contenedor = document.getElementById("catalogo-container");
  if (!contenedor) return;

  let html = "";

  productos.forEach((p) => {
    html +=
      '<div class="col">' +
      '<div class="card h-100">' +
      '<img src="' +
      p.imagen +
      '" class="card-img-top" alt="' +
      p.nombre +
      '">' +
      '<div class="card-body d-flex flex-column">' +
      '<h5 class="card-title">' +
      p.nombre +
      "</h5>" +
      '<p class="flex-grow-1">' +
      p.descripcion +
      "</p>" +
      "<h4>" +
      formatoPrecio(p.precio) +
      "</h4>" +
      '<div class="d-flex gap-2 mt-2">' +
      '<a href="producto-detalle.html?id=' +
      p.id +
      '" class="btn btn-outline-primary">Ver detalle</a>' +
      '<button class="btn btn-primary" data-agregar-id="' +
      p.id +
      '" onclick="agregarAlCarrito(' +
      p.id +
      ')">Agregar</button>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  });

  contenedor.innerHTML = html;
}

function renderizarDetalleProducto() {
  const contenedor = document.getElementById("detalle-container");
  if (!contenedor) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    contenedor.innerHTML =
      '<div class="col-12 text-center py-5">' +
      "<p>No encontramos ese producto.</p>" +
      '<a href="catalogo.html" class="btn btn-primary">Volver al catálogo</a>' +
      "</div>";
    return;
  }

  document.title = producto.nombre + " - Sonido Vivo";

  contenedor.innerHTML =
    '<div class="col-md-5">' +
    '<img src="' +
    producto.imagen +
    '" class="img-fluid rounded" alt="' +
    producto.nombre +
    '">' +
    "</div>" +
    '<div class="col-md-7">' +
    '<span class="badge text-bg-secondary mb-2">' +
    producto.categoria +
    "</span>" +
    "<h2>" +
    producto.nombre +
    "</h2>" +
    '<h3 class="text-primary">' +
    formatoPrecio(producto.precio) +
    "</h3>" +
    "<p>" +
    producto.descripcionLarga +
    "</p>" +
    '<p class="text-muted">Stock disponible: ' +
    producto.stock +
    " unidades</p>" +
    '<div class="d-flex gap-2 mt-3">' +
    '<button class="btn btn-primary" data-agregar-id="' +
    producto.id +
    '" onclick="agregarAlCarrito(' +
    producto.id +
    ')">Agregar al carrito</button>' +
    '<a href="catalogo.html" class="btn btn-outline-secondary">Volver al catálogo</a>' +
    "</div>" +
    "</div>";
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo();
  renderizarDetalleProducto();
});
