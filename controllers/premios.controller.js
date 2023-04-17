const Artista = require('../models/artistas.model');
const Premio = require('../models/premios.model');

exports.get_nuevo = (request, response, next) => {
    Premio.fetchAll()
    .then(([rows, fieldData]
        ) => {
        response.render('nuevo', {
            premios: rows,
        });
    }).catch(error => console.log(error));
};

exports.post_nuevo = (request, response, next) => {

    const artista = new Artista({
        nombre: request.body.nombre,
        premio: request.body.premio,
        ubicacion: request.body.ubicacion,
        descripcion: request.body.descripcion,
    });

    artista.save()
    .then(([rows, fieldData]) => {
        request.session.ultimoArtista = artista.nombre; 
        response.redirect('/premios/');
    })
    .catch((error) => {console.log(error)});
};

exports.listar = (request, response, next) => {
    //CREAR COOKIE PARA OBTENER LA CONSULTA REALIZADA
    let cookies = request.get('Cookie') || '';
    let consulta = cookies.split(';')[0].split('=')[1] || 0;
    consulta++;
    response.setHeader('Set-Cookie', 'consulta=' + consulta + '; HttpOnly');
    
    Artista.fetch(request.params.id)
    .then(([rows, fieldData]) => {
        console.log(rows);

        response.render('lista', {
            premios: rows,
            ultimoArtista:request.session.ultimoArtista || '',
        });
    })
    .catch(err => {
        console.log(err);
        });
};