document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form.form-card');
  if (!form) return;

  // Se desactiva la validación nativa para que se ejecute la nuestra
  form.noValidate = true;

  var nombre = document.getElementById('user-name');
  var correo = document.getElementById('user-email');
  var patronNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  var patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', function (evento) {
    var errores = [];
    var valorNombre = nombre.value.trim();
    var valorCorreo = correo.value.trim();

    if (valorNombre === '') {
      errores.push('El nombre completo es obligatorio');
    } else if (valorNombre.length < 3 || !patronNombre.test(valorNombre)) {
      errores.push('El nombre debe tener mínimo 3 caracteres y solo letras y espacios');
    }

    if (valorCorreo === '') {
      errores.push('El correo es obligatorio');
    } else if (!patronCorreo.test(valorCorreo)) {
      errores.push('El correo no tiene un formato válido (ejemplo: ana@empresa.com)');
    }

    evento.preventDefault();
    if (errores.length > 0) {
      alert(errores.join('\n'));
    } else {
      // No hay servidor que reciba /registro, así que se simula el envío
      alert('Formulario válido: datos listos para enviar');
    }
  });
});
