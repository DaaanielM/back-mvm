const { conexion } = require('../database/db');

const model = {};

model.listar = async () => {
	const pool = await conexion;
	const sql = `select * from Solicitud`;
	// select so.Radicado, so.Descripcion, so.FechaSolicitud, so.FechaRespuesta, so.IDResponsable, so.CorreoSolicitante,
	// so.NombreSolicitante, so.ApellidoSolicitante, so.TelefonoSolicitante, so.NombreEmpresa,ts.TipoSolicitud, so.IDEstado from Solicitud so
	// inner join TipoSolicitud ts on ts.IDTipo = so.IdTipoSolicitud
	const result = await pool.request().query(sql);

	//recordset sirve para obtener los datos de la consulta
	return result;
};

// Crear radicado
// Crear fecha
// mandar cmo null la fecha respuesta y el idresponsable
model.crear = async (datos) => {
	const pool = await conexion;
	const sql = `INSERT INTO gestionsolicitudes.dbo.Solicitud (Radicado, Descripcion, FechaSolicitud, FechaRespuesta, IDResponsable, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado) VALUES ('${datos.Radicado}', '${datos.Descripcion}', '${datos.FechaSolicitud}', null, null, '${datos.CorreoSolicitante}', '${datos.NombreSolicitante}', '${datos.ApellidoSolicitante} ', '${datos.TelefonoSolicitante}', '${datos.NombreEmpresa}', '${datos.IdTipoSolicitud}',1)
	`;
	const result = await pool.request().query(sql, datos);

	// rowsAffected es para saber si se inserto o no el dato en la base de datos
	return result;
};

module.exports = model;
