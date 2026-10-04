document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form.form-card');
  if (!form) return;

  // Se desactiva la validación nativa para que se ejecute la nuestra
  form.noValidate = true;

  var patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var patronTelefono = /^\d{10}$/;

  function etiquetaDe(campo) {
    var etiqueta = form.querySelector('label[for="' + campo.id + '"]');
    var texto = etiqueta ? etiqueta.textContent : (campo.name || campo.id);
    return texto.replace('*', '').trim();
  }

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    var errores = [];

    form.querySelectorAll('input, select, textarea').forEach(function (campo) {
      if (campo.type === 'submit' || campo.type === 'button') return;

      var esCheck = campo.type === 'checkbox';
      var valor = campo.value.trim();
      var vacio = esCheck ? !campo.checked : valor === '';
      var nombre = etiquetaDe(campo);

      if (campo.required && vacio) {
        errores.push('Falta completar: ' + nombre);
      } else if (vacio || esCheck) {
        return;
      } else if (campo.type === 'email' && !patronCorreo.test(valor)) {
        errores.push('El correo no tiene un formato válido (ejemplo: ana@empresa.com)');
      } else if (campo.type === 'tel' && !patronTelefono.test(valor)) {
        errores.push('El teléfono debe tener exactamente 10 dígitos');
      } else if (!campo.checkValidity()) {
        errores.push(nombre + ': ' + campo.validationMessage);
      }
    });

    if (errores.length > 0) {
      alert(errores.join('\n'));
    } else {
      // No hay servidor que reciba /registro, así que se simula el envío
      alert('Formulario válido: datos listos para enviar');
    }
  });
});
