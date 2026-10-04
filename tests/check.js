const fs = require('fs');

const html = fs.readFileSync('taller_1P.html', 'utf8');
let errores = 0;

function revisar(nombre, condicion) {
  if (condicion) {
    console.log('OK   - ' + nombre);
  } else {
    console.log('FALLA - ' + nombre);
    errores++;
  }
}

revisar('Tiene etiqueta <title>', /<title>.+<\/title>/i.test(html));
revisar('Tiene lang="es"', /<html[^>]*lang="es"/i.test(html));
revisar('Existe el archivo CSS', fs.existsSync('css/taller_css_1P.css'));
revisar('Existe la imagen', fs.existsSync('assets/img/avatar.jpeg'));

if (errores > 0) {
  console.log('\nPruebas fallidas: ' + errores);
  process.exit(1);
}
console.log('\nTodas las pruebas pasaron');