# Proyecto Final React - My Hoodie

## Descripción del proyecto
Se ha desarrollado una aplicación integral de un e-commerce de indumentaria, utilizando la tecnología React JS, la cual ofrece una experiencia de navegación a través de diversas categorías de productos, así como un listado general que permite a los usuarios seleccionar artículos para agregar al carrito de compras. Además, la aplicación facilita la generación de órdenes de compra mediante un formulario y un carrito de compras que permite la gestión de artículos, incluyendo la posibilidad de modificar, vaciar o ajustar las cantidades de los productos seleccionados.

Todas las órdenes de compra son almacenadas de manera segura en Firebase, garantizando así la disponibilidad de los datos. 
Después de completar una compra, los usuarios tienen la opción de visualizar identificador único (ID) para la orden, el cual es generado automáticamente mediante una consulta en tiempo real a la base de datos de Firebase.

## Tecnologías utilizadas

 - React Vite - React Router DOM 
 - HTML/CSS 
 - JavaScript 
 - Bootstrap 
 - Firebase
 
 ## Intalación del proyecto
 1. Clonar el repositorio desde el repositorio de GitHub

     `https://github.com/AntonellaGatti/ProyectoFinalReactGatti.git`

2. Ingresar a la carpeta del proyecto e instalar las dependencias
   
    `cd myHoodie`
    `npm install`

4. Levantar el proyecto en el local host con el comando
   
    `npm run dev`
 
 5. Se abrirá en el navegador el link indicado por la consola ➜  Local: http://localhost:5174/

4. Para el correcto funcionamiento del proyecto se deberá contar con las variables de entorno seteadas en el archivo .env. Las mismas son: 
	-   `VITE_API_KEY`: API key de Firebase
	-   `VITE_AUTH_DOMAIN`: Dominio de autenticación de Firebase
	-   `VITE_PROJECT_ID`: ID del proyecto de Firebase
	-   `VITE_STORAGE_BUCKET`: Bucket de almacenamiento de Firebase
	-   `VITE_MESSAGING_SENDER_ID`: ID del sender de Firebase
	-   `VITE_APP_ID`: ID de la aplicación de Firebase

## Demo
 
