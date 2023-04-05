const express = require('express');

const router = express.Router();

const premiosController = require('../controllers/premios.controller');

router.get('/', premiosController.mostrar);

module.exports = router;