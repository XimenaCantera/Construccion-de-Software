//Solo tieme las rutas y el controlador

const express = require('express');

const router = express.Router();

const perrosController = require('../controllers/perros.controller');

router.get('/', perrosController);

module.exports = router;