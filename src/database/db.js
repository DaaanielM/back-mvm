const sql = require('mssql');

// Configuración de la base de datos

const sqlConfig = {
	user: 'jovenesmvm',
	password: '0^618Bjt37y@',
	database: 'gestionsolicitudes',
	server: 'gestionsolicitudes.database.windows.net',
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		encrypt: true, // for azure
		trustServerCertificate: false, // change to true for local dev / self-signed certs
	},
};

const conexion = new sql.ConnectionPool(sqlConfig)
	.connect()
	.then((pool) => {
		console.log('Conectado con éxito a SQLServer'.bgBlack.magenta);
		return pool;
	})
	.catch((err) =>
		console.log('Error en la conexión a la base de datos', err)
	);

module.exports = {
	sql,
	conexion,
};
