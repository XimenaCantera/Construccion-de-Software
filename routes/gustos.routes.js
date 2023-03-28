const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/comparar', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'gustos.html'));
});

module.exports = router;