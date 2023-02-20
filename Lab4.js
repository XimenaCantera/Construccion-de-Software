//EJERCICIO 1
let num = prompt("Dame un número",0);
const aaaaa = [];
const bbb = [];
let a = parseInt(num);
function cuadrado(a){
    for (let i = 0; i<=a; i++) {
        let result = a * a;
        aaaaa.push(result);
        alert(result);
    }
    for (let elemento in aaaaa)
        console.log(aaaaa);
function cubo(a){
    for (let i = 0; i<=a; i++) {
        let res = a * a;
        let total = res+a;
        bbb.push(total);
        alert(total);
    }
    for (let elemento in bbb)
        console.log(bbb);
}
//EJERCICIO 2
function display_c(start){ 
window.start = parseFloat(start); 
var end = 0  
var refresh=1000; 
if(window.start >= end ){ 
    mytime=setTimeout('display_ct()',refresh) 
} else { 
    alert("Time Over "); 
    } 
} 
function tiempo() { 
    var dias=Math.floor(window.start / 86400); 
    var horas = Math.floor((window.start - (dias * 86400 ))/3600); 
    var minutos = Math.floor((window.start - (dias * 86400 ) - (horas *3600 ))/60);
    var seg = Math.floor((window.start - (dias * 86400 ) - (horas *3600 ) - (minutos*60)));
    var z = window.start + "(" + dias + " Días " + horas + " Horas " + minutos + " Minutos y " + seg + " Segundos " + ")"; 
    window.start= window.start- 1; 
    tt=display_c(window.start); 
} 
let num1 = Math.random();
let num2 = Math.random();
let a = parseInt(num1);
let b = parseInt(num2);
let num = prompt("Adivina: "+num1+"+ "+num2+"=","?");
let res = a+b;
function parar() { 
    clearTimeout(mytime); 
}
if (num = res) {
    let correcto = prompt("CORRECTO!!");
} else {
    let correcto = prompt("INCORRECTO!!");
}
