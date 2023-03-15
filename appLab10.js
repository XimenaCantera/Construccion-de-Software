 // L8
const $tabla = [[15,0,44],[16,50,6]];
let p1=0;
let p2=0;
for ($i in $tabla){
    for ($j in $tabla[$i]){
        if ($tabla[$i][$j] <= $tabla[0][2]) {
            p1 += $tabla[$i][$j];
        } else {
           p2 += $tabla[$i][$j];
        }
    }
}
let r1 = p1/3;
let r2 = p2/3;
console.log("Un arreglo de números y devolver su promedio.");
console.log("eje4.1").innerHTML = r1;
console.log("eje4.2").innerHTML = r2;

 
 //Recibir un string y escribir el string en un archivo de texto
 const filesystem = require('fs');
 filesystem.writeFileSync('Laboratorio8.txt', 'Pan con queso :D');
 console.log("El pan con queso fue cocinado y venidio con exito");
 
 const http = require('http');
 
 const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html'); 

    response.write('<html>');
    response.write('<head><meta charset="utf-8"></head><body>');
    
    response.write("<h1>Laboratorio 10: Rutas y formas</h1>");

    response.write('<form action="/ordenar" method="POST">');

    let radios = '<fieldset><legend>¿Con qué salsa quieres tus chilaquiles?</legend>';
    radios += '<div><input type="radio" id="rojos" name="tipo_chilaquiles" value="rojos" checked>'
    radios += '<label for="rojos">Salsa roja</label></div>';
    radios += '<div><input type="radio" id="verdes" name="tipo_chilaquiles" value="verdes">';
    radios += '<label for="verdes">Salsa verde</label></div></fieldset><br>';

    response.write(radios);

    response.write('<label for="extras">¿Con qué deseas tus chilaquiles?</label>');
    response.write('<input type="text" id="extras" name="extras"><br><br>');

    response.write('<input type="submit" value="Ordenar">');

    response.write("</form>");
    response.write('</body></html>');

    response.end();
 });
 
 server.listen(3030);