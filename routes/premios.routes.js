const express = require('express');
 
const router = express.Router();

const premiosController = require('../controllers/premios.controller');

//OBTENER LOS DATOS NUEVOS
router.get('/nuevo', premiosController.get_nuevo);
router.post('/nuevo', premiosController.post_nuevo);

//RUTA DINÁMICA
router.get('/:id', premiosController.listar);

router.get('/', premiosController.listar);

module.exports = router;