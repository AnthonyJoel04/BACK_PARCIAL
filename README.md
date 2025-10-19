- Descripción

Este proyecto es la parte backend del parcial.
Con este código podemos gestionar el servidor, manejar la base de datos y atender 
las peticiones que provienen del front-end. La idea es que todo lo que el usuario hace en la interfaz pueda guardarse, consultarse o actualizarse correctamente gracias a este backend.

- Qué podemos hacer con este proyecto

Podemos iniciar un servidor web que escucha peticiones del front-end o de herramientas como Postman.
Podemos definir rutas (endpoints) para consultar datos, por ejemplo obtener todos los registros de una colección o tabla.
Podemos recibir datos nuevos (por ejemplo desde el front) y guardar esos datos en la base de datos.
Podemos recibir comandos de actualización o eliminación, y por tanto modificar o borrar datos existentes.
Podemos devolver respuestas al cliente (front-end) con los resultados de estas operaciones, para que el usuario vea lo que pasó.
Podemos verificar la información de los usuarios registrados o añadidos hace poco mediante POST en Postman, adicional tenemos para actualizar la lista.

- Cómo está estructurado / cómo funciona

Hay dos archivos principales que arranca el servidor y conecta la base de datos, tenemos el front el cual es importante el index.js y en el back seria el app.jsx.
El servidor está creado con una librería de Node.js que facilita manejar rutas HTTP.
Se conectó una base de datos para almacenar los datos que llegan desde el front.
Se definieron rutas como:

GET /... → para consultar datos.
POST /... → para crear nuevos datos.
PUT /... o PATCH /... → para actualizar datos existentes.
DELETE /... → para eliminar datos.

Cada ruta recibe la petición, revisa los datos que vienen, los procesa (guardar/leer/actualizar/borrar) y envía una respuesta al cliente.

- Ejemplo de uso

Clona el repositorio:

git clone https://github.com/AnthonyJoel04/BACK_PARCIAL.git
cd BACK_PARCIAL

- Instala las dependencias:

npm install

- Ejecuta el servidor:

npm run dev

Desde el front-end o desde una herramienta tipo Postman, envía una petición por ejemplo:

GET http://localhost:3000/user → devuelve lista de usuarios.
GET http://localhost:3000/user/1 → devuelve usuario por ID
POST http://localhost:3000/user → con un JSON en el cuerpo → crea un nuevo usuario.
Verifica que los datos efectivamente se guardan o cambian en la base de datos, y que el servidor responde según lo esperado.

- Conclusión

Este backend permite que la parte visual (front-end) funcione correctamente: recibe las solicitudes del usuario, procesa los datos, 
los persiste en la base de datos y devuelve las respuestas. Gracias a este código podemos tener un sistema completo que guarda, 
consulta, actualiza y elimina información de forma organizada para tener información de usuarios y/o añadirlos al react.
