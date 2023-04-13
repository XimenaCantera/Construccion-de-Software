const Usuario = require('../models/usuarios.model');

//LABORATORIO 18
exports.get_login = (request, response, next) => {
    response.render('login');
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.user)
    .then(([rows, fieldData]) => {
        if (rows.length == 1) {
            response.redirect('/premios');
        } else {
            request.session.mensaje = "El usuario y/o contraseña han sido escritos incorrectamente :d";
            response.redirect('/premios/login');
        }
    })
    .catch((error) => {
        console.log(error);
    });
};


exports.get_signup = (request, response, next) => {
    response.render('signup');
};

exports.post_signup = (request, response, next) => {
    const usuario = new Usuario({
        nombre: request.body.nombre,
        user: request.body.user,
        passwort: request.body.passwort,
    });

    usuario.save()
    .then(([rows, fieldData]) => {
        response.redirect('/usuarios/login');
    }).catch((error) => {console.log(error)});
};


exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/usuarios/login'); //Este código se ejecuta al final.
    });
};