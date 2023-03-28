//SOLISTAS, GRUPOS y GUSTOS

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
 
const app = express();

//Mandar de manera estática.
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');
 
 //Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); 
 });
 

//           solistas/nuevo 
const solistaRutas = require('./routes/solistas.routes');
app.use('/solista', solistaRutas);

//            grupo/nuevo -> lista.ejs
const grupoRutas = require('./routes/grupos.routes');
app.use('/grupo', grupoRutas);

//      gustos.html   ->     /gustos/comparar
const gustosRutas = require('./routes/gustos.routes');
app.use('/gustos', gustosRutas);

       
app.use((request, response, next) => {
    response.status(404);
    let html = `
    <script src="https://cdn.tailwindcss.com"></script>
    <div class="bg-fixed" style="background-image: url(https://sourcecode.mx/wp-content/uploads/2020/10/error-404-768x427.png)"></div>
    <div class="grid justify-items-center mt-16">
        <p class="font-mono text-2xl">No tienes que iniciar aquí</p>
    </div>

    `;

    response.send(html);
});

app.listen(5000);