
## Prueba técnica: Reversso

En este archivo encontrarán una pequeña guía para la correcta descarga y el funcionamiento de la página, explicando a detalle cada sección.

## Descargar y descomprimir la carpeta

## Se recomienda tener una versión de Node (v14.16.0) que es la ultima LTS (Long Term Support), con esta versión de node incluye una versión de npm (v6.14.11)

### `cd Reversso-master`

Posicionate en el directorio raíz desde una consola y ejecuta el comando "npm install" para instalar las dependencias del proyecto.

### `npm run start`

Levanta la página web hecha en react.

## Detalles de lo realizado

### General

Para la realización de esta prueba se utilizó el framework React Js y según los requerimientos se especifican las dependencias mínimas para instalarlo. Además se utiliza Styled-Components para el CSS. En la raíz del proyecto hay una carpeta llamada "imagenes" donde se encuentran las capturas de pantallas de como se visualiza el proyecto en mi computador. Además todas las vistas están conectadas según se detalla más adelante.

### Desktop

Iniciando por la vista en desktop que según figma es de las dimenciones (w: 1440 y h: 900).

En el home se encuentra el formulario de inicio de sesión del lado derecho, el cual en la parte inferior se encuentra un link para redireccionar al componente de crear cuenta, al darle click renderiza dicho componente sin recargar la página y manteniendose en la misma url, de esta manera se renderiza solo el componente que cambia y no toda la página, asi tenemos mejor performance y rendimiento.

El componente de crear usuario contiene un botón, el cual si presionamos nos redireccionará de nuevo a la pantalla de inicio con un mensaje que indica que nos hemos registro con éxito, además en la parte inferior encontramos un link que nos devolverá a la pantalla inicial sin dicho mensaje.

### Mobile

Pasando a la vista mobile que según figma es de las dimenciones (w: 375 y h: 812)

En el home se encuentrán dos botones y un link.
 
El botón "Iniciar Sesión" nos redireccionará a la página para iniciar sesión, en este caso nos redirecciona a la url "/signin" sin recargar la página.

El segundo botón nos abrirá un popup con las opciones de iniciar sesión con otras cuentas

Y por ultimo el link para crear una cuenta nos redireccionará a la url "/signup" sin recargar la página

En la página de iniciar sesión se encuentra un botón para volver al home, además de un botón para iniciar sesión con otras cuentas que abre el mismo popup anterior y un link para redireccionar a la pantalla de crear una cuenta

En la vista de crear cuenta también se encuentra un botón para volver al home, un botón que redireccionará a la página para iniciar sesión con un mensaje indicando que se ha registrado con éxito, además se encuentra el botón para registrarse con otras cuentas y un link que redireccionará a la pantalla de iniciar sesión sin el mensaje.

En la vista mobile, sí cambia de url para mantener todas páginas en una sola vista sin tener que hacer scroll. Se recomienda que si se va a pasar del tamaño mobile al tamaño desktop, sea desde el home, de esta manera renderizará la vista desktop de una manera optima.
