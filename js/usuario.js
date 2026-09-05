document.addEventListener("DOMContentLoaded", () => {
  const formPerfil = document.getElementById("form-perfil");

  // Cargar datos previos si existen
  const perfilGuardado = localStorage.getItem("perfil_usuario");
  if (perfilGuardado) {
    const usuario = JSON.parse(perfilGuardado);
    document.getElementById("u-nombre").textContent = usuario.nombre;
    document.getElementById("u-correo").textContent = usuario.correo;
    document.getElementById("u-direccion").textContent = usuario.direccion;
    document.getElementById("user-saludo").textContent = usuario.nombre.split(" ")[0];
    document.getElementById("user-navbar-nombre").textContent = usuario.nombre;
  }

  if (formPerfil) {
    formPerfil.addEventListener("submit", (e) => {
      e.preventDefault();

      const nuevoNombre = document.getElementById("edit-nombre").value.trim();
      const nuevoCorreo = document.getElementById("edit-correo").value.trim();
      const nuevaDireccion = document.getElementById("edit-direccion").value.trim();

      const usuarioActualizado = {
        nombre: nuevoNombre,
        correo: nuevoCorreo,
        direccion: nuevaDireccion
      };

      localStorage.setItem("perfil_usuario", JSON.stringify(usuarioActualizado));

      // Actualizar vista
      document.getElementById("u-nombre").textContent = nuevoNombre;
      document.getElementById("u-correo").textContent = nuevoCorreo;
      document.getElementById("u-direccion").textContent = nuevaDireccion;
      document.getElementById("user-saludo").textContent = nuevoNombre.split(" ")[0];
      document.getElementById("user-navbar-nombre").textContent = nuevoNombre;

      const modalElement = document.getElementById("modalEditarPerfil");
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) modalInstance.hide();
    });
  }
});