//Ximena Cantera Reséndiz
//EJERCICIO 1
let num = prompt("Dame un número",0);
//CUADRADO
const cuadradoo = [];
for (let i=1; i <= num; i++){
    let cuad = i*i;
    cuadradoo.push(cuad);
}
document.write("CUADRADOS<br>");
for(var i=1; i<=cuadradoo.length; i++){
    document.write(i + " ^2 " + "= " + cuadradoo[i-1] + "<br>");
}
document.write("<br><br>");
document.write("CUBOS<br>");
//CUBO
const cuboo = [];
for (let i=1; i <= num; i++){
    let cubo = i*i*i;
    cuboo.push(cubo);
}
for(var i=1; i<=cuboo.length; i++){
    document.write(i + " ^3 " + "= " + cuboo[i-1] + "<br>");
}
//EJERCICIO 2
let num1 = Math.floor(Math.random()*100+1);
let num2 = Math.floor(Math.random()*100+1);
let a = parseInt(num1);
let b = parseInt(num2);
//console.time("loop");
var inicio = Date.now();
let pregunta = prompt("Adivina: "+num1+"+ "+num2+"=","?");
//console.timeEnd("loop");
let fin = Date.now();
let total = ((fin - inicio)/1000);
let res = a+b;
if (pregunta == res) {
    let correcto = alert("CORRECTO!!     Te tardaste: " + total + " Segundos");
} else {
    let incorrecto = alert("INCORRECTO!!    Te tardaste: " + total + " Segundos");
}
//EJERCICIO 3
const arr = [];