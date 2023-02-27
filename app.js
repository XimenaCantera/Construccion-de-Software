console.log("Hola mundo desde Node");
console.info("Este script se estará ejecutando desde una computadora y no desde el navegador :)");
console.warn("Document, alert, confirm y prompt no existen en el entorno de ejecución de Node");
console.error("Así se ve un error");

//fs es el módulo para trabajar con el sistema de archivos
const filesystem = require('fs');
filesystem.writeFileSync('Hola .txt', 'Hola desde node');

//ARREGLOS Y TIEMPO DE EJECUCIÓN

//HTTP es el módulo que permite crear un servidor que pueda atender peticiones http
const http = require('http');  //Crear servidor.(objeto de ejecucio´, objeto de la respueste)

const server = http.createServer( (request,response) => {
	console.log(request.url);
	response.setHeader('Content-Type', 'text/html');
	response.write('<form>');
	response.write('<h1>Chilaquiles</h1>');
	response.write('<form>');
	response.write('<input type= "radio">');
    
    let radios = '<field><legend>Selecciona el tipo de chilaquiles:</legend';
    radio += '<div><input type="radio" id = "rojos" name="tipo_chilaquiles" value="rojos" checked>';
    radio += '<label for ="rojos">Salsa roja</label></div>';
    radio += '<div><input type="radio" id = "verdes" name="tipo_chilaquiles" value="verdes">';
	//For contene el id del elemento que se quiere tener referencia, sirve para oder seleccioner desde el nombre. 
    radio += '<label for ="verdes">Salsa verde</label></div>'; 

	response.write('</form>');
	response.end();
}
);
server.listen(3000);