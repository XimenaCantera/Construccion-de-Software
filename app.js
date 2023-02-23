console.log("Hola mundo desde Node");
console.info("Este script se estará ejecutando desde una computadora y no desde el navegador :)");
console.warn("Document, alert, confirm y prompt no existen en el entorno de ejecución de Node");
console.error("Así se ve un error");

//fs es el módulo para trabajar con el sistema de archivos
const filesystem = require('fs');
filesystem.writeFileSync('Hola .txt', 'Hola desde node');