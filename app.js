const express = require('express');
 const bodyParser = require('body-parser');
 
 const app = express();
 
 app.use(bodyParser.urlencoded({extended: false}));
 
 app.use((request, response, next) => {
     console.log('Middleware!');
     next(); //Le permite a la petición avanzar hacia el siguiente middleware
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
    let html = `
        <h1>¿A dónde intentas ir? No tienes que iniciar aquí -_-</h1>
        <br><img src="https://i.pinimg.com/564x/e3/5c/83/e35c83c38269d60ec602f06c2d11eb2e.jpg">
    `;
    response.send(html);
 });
 
 app.listen(8000)