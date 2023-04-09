//SOLISTAS, GRUPOS, GUSTOS Y PREMIOS

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
 
const app = express();

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Mandar de manera estática.
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');
 
 //Middleware
/*app.use((request, response, next) => {
    console.log('Middleware!');
    next(); 
 });*/

const usuarioRutas = require('./routes/usuarios.routes');

app.use('/usuarios', usuarioRutas);

//            /solista/nuevo 
const solistaRutas = require('./routes/solistas.routes');
app.use('/solista', solistaRutas);

//            /grupo/nuevo
const grupoRutas = require('./routes/grupos.routes');
app.use('/grupo', grupoRutas);

//      gustos.html   ->     /gustos/comparar
const gustosRutas = require('./routes/gustos.routes');
app.use('/gustos', gustosRutas);

//            /premios
const premioRutas = require('./routes/premios.routes');
app.use('/premios', premioRutas);

       
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