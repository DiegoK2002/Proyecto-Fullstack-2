// Obtener productos garantizando carga inicial si localStorage está vacío
function obtenerProductos() {
  const guardados = localStorage.getItem("productos");
  
  if (guardados) {
    try {
      const parsed = JSON.parse(guardados);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.error("Error al leer localStorage:", e);
    }
  }

  // Si no hay datos o está vacío, recargar desde el arreglo global de productos.js
  if (typeof productos !== "undefined" && Array.isArray(productos)) {
    localStorage.setItem("productos", JSON.stringify(productos));
    return productos;
  }

  return [];
}

function guardarEnStorage(lista) {
  localStorage.setItem("productos", JSON.stringify(lista));
}

function formatearPrecio(precio) {
  return "$" + Number(precio).toLocaleString("es-CL");
}

function renderizarTablaAdmin() {
  const tbody = document.getElementById("tabla-productos-body");
  if (!tbody) return;

  const lista = obtenerProductos();

  if (lista.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">No hay productos en el inventario.</td></tr>`;
    return;
  }

  tbody.innerHTML = lista.map((p) => `
    <tr>
      <td>${p.id}</td>
      <td><strong>${p.nombre}</strong></td>
      <td>${p.categoria || 'Sin categoría'}</td>
      <td>${formatearPrecio(p.precio)}</td>
      <td>
        <span class="badge ${p.stock > 0 ? "bg-success" : "bg-danger"}">
          ${p.stock} unid.
        </span>
      </td>
      <td class="text-end">
        <button class="btn btn-sm btn-outline-primary me-1" onclick="prepararEdicion(${p.id})">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger" onclick="eliminarProducto(${p.id})">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join("");
}

function guardarProducto(e) {
  e.preventDefault();

  const lista = obtenerProductos();
  const idInput = document.getElementById("p-id").value;
  const nombre = document.getElementById("p-nombre").value.trim();
  const categoria = document.getElementById("p-categoria").value;
  const precio = parseInt(document.getElementById("p-precio").value, 10);
  const stock = parseInt(document.getElementById("p-stock").value, 10);
  const imagen = document.getElementById("p-imagen").value.trim() || "imagenes/cards/1.png";
  const descripcion = document.getElementById("p-descripcion").value.trim();

  if (idInput) {
    // Editar existente
    const index = lista.findIndex((p) => p.id === parseInt(idInput, 10));
    if (index !== -1) {
      lista[index] = {
        ...lista[index],
        nombre,
        categoria,
        precio,
        stock,
        imagen,
        descripcion,
        descripcionLarga: descripcion
      };
    }
  } else {
    // Crear nuevo producto
    const nuevoId = lista.length > 0 ? Math.max(...lista.map((p) => p.id)) + 1 : 1;
    lista.push({
      id: nuevoId,
      nombre,
      categoria,
      precio,
      stock,
      imagen,
      descripcion,
      descripcionLarga: descripcion
    });
  }

  guardarEnStorage(lista);
  renderizarTablaAdmin();

  // Cerrar modal
  const modalElement = document.getElementById("modalProducto");
  if (modalElement) {
    const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modalInstance.hide();
  }

  document.getElementById("form-producto").reset();
  document.getElementById("p-id").value = "";
}

function prepararEdicion(id) {
  const lista = obtenerProductos();
  const p = lista.find((item) => item.id === id);
  if (!p) return;

  document.getElementById("p-id").value = p.id;
  document.getElementById("p-nombre").value = p.nombre;
  document.getElementById("p-categoria").value = p.categoria || "Guitarras acústicas";
  document.getElementById("p-precio").value = p.precio;
  document.getElementById("p-stock").value = p.stock;
  document.getElementById("p-imagen").value = p.imagen || "";
  document.getElementById("p-descripcion").value = p.descripcion || "";

  document.getElementById("modalProductoTitulo").textContent = "Editar Producto";

  const modalElement = document.getElementById("modalProducto");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
  modalInstance.show();
}

function eliminarProducto(id) {
  if (!confirm("¿Estás seguro de eliminar este producto del inventario?")) return;

  let lista = obtenerProductos();
  lista = lista.filter((p) => p.id !== id);

  guardarEnStorage(lista);
  renderizarTablaAdmin();
}

function limpiarFormulario() {
  const form = document.getElementById("form-producto");
  if (form) form.reset();
  document.getElementById("p-id").value = "";
  document.getElementById("modalProductoTitulo").textContent = "Nuevo Producto";
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarTablaAdmin();

  const form = document.getElementById("form-producto");
  if (form) form.addEventListener("submit", guardarProducto);

  const btnNuevo = document.getElementById("btn-nuevo-producto");
  if (btnNuevo) btnNuevo.addEventListener("click", limpiarFormulario);
});