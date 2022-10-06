const { conexion } = require('../database/db');

const model = {};

model.listar = async () => {
	const pool = await conexion;
	const sql = `SELECT * FROM TipoSolicitud`;
	const result = await pool.request().query(sql);

	//recordset sirve para obtener los datos de la consulta
	return result;
};

module.exports = model;
