// Función para mostrar alertas de confirmación
function mostrarAlerta(mensaje, tipo = "success") {
  const contenedor = document.getElementById("alerta-container");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show shadow-sm d-flex align-items-center" role="alert">
      <i class="bi ${tipo === 'danger' ? 'bi-person-x-fill' : 'bi-check-circle-fill'} fs-5 me-2"></i>
      <div>${mensaje}</div>
      <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  setTimeout(() => {
    const alertEl = contenedor.querySelector('.alert');
    if (alertEl) {
      const bsAlert = bootstrap.Alert.getOrCreateInstance(alertEl);
      bsAlert.close();
    }
  }, 3500);
}

const usuariosPorDefecto = [
  { run: "19.012.345-K", nombre: "Administrador", apellidos: "General", correo: "admin@sonidovivo.cl", rol: "Administrador" },
  { run: "18.765.432-1", nombre: "María", apellidos: "González", correo: "maria@ejemplo.com", rol: "Cliente" },
  { run: "17.432.109-8", nombre: "Carlos", apellidos: "Tapia", correo: "carlos.tapia@gmail.com", rol: "Cliente" }
];

function obtenerUsuarios() {
  const guardados = localStorage.getItem("usuarios");

  if (guardados) {
    try {
      const parsed = JSON.parse(guardados);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch (e) {
      console.error("Error al leer localStorage:", e);
    }
  }

  localStorage.setItem("usuarios", JSON.stringify(usuariosPorDefecto));
  return usuariosPorDefecto;
}

function guardarUsuariosEnStorage(lista) {
  localStorage.setItem("usuarios", JSON.stringify(lista));
}

function renderizarTablaUsuarios() {
  const tbody = document.getElementById("tabla-usuarios-body");
  if (!tbody) return;

  const usuariosDemo = obtenerUsuarios();

  if (usuariosDemo.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted">No existen usuarios registrados.</td></tr>`;
    return;
  }

  tbody.innerHTML = usuariosDemo.map((u, index) => `
    <tr>
      <td>${u.run}</td>
      <td><strong>${u.nombre} ${u.apellidos}</strong></td>
      <td>${u.correo}</td>
      <td>
        <span class="badge ${u.rol === "Administrador" ? "bg-danger" : "bg-primary"}">
          ${u.rol}
        </span>
      </td>
      <td class="text-end">
        <button class="btn btn-sm btn-outline-primary me-1" onclick="prepararEdicionUsuario(${index})">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger" onclick="eliminarUsuario(${index})">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join("");
}

function guardarUsuario(e) {
  e.preventDefault();

  const usuariosDemo = obtenerUsuarios();
  const index = document.getElementById("u-index").value;
  const usuario = {
    run: document.getElementById("u-run").value.trim(),
    nombre: document.getElementById("u-nombre").value.trim(),
    apellidos: document.getElementById("u-apellidos").value.trim(),
    correo: document.getElementById("u-correo").value.trim(),
    rol: document.getElementById("u-rol").value
  };

  const esEdicion = index !== "";

  if (esEdicion) {
    usuariosDemo[parseInt(index, 10)] = usuario;
  } else {
    usuariosDemo.push(usuario);
  }

  guardarUsuariosEnStorage(usuariosDemo);
  renderizarTablaUsuarios();

  const modalElement = document.getElementById("modalUsuario");
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) modalInstance.hide();

  limpiarFormularioUsuario();

  // Notificación en pantalla
  if (esEdicion) {
    mostrarAlerta(`El usuario <strong>${usuario.nombre} ${usuario.apellidos}</strong> ha sido editado correctamente.`, "success");
  } else {
    mostrarAlerta(`El usuario <strong>${usuario.nombre} ${usuario.apellidos}</strong> ha sido creado con éxito.`, "success");
  }
}

function prepararEdicionUsuario(index) {
  const usuariosDemo = obtenerUsuarios();
  const u = usuariosDemo[index];
  if (!u) return;

  document.getElementById("u-index").value = index;
  document.getElementById("u-run").value = u.run;
  document.getElementById("u-nombre").value = u.nombre;
  document.getElementById("u-apellidos").value = u.apellidos;
  document.getElementById("u-correo").value = u.correo;
  document.getElementById("u-rol").value = u.rol;

  document.getElementById("modalUsuarioTitulo").textContent = "Editar Usuario";

  const modalElement = document.getElementById("modalUsuario");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
  modalInstance.show();
}

function eliminarUsuario(index) {
  const usuariosDemo = obtenerUsuarios();
  const usuarioAEliminar = usuariosDemo[index];

  if (!confirm("¿Deseas eliminar este usuario de la vista?")) return;

  usuariosDemo.splice(index, 1);
  guardarUsuariosEnStorage(usuariosDemo);
  renderizarTablaUsuarios();

  // Notificación de eliminación
  mostrarAlerta(`El usuario <strong>${usuarioAEliminar ? usuarioAEliminar.nombre + ' ' + usuarioAEliminar.apellidos : ''}</strong> ha sido eliminado.`, "danger");
}

function limpiarFormularioUsuario() {
  const form = document.getElementById("form-usuario");
  if (form) form.reset();
  document.getElementById("u-index").value = "";
  document.getElementById("modalUsuarioTitulo").textContent = "Gestión de Usuario";
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarTablaUsuarios();

  const form = document.getElementById("form-usuario");
  if (form) form.addEventListener("submit", guardarUsuario);

  const btnNuevo = document.getElementById("btn-nuevo-usuario");
  if (btnNuevo) btnNuevo.addEventListener("click", limpiarFormularioUsuario);
});