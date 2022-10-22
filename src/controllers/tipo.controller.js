const model = require('../models/tipo.model');

const controller = {};

//request es el objeto que se envia al servidor y response es la respuesta que se recibe del servidor
controller.listar = async (req, res) => {
	const tipoSolicitud = await model.listar();
	res.status(200).send(tipoSolicitud.recordsets);
};

module.exports = controller;
