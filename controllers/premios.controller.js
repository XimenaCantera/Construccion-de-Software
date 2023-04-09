const Artista = require('../models/artistas.model');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const artista = new Artista({
        nombre: request.body.nombre,
        premio: request.body.premio,
        ubicacion: request.body.premio,
        descripcion: request.body.descripcion,
    });

    artista.save();

    response.redirect('/premios/');
};

exports.listar = (request, response, next) => {
    response.render('lista',{ premios: Artista.fetchAll()});
};