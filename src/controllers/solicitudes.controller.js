const model = require('../models/solicitudes.model');

const controller = {};

//request es el objeto que se envia al servidor y response es la respuesta que se recibe del servidor
controller.listar = async (req, res) => {
	const solicitudes = await model.listar();
	console.log(solicitudes);
	// status 200 es que todo esta bien
	res.status(200).send(solicitudes.recordsets);
};

controller.obtenerSolicitud = async (req, res) => {
	const solicitud = await model.obtenerSolicitud(req.params.IDSolicitud);

	res.status(200).send(solicitud.recordsets);
};

controller.crear = async (req, res) => {
	//Funciones creación de fecha y radicado
	let radicado = `MVM-${Date.now()}`;
	console.log(radicado);
	//Funcion año, mes y día
	let fecha = new Date();
	let fechaSolicitud = `${fecha.getFullYear()}-${
		fecha.getMonth() + 1
	}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}.${fecha.getMilliseconds()}`;

	//Datos que se envian desde el front
	const data = {
		Radicado: radicado,
		Descripcion: req.body.Descripcion,
		FechaSolicitud: fechaSolicitud,
		FechaRespuesta: null,
		IDResponsable: null,
		CorreoSolicitante: req.body.CorreoSolicitante,
		NombreSolicitante: req.body.NombreSolicitante,
		ApellidoSolicitante: req.body.ApellidoSolicitante,
		TelefonoSolicitante: req.body.TelefonoSolicitante,
		NombreEmpresa: req.body.NombreEmpresa,
		IdTipoSolicitud: req.body.IdTipoSolicitud,
		IDEstado: 1,
	};
	console.log(data);
	const datos = await model.crear(data);

	if (datos) {
		res.status(200).send({
			mensaje: 'Elemento creado correctamente 😎',
			error: false,
		});
	} else {
		res.status(500).send({
			mensaje: 'Ha ocurrido un error, contacte con el administrador ❌',
			error: true,
		});
	}
};

controller.actualizar = async (req, res) => {
	const id = req.params.IDSolicitud;
	const data = {
		FechaRespuesta: req.body.FechaRespuesta,
		IDResponsable: req.body.IDResponsable,
		IDEstado: req.body.IDEstado,
	};

	// le pasamos el id por parametro para saber que elemento actualizar
	const datos = await model.actualizar(data, id);

	if (datos) {
		res.status(200).send({
			mensaje: 'Elemento actualizado correctamente 😎',
			error: false,
		});
	} else {
		res.status(500).send({
			mensaje: 'Ha ocurrido un error, contacte con el administrador ❌',
			error: true,
		});
	}
};

controller.eliminar = async (req, res) => {
	const id = req.params.IDSolicitud;
	const datos = await model.eliminar(id);
	if (datos) {
		res.status(200).send({
			mensaje: 'Elemento eliminado correctamente 😎',
			error: false,
		});
	} else {
		res.status(500).send({
			mensaje: 'Ha ocurrido un error, contacte con el administrador ❌',
			error: true,
		});
	}
};

module.exports = controller;
