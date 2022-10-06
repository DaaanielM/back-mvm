const express = require('express');
const router = express.Router();

const controller = require('../controllers/solicitudes.controller');

// // APP WEB
router.get('/listar', controller.listar);
router.post('/crear', controller.crear);

// router.post('/crear', controller.crear);
// router.put('/actualizar/:id', controller.actualizar);
// router.get('/obtenerCategoria/:id', controller.obtenerCategoria);
// router.delete('/eliminar/:id', controller.eliminar);

// module.exports = router;
module.exports = router;
