// Validación de RUN sin puntos ni guion
function validarRUN(runCompleto) {
  const regex = /^[0-9]{7,8}[0-9kK]{1}$/;
  if (!regex.test(runCompleto)) return false;

  const cuerpo = runCompleto.slice(0, -1);
  let dvIngresado = runCompleto.slice(-1).toUpperCase();

  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo.charAt(i), 10) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const resto = suma % 11;
  let dvCalculado = 11 - resto;

  if (dvCalculado === 11) dvCalculado = "0";
  else if (dvCalculado === 10) dvCalculado = "K";
  else dvCalculado = dvCalculado.toString();

  return dvIngresado === dvCalculado;
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function mostrarError(inputId, mensaje) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.classList.add("is-invalid");
  let feedback = input.nextElementSibling;
  if (!feedback || !feedback.classList.contains("invalid-feedback")) {
    feedback = document.createElement("div");
    feedback.className = "invalid-feedback";
    input.parentNode.appendChild(feedback);
  }
  feedback.textContent = mensaje;
}

function limpiarError(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.classList.remove("is-invalid");
}

// Inicialización de escuchadores según el formulario
document.addEventListener("DOMContentLoaded", () => {
  // Carga de selects dinámicos si existen en el DOM
  if (document.getElementById("regionesSelect") && document.getElementById("comunasSelect")) {
    cargarRegionesYComunas("regionesSelect", "comunasSelect");
  }

  // Validaciones Formulario de Contacto
  const formContacto = document.getElementById("form-contacto");
  if (formContacto) {
    formContacto.addEventListener("submit", (e) => {
      e.preventDefault();
      let valido = true;

      const nombre = document.getElementById("contacto-nombre").value.trim();
      const correo = document.getElementById("contacto-correo").value.trim();
      const mensaje = document.getElementById("contacto-mensaje").value.trim();

      if (!nombre || nombre.length > 100) {
        mostrarError("contacto-nombre", "El nombre es obligatorio (máx. 100 caracteres).");
        valido = false;
      } else { limpiarError("contacto-nombre"); }

      if (correo.length > 100 || !validarEmail(correo)) {
        mostrarError("contacto-correo", "Correo inválido o excede 100 caracteres.");
        valido = false;
      } else { limpiarError("contacto-correo"); }

      if (!mensaje || mensaje.length > 500) {
        mostrarError("contacto-mensaje", "El mensaje es obligatorio (máx. 500 caracteres).");
        valido = false;
      } else { limpiarError("contacto-mensaje"); }

      if (valido) {
        window.location.href = "mensajeEnviado.html";
      }
    });
  }

  // Validaciones Formulario Registro
  const formRegistro = document.getElementById("form-registro");
  if (formRegistro) {
    formRegistro.addEventListener("submit", (e) => {
      e.preventDefault();
      let valido = true;

      const run = document.getElementById("reg-run").value.trim();
      const nombre = document.getElementById("reg-nombre").value.trim();
      const apellidos = document.getElementById("reg-apellidos").value.trim();
      const correo = document.getElementById("reg-correo").value.trim();
      const direccion = document.getElementById("reg-direccion").value.trim();

      if (!validarRUN(run)) {
        mostrarError("reg-run", "RUN inválido. Ingrésalo sin puntos ni guion (ej: 19012345K).");
        valido = false;
      } else { limpiarError("reg-run"); }

      if (!nombre || nombre.length > 50) {
        mostrarError("reg-nombre", "Nombre obligatorio (máx. 50 caracteres).");
        valido = false;
      } else { limpiarError("reg-nombre"); }

      if (!apellidos || apellidos.length > 100) {
        mostrarError("reg-apellidos", "Apellidos obligatorios (máx. 100 caracteres).");
        valido = false;
      } else { limpiarError("reg-apellidos"); }

      if (!correo || correo.length > 100 || !validarEmail(correo)) {
        mostrarError("reg-correo", "Correo obligatorio y de formato válido (máx. 100 caracteres).");
        valido = false;
      } else { limpiarError("reg-correo"); }

      if (!direccion || direccion.length > 300) {
        mostrarError("reg-direccion", "Dirección obligatoria (máx. 300 caracteres).");
        valido = false;
      } else { limpiarError("reg-direccion"); }

      if (valido) {
        alert("Registro exitoso. Ya puedes iniciar sesión.");
        window.location.href = "iniciar-sesion.html";
      }
    });
  }
});

// Validaciones Formulario de Login
  const formLogin = document.getElementById("form-login");
  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      let valido = true;

      const correo = document.getElementById("login-correo").value.trim();
      const clave = document.getElementById("login-clave").value;

      if (!correo || correo.length > 100 || !validarEmail(correo)) {
        mostrarError("login-correo", "Correo obligatorio, de formato válido y máx. 100 caracteres.");
        valido = false;
      } else {
        limpiarError("login-correo");
      }

      if (!clave || clave.length < 4 || clave.length > 10) {
        mostrarError("login-clave", "La contraseña es obligatoria y debe tener entre 4 y 10 caracteres.");
        valido = false;
      } else {
        limpiarError("login-clave");
      }

      if (valido) {
        if (correo.toLowerCase().includes("admin")) {
          alert("¡Bienvenido Administrador!");
          window.location.href = "admin-main.html";
        } else {
          alert("¡Inicio de sesión exitoso!");
          window.location.href = "index.html";
        }
      }
    });
  }