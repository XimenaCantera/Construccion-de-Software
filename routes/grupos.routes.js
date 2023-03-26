const express = require('express');

const router = express.Router();

router.get('/nuevo', (request, response, next) => {
    
    let html = `
        <h1>Agregando nuevo grupo</h1>
        <form action="/grupo/nuevo" method="POST">
        <label for="jugador">Nombre del grupo:</label>
        <input type="text" name="grupo"><br><br>
        <label for="jugador">¿Cuántos integrantes son?:</label>
        <input type="text" name="numIntegrantes">
        <input type="submit" value="Enviar">
        </form>
    `;
    response.send(html);
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.grupo);
    response.send("El nuevo artista es: " + request.body.grupo);
});

module.exports = router;