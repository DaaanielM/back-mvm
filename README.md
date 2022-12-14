# Backend Gesti贸n de Solicitudes - MVM

El siguiente repositorio contiene:

-   Configuraci贸n con express.
-   Configuraci贸n a la base de datos de mssql (Cliente de Microsoft SQL Server)
-   Modelo, vista y controlador de los servicios

## Proyecto Solicitudes 
- [Requerimientos](https://mvmingenieriadesoftware-my.sharepoint.com/:w:/g/personal/fabian_coronel_mvm_com_co/EZs4DVtHluVDv3GwU3JM-GgB5V8MCbd34AW9uwy-GFfHmQ?e=qjUKbt)

### Pre-requisitos 馃搵

-   Tener VSCode o parecidos
-   NodeJS instalado
-   Un gestor de base de datos SQL (Datagrip)
-   Git
-   Postman

### Instalaci贸n 馃敡

Clonar el repositorio y instalar con:

```
npm i
```

Ejecutar con

```
npm run dev
```

Una vez instalado y ejecutado el proyecto. Podremos encontrar: la configuraci贸n a la base de datos, puerto, modelo, controlador y rutas.

## DEMO de como usar las APIS 馃懢

![demo.gif](https://github.com/DaaanielM/back-mvm/blob/master/demo.gif)



## Despliegue 馃摝

-   Creamos un appservice en Azure (Para esto debemos contar con licencia en Azure)
-   Creamos el script start en el package.json ("start": "node ./src/index.js")
-   Subir nuestro backend a GitHub. (https://github.com/)
-   Vamos a centro de implementaci贸n en Azure y seleccionamos Local Git
-   Escogemos la opci贸n (Servicio de Compilaci贸n de App) y le damos en continuar
-   El proceso anterior, nos crea una URL de git, donde podremos subir nuestro c贸digo
-   Creamos un credencial de usuario, para darle seguridad a nuestro c贸digo
-   Luego, vamos a inicio y copiamos la URL que nos esta dando Azure
-   Abrimos la consola y a帽adimos una nueva direcci贸n remota (git remote azure [#url])
-   Subimos el c贸digo con (git push -u azure master)
-   Nos pedira las credenciales que creamos en Azure, las ingresamos y damos a continuar
-   Una vez se suben los cambios, ejecutamos el comando ([npm start])

## Construido con 馃洜锔?

-   [node-mssql](https://www.npmjs.com/package/mssql) - Cliente de Microsoft SQL Server para Node.js.
-   [node-cors](https://www.npmjs.com/package/cors) - Control de accesso HTTP
-   [express](https://www.npmjs.com/package/express) - Entorno de trabajo para aplicaciones web y APIS.
-   [morgan](https://www.npmjs.com/package/morgan) - Middleware de registro de solicitudes HTTP
-   [MVC](https://somospnt.com/blog/159-node-mvc) - Modelo, Vista, Controlador.

## Autores 鉁掞笍

-   **Daniel Brand** - _Backend_, _Documentaci贸n_ - (https://github.com/DaaanielM)
-   **Fabian Coronel** - _Base de datos_ - (https://github.com/fabiancoronel)

## Licencia 馃搫

Este proyecto est谩 bajo la Licencia de (Daniel Brand)

## Expresiones de Gratitud 馃巵

-   隆Muchas gracias al equipo de MVM, y a Fabian Coronel, por la gesti贸n que est谩n haciendo, las oportunidades y el aprendizaje que est谩n dando. Es de mucho valor y se agradece bastante la oportunidad! 馃榿
