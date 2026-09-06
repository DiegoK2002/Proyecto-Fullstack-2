function actualizarContadoresAdmin() {
  // 1. Obtener total de productos
  let totalProductos = 0;
  const prodGuardados = localStorage.getItem("productos");

  if (prodGuardados) {
    try {
      const parsedProds = JSON.parse(prodGuardados);
      totalProductos = Array.isArray(parsedProds) ? parsedProds.length : 0;
    } catch (e) {
      console.error("Error al leer productos de localStorage", e);
    }
  } else if (typeof productos !== "undefined" && Array.isArray(productos)) {
    totalProductos = productos.length;
  }

  // 2. Obtener total de usuarios
  let totalUsuarios = 0;
  const usrGuardados = localStorage.getItem("usuarios");

  if (usrGuardados) {
    try {
      const parsedUsrs = JSON.parse(usrGuardados);
      totalUsuarios = Array.isArray(parsedUsrs) ? parsedUsrs.length : 0;
    } catch (e) {
      console.error("Error al leer usuarios de localStorage", e);
    }
  } else if (typeof usuariosPorDefecto !== "undefined" && Array.isArray(usuariosPorDefecto)) {
    totalUsuarios = usuariosPorDefecto.length;
  }

  // Renderizar en el DOM
  const elemProd = document.getElementById("cant-productos");
  if (elemProd) {
    elemProd.textContent = `${totalProductos} Activos`;
  }

  const elemUsr = document.getElementById("cant-usuarios");
  if (elemUsr) {
    elemUsr.textContent = `${totalUsuarios} Registrados`;
  }
}

document.addEventListener("DOMContentLoaded", actualizarContadoresAdmin);