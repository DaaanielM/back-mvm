const model = require('../models/solicitudes.model');

const controller = {};

//request es el objeto que se envia al servidor y response es la respuesta que se recibe del servidor
controller.listar = async (req, res) => {
	const solicitudes = await model.listar();
	res.status(200).send(solicitudes);
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

module.exports = controller;
