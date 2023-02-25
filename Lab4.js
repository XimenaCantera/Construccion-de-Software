//Ximena Cantera Reséndiz
//EJERCICIO 1
document.write("<h2> Ejercicio 1 </h2>");
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
document.write("<h2> Ejercicio 3 </h2>");
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
let $tabla = [[15,0,44],[16,50,6]];
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
document.getElementById("eje4.1").innerHTML = r1;
document.getElementById("eje4.2").innerHTML = r2;

//EJERCICIO 5
document.write("<h2> Ejercicio 5 </h2>");
let num5 = prompt("¿Qué número quieres invertir?",0);
document.write("El número es: " + num5 + "<br>");
document.write(num5.split("").reverse().join(""));