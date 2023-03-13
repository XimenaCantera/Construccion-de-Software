//Solo tener las rutas y el controlador

const express = require('express');

const router = express.Router();

const perrosController = require('../controllers/perros.controller');

router.get('/nuevo', perrosController.get_nuevo);

router.get('/', perrosController);

module.exports = router;