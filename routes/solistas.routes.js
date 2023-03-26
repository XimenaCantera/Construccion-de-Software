const express = require('express');

const router = express.Router();

router.get('/nuevo', (request, response, next) => {
    
    let html = `
        <form action="/solista/nuevo" method="POST">
        <label for="jugador">Nombre del artista:</label>
        <input type="text" name="artista"><br><br>
        <label for="jugador">Año de debut:</label>
        <input type="text" name="debut"> 
        <input type="submit" value="Enviar">
        </form>
    `;
    response.send(html);
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.solista);
    response.send("El solista es: " + request.body.artista);
});

module.exports = router;