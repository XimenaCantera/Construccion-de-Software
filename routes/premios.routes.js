const express = require('express');

const router = express.Router();

const premios = [
  "Grammy","MAMA", "AMA", "Billboard", "MTV"
];

router.get('/', (request, response, next) => {
    response.render('lista', {premios: premios});
});

module.exports = router;