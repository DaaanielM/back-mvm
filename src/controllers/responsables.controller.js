const model = require('../models/responsables.model');

const controller = {};

controller.listar = async (req, res) => {
	const result = await model.listar();
	res.status(200).send(result);
};

module.exports = controller;

// controller.listar = async (req, res) => {
// 	try {
// 		const resultados = await model.listar();
// 		res.json({
// 			datos: resultados,
// 		});
// 	} catch (error) {
// 		res.json({
// 			mensaje: 'Lo sentimos este usuario no se encuentra',
// 			error: true,
// 		});
// 	}
// };
