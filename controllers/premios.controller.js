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

    //CREAR COOKIE
    response.session.ultimoArtista + artista.nombre;

    response.redirect('/premios/');
};

exports.listar = (request, response, next) => {
    //CREAR COOKIE PARA OBTENER LA CONSULTA REALIZADA
    let cookies = request.get('Cookie') || '';
    let consulta = cookies.split(';')[0].split('=')[1] || 0;
    consulta++;
    response.setHeader('Set-Cookie', 'consulta=' + consulta + '; HttpOnly');
    
    response.render('lista',{ 
        premios: Artista.fetchAll(),
        ultimoArtista:request.session.ultimoArtista || '',
    });
};