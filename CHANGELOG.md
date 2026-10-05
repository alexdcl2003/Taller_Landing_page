# Changelog

Todos los cambios importantes de este proyecto se documentan aquí.

## [1.0.0] - Sin publicar

### Agregado
- Pruebas automáticas (`tests/check.js` y `package.json`) que verifican el título, el idioma, el CSS y la imagen (PR #2).
- Validación del número telefónico al enviar el formulario, en la carpeta `js/` (PR #4).
- Workflow de integración continua con GitHub Actions, en `.github/workflows/`, que ejecuta las pruebas y genera un reporte (PR #5).

### Corregido
- Se renombra la carpeta `assest` a `assets` y se actualizan las rutas (PR #1).
- Se corrige la ruta del CSS en `taller_1P.html`, de `/css/...` a `css/...`, para que cargue al abrir el archivo o publicarlo (PR #3).