//Ximena Cantera Reséndiz
//16/Febrero/2023

var comida="Chilaquiles";
let cena="Tacos";
const precio=70;

console.log("Hola"); //Aparece en la consola al iniciar como registros.
console.info("Valor de la comida: " + comida);
console.warn("El precio no se puede modificar!!");
console.error("Te dije que el precio no se puede modificar");

console.assert(1==1);//Sirve como parametro una expresi+on lógica, si cumple el programa continua, si no se dejará de ejecutar.
console.assert(1===0); //"==="" compara valor y tipo de variable.
console.assert(1=="1");
console.assert(1== true); //Tienen el mismo valor.
console.assert(1=== true); //Tienen el mismo valor pero son de tipos diferentes.

	//Alcance de las variables
for(let i=1; i<=10;i++){ //Alcance de ambito, vivie en la llave declarada y muere cuando se hizo la última iteración del ciclo
	console.log(i);
}
//console.log(i);

	//alert, prompt, confirm
alert("Hola!");
let nombre = prompt("¿Cómo te llamas?");
console.log("Hola "+nombre);
let resp = confirm("Tienes hambre?")
console.log(resp);

	//FUNCIONES TRADICIONALES
function numero_tacos(){
	return 5;
}
console.log(numero_tacos());

	//FUNCIONES MODERNAS
//Funciones anónimas/flecha
let cantidadTacos = ()=>{
	return 5;
}
console.log(cantidadTacos());

let boton = document.getElementById("Buenos días!");
boton.innerHTML = "Buenoood días"; //PErmite escribir el html que hay ene ese elemento.
boton.onclick = () => alert("Bueeeenoooss díaas!!")

//ARREGLOS
const arreglo = ["Elemento"];
arreglo.push("Otro arreglo");
arreglo["dos"] = 2; //Dinámico al tener diferentes tipos de nombres a cada elemento
//arreglo =10; //Al ser un arreglo constante no se puede modificar a un número pero al ser dinámico se puede modificar lo que tenga dentro de él.
arreglo.lenght = 10;
arreglo[20] ="Fin del arreglo";
console.log(arreglo);

//RECORRER EL ARREGLO DINÁMICA
for (let elemento in arreglo){
	console.log(arreglo);
}

for (let valor in arreglo){
	console.log(valor);
}

	//OBJETOS
let objeto = {
	atributo1: "Valor 1",
	atributo2: 2
}
console.log(objeto.atributo1);
console.log(objeto.atributo2);
console.log(objeto);


for (let elemento in objeto){
	console.log(elemento);
}

const arregloObjetos=[{atributo1: "Valor 0", atributo2: 1},{}, objeto];
console.log(arregloObjetos);



//git add -A
//git commit -m