const { conexion } = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const pool = await conexion;
		const sql = `SELECT * FROM Responsable`;
		const result = await pool.request().query(sql);
		return result;
	} catch (error) {
		console.log(error);
	}

	//recordset sirve para obtener los datos de la consulta
	return result;
};

module.exports = model;
