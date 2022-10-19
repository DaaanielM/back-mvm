# Backend Gestión de Solicitudes - MVM

El siguiente repositorio contiene:

-   Configuración con express.
-   Configuración a la base de datos de mssql (Cliente de Microsoft SQL Server)
-   Modelo, vista y controlador de los servicios

### Pre-requisitos 📋

-   Tener VSCode o parecidos
-   NodeJS instalado
-   Un gestor de base de datos SQL (Datagrip)
-   Git
-   Postman

### Instalación 🔧

Clonar el repositorio y instalar con:

```
npm i
```

Ejecutar con

```
nodemon index.js
```

Una vez instalado y ejecutado el proyecto. Podremos encontrar: la configuración a la base de datos, puerto, modelo, controlador y rutas.

Para obtener algún dato de la base de datos, ingresamos al POSTMAN y ponemos la ruta para listar solicitudes, por ejemplo:

```
localhost:9000/solicitudes/listar
```

Este get, nos tendría que listar las solicitudes que tengamos en nuestra base de datos:
![Image text](https://github.com/DaaanielM/back-mvm/blob/master/src/get.png)

Y así mismo con los demás servicios. Para encontrar las rutas, podemos ir a la carpeta de routes.

## Despliegue 📦

-   Creamos un appservice en Azure (Para esto debemos contar con licencia en Azure)
-   Creamos el script start en el package.json ("start": "node ./src/index.js")
-   Subir nuestro backend a GitHub. (https://github.com/)
-   Vamos a centro de implementación en Azure y seleccionamos Local Git
-   Escogemos la opción (Servicio de Compilación de App) y le damos en continuar
-   El proceso anterior, nos crea una URL de git, donde podremos subir nuestro código
-   Creamos un credencial de usuario, para darle seguridad a nuestro código
-   Luego, vamos a inicio y copiamos la URL que nos esta dando Azure
-   Abrimos la consola y añadimos una nueva dirección remota (git remote azure [#url] )
-   Subimos el código con (git push -u azure master)
-   Nos pedira las credenciales que creamos en Azure, las ingresamos y damos a continuar
-   Mientras suben los cambios, el ejecuta el comando npm start y con esto finalizamos el despliegue.

## Construido con 🛠️

-   [node-mssql](https://www.npmjs.com/package/mssql) - El framework web usado
-   [node-cors](https://www.npmjs.com/package/cors) - Control de accesso HTTP
-   [express](https://www.npmjs.com/package/express) - Entorno de trabajo para aplicaciones web y APIS.
-   [morgan](https://www.npmjs.com/package/morgan) - Middleware de registro de solicitudes HTTP
-   [MVC](https://somospnt.com/blog/159-node-mvc) - Modelo, Vista, Controlador.

## Autores ✒️

-   **Daniel Brand** - _Backend_, _Documentación_ - (https://github.com/DaaanielM)
-   **Fabian Coronel** - _Base de datos_ - (https://github.com/fabiancoronel)

## Licencia 📄

Este proyecto está bajo la Licencia de (Daniel Brand)

## Expresiones de Gratitud 🎁

-   ¡Muchas gracias al equipo de MVM, y a Fabian Coronel, por la gestión que están haciendo, las oportunidades y el aprendizaje que están dando. Es de mucho valor y se agradece bastante la oportunidad! 😁
