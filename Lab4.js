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
var inicio = Date.now();
let pregunta = prompt("Adivina: "+num1+"+ "+num2+"=","?");
let fin = Date.now();
let total = ((fin - inicio)/1000);
let res = a+b;
if (pregunta == res) {
    let correcto = alert("CORRECTO!!     Te tardaste: " + total + " Segundos");
} else {
    let incorrecto = alert("INCORRECTO!!    Te tardaste: " + total + " Segundos");
}
//EJERCICIO 3
document.write("<br><br>EJERCICO 3");
const eje3 = [];
let min = Math.ceil(-100);
let max = Math.floor(100);
let c1 = 0;
let c2 = 0;
let c3 = 0;
for (let i=1; i <= 10; i++){
    let aleato = Math.floor(Math.random() * (max - min + 1) + min);
    eje3.push(aleato); 
    if (eje3[i-1] < 0) {
        c1 += 1;
    } if (eje3[i-1] > 0) {
        c2 += 1;
    }if (eje3[i-1] == 0){
        c3 += 1;
    }
}
document.write("<br>" + eje3);
document.write("<br> NÚMEROS NEGATIVOS: " + c1);
document.write("<br> CEROS: " + c3);
document.write("<br> NÚMEROS POSITIVOS: " + c2);
//EJERCICIO 4
/*
document.write("<br /><br>EJERCICIO 4");
let array4 = new Array(10);
//Bucle para meter en cada posición otros array de 10
for(let i=0; i<10; i++) {
    array4[i] = new Array(10);
}
for (let i=0; i<2; i++){   
    for (let e=0; e<10; e++){
        let namus = Math.floor(Math.random()*100+1);
        let namu = Math.floor(Math.random()*100+1);
        array4[i][e] = [namu][namus];
    }
}
for(let i=0; i<10; i++) {
    //Bucle que recorre el array que está en la posición i
    for(let j=0; j<10; j++) {
        document.write(array4[i][j]);
    }
}
*/
//EJERCICIO 5
let resp = document.getElementById("eje5");
document.write("El número " + resp + "es: ");
resp.split("").reverse().join("");
