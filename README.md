# App de Descuentos Gamer 🎮 – Laboratorio Extra Módulo Layout

Este proyecto corresponde a la práctica extra del Módulo 1 del Máster en Desarrollo Frontend de Lemoncode.  
El objetivo era crear el layout de una aplicación web cumpliendo una serie de requisitos técnicos y estructurales.  
En este caso, se ha optado por diseñar una aplicación ficticia centrada en **buscar descuentos de videojuegos**.

## 🧩 Descripción general

La aplicación cuenta con las siguientes secciones principales:

- **Header**:
  - Toolbar con input de búsqueda.
  - Nombre del usuario logado.
  - Switch para cambiar el tema de la aplicación
  - Nombre de la aplicación.
- **Nav**:
  - Menú de navegación con distintas opciones.
- **Main**:
  - Zona principal con tarjetas de videojuegos en oferta.
  - Fondo personalizado (diferente del blanco).
- **Footer**:
  - Información de la compañía.

## ✅ Funcionalidades implementadas

- ✔ Layout responsive adaptado a **desktop y dispositivos móviles/tablets**.
- ✔ **Barra de navegación siempre visible** al hacer scroll (sticky navigation).
- ✔ En resoluciones menores a 768px:
  - Se oculta la barra superior con el input y el nombre de usuario.
  - El título del menú también se oculta.
  - El menú pasa a situarse bajo el header.
  - El contenido se reorganiza para mantener la legibilidad y la accesibilidad.
- ✔ Uso de **Flexbox y CSS Grid** para estructurar el contenido.

### 🌗 Funcionalidad adicional: Modo claro/oscuro

Además de los requisitos solicitados, se ha implementado una funcionalidad para alternar entre **modo claro y modo oscuro**, mejorando la experiencia de usuario en distintos entornos de iluminación.

Se ha hecho uso de variables CSS para facilitar el cambio de tema y mantener una estructura escalable en los estilos.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Media Queries...)
- JavaScript (para el cambio de tema)

## 🧑‍💻 Autor

Esta práctica ha sido desarrollada como parte del Máster Frontend de [Lemoncode](https://www.lemoncode.net/), con libertad creativa en cuanto a temática y estilo.
