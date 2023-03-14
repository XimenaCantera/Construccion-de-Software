exports.logout = (request, response, next) => {
    response.render
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/perros'); //Este código se ejecuta cuando la sesión se elimina.
    });
};