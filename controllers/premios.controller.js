const artista = require('../models/artistas.model');

exports.mostrar = (request, response, next) =>  {
    response.render('lista', {premios: artista.fetchAll()});
};