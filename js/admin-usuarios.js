// Arreglo inicial de demostración gráfica
let usuariosDemo = [
  { run: "19.012.345-K", nombre: "Administrador", apellidos: "General", correo: "admin@sonidovivo.cl", rol: "Administrador" },
  { run: "18.765.432-1", nombre: "María", apellidos: "González", correo: "maria@ejemplo.com", rol: "Cliente" },
  { run: "17.432.109-8", nombre: "Carlos", apellidos: "Tapia", correo: "carlos.tapia@gmail.com", rol: "Cliente" }
];

function renderizarTablaUsuarios() {
  const tbody = document.getElementById("tabla-usuarios-body");
  if (!tbody) return;

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

  const index = document.getElementById("u-index").value;
  const usuario = {
    run: document.getElementById("u-run").value.trim(),
    nombre: document.getElementById("u-nombre").value.trim(),
    apellidos: document.getElementById("u-apellidos").value.trim(),
    correo: document.getElementById("u-correo").value.trim(),
    rol: document.getElementById("u-rol").value
  };

  if (index !== "") {
    usuariosDemo[parseInt(index, 10)] = usuario;
  } else {
    usuariosDemo.push(usuario);
  }

  renderizarTablaUsuarios();

  const modalElement = document.getElementById("modalUsuario");
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) modalInstance.hide();

  limpiarFormularioUsuario();
}

function prepararEdicionUsuario(index) {
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
  if (!confirm("¿Deseas eliminar este usuario de la vista?")) return;
  usuariosDemo.splice(index, 1);
  renderizarTablaUsuarios();
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