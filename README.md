# PROYECTO DE API PARA EL MANEJO DE UNA BASE DE DATOS DE ENTRADAS DE BLOG
Descripción
Este proyecto consiste en la creación de una API que permita el manejo de una base de datos de entradas de blog. La API facilita la creación, modificación, eliminación y consulta de entradas.
# Tecnologías Utilizadas
•	Node.js: Utilizado para la conexión con la base de datos.
•	Express: Servidor web implementado en JavaScript.
•	MySQL / MariaDB: Base de datos gestionada mediante la librería mysql2.
# Base de Datos
La base de datos, denominada blogs, incluye una tabla articulos con la siguiente estructura:
•	id: INT, autoincremental, clave primaria.
•	titulo: VARCHAR, título del artículo.
•	contenido: TEXT, cuerpo del artículo.
•	fecha: DATE, fecha de publicación.
•	autor: VARCHAR, nombre del autor.
# Repositorio
Creación de un Repositorio a Partir de una Plantilla
Para iniciar un nuevo proyecto a partir de esta plantilla, haz clic en "Use this template" en la parte superior de la página del repositorio.
Clonación del Repositorio
Para clonar el repositorio usando la terminal, ejecuta el siguiente comando:
bash
Copy code
git clone <url del repositorio>
# Instalación
Instala las dependencias del proyecto ejecutando:
bash
Copy code
npm install
# Configuración del Archivo .env
Actualiza el archivo .env en la raíz del proyecto con las siguientes variables de entorno:
env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=<AÑADIR_LA_CONTRASEÑA_DE_MARIADB_ACÁ>
DB_NAME=blogs
DB_PORT=3306  # o el puerto configurado en su base de datos
Ejecución del Proyecto
Para ejecutar el proyecto, utiliza el comando:
bash
Copy code
npm run dev
# Documentación de la API
La documentación de la API se proporciona en el archivo API-TO-DO.json.
Importar Collection de Postman
Para importar la collection de Postman, sigue estos pasos:
1.	Abre Postman.
2.	Haz clic en "Import".
3.	Selecciona el archivo desde la carpeta del repositorio.
# Endpoints de la API
•	GET /articulos: Devuelve todas las entradas de blog.
•	GET /articulos/:id: Devuelve una entrada de blog específica por su ID.
•	POST /articulos: Crea una nueva entrada de blog.
•	PUT /articulos/:id: Actualiza una entrada de blog existente por su ID.
•	DELETE /articulos/:id: Elimina una entrada de blog por su ID.
# Autor
Nombre: Edith Elizabeth Hernández Lanzas

