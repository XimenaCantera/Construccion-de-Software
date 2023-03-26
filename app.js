const express = require('express');
 const bodyParser = require('body-parser');
 
 const app = express();
 
 app.use(bodyParser.urlencoded({extended: false}));
 

app.use('/', (request, response, next) => {
     //response.send();
     let html = `
        <h1>¿Qué artista quieres conocer?'</h1>
        <form action="/" method="POST">
        <label for="jugador">Nombre del artista:</label>
        <input type="text" id="jugador" name="jugador">
        <input type="submit" value="Enviar">
        </form>
    `;
    response.send(html);
});
 
//      MÓDULO 1-. Grupos      /grupo/nuevo
const grupoRutas = require('./routes/grupos.routes');

app.use('/grupo', grupoRutas);


//      MÓDULO 2-. Solistas      /solista/nuevo
const solistaRutas = require('./routes/solistas.routes');

app.use('/solista', solistaRutas);



//ERROR 404
 app.use((request, response, next) => {
    response.status(404);
    response.send('¿A dónde intentas ir? No tienes que iniciar aquí -_-');
 });
 
 app.listen(8000)