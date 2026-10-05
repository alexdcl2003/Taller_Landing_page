# Taller Landing Page

Landing page del "Máster en Arquitectura Web & Frontend Semántico | Tech Academy", hecha con HTML y CSS. Se usa como proyecto base para la Práctica 2 de Gestión de la Configuración de Software (UNEMI): control de versiones con Git y GitHub, integración continua con GitHub Actions y entrega de una versión (release).

## Estructura del proyecto

- `taller_1P.html`: página principal
- `css/`: hojas de estilo (`taller_css_1P.css` y `variables.css`)
- `assets/img/`: imágenes del proyecto
- `tests/check.js`: pruebas automáticas
- `package.json`: configuración de Node y script de pruebas
- `CHANGELOG.md`: historial de cambios del proyecto

## Cómo ejecutarlo

1. Clona el repositorio:

```bash
   git clone https://github.com/alexdcl2003/Taller_Landing_page.git
```

2. Abre `taller_1P.html` en el navegador.

## Pruebas

Requiere tener Node.js instalado. Desde la carpeta del proyecto ejecuta:

```bash
npm test
```

Las pruebas verifican que el HTML tenga la etiqueta `<title>` y el atributo `lang="es"`, y que existan el archivo CSS y la imagen del avatar.

## Flujo de trabajo

- Nadie trabaja directo en `main`: cada cambio se hace en una rama propia y se integra con un pull request.
- Cada pull request lo revisa otro integrante del grupo antes de fusionarse.
- Los cambios importantes se registran en el archivo `CHANGELOG.md`.

## 🛠️ Política de commits

Para mantener un historial ordenado y comprensible, este proyecto utiliza convenciones para los mensajes de los commits. Todos los integrantes deben usar los siguientes prefijos antes de su mensaje:

- `feat:` para nuevas funcionalidades (ej. `feat: validación del formulario de contacto`).
- `fix:` para corrección de errores (ej. `fix: corrección en la ruta del CSS`).
- `docs:` para cambios en la documentación (ej. `docs: actualización del README y Changelog`).
- `ci:` para cambios en los archivos y scripts de configuración del pipeline (ej. `ci: agrega workflow de validación para GitHub Actions`).

## Integrantes

- Alexis Cajamarca
- Carlos Calle
- Debora Bermeo
- Eduardo Alvarado
- Cristhian Gonzales

## Información académica

- Universidad: Universidad Estatal de Milagro (UNEMI)
- Carrera: Software
- Asignatura: Gestión de la Configuración de Software
- Docente: Omar Andrés Oviedo Armijos