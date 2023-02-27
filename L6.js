
function cantidadProductos(valor, value) {
    let total = 0;
    let pagar = 0;  
    valor = parseInt(valor);
    total = document.getElementById('total').innerHTML;
    pagar = document.getElementById('pagar').innerHTML;
    
    //Valido si hay un valor previo, si no se pone un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
    pagar = (pagar == null || pagar == undefined || pagar == "") ? 0 : pagar;
    total = (parseInt(total) + parseInt(valor));
    pagar = parseInt(pagar) + (parseInt(value) * parseInt(valor));
    document.getElementById('total').innerHTML = total;
    document.getElementById('pagar').innerHTML = pagar;
}

function normal(id) {
  let something = document.getElementById('productos-'+id);
  productos.style.opacity = "0.5";
}

function hover(id) {
  let something = document.getElementById('productos-'+id);
  productos.style.color = rgba(58, 21, 151, 1);
}