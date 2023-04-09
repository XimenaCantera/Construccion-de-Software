function materias(Redes, Ecuaciones, Gender, Analisis){
	this.Redes = Redes;
	this.Ecuaciones = Ecuaciones;
	this.Gender = Gender;
	this.Analisis = Analisis;
}

let Alumno1 = new materias("84", "92", "90", "90");
let Alumno2 = new materias("100", "75", "84", "80");
let Alumno3 = new materias("74", "82", "100", "95");

console.log(Alumno1);
console.log(Alumno2);
console.log(Alumno3);

document.write("<h1>CALIFICACIONES DE LOS ALUMNOS</h1>");
document.write("<h1>Ximena Cantera Reséndiz</h1>");
document.write("<ul><li>Redes logísticas Inteligentes: " + Alumno1.Redes
+ "<li> Análisis de ecuaciones diferenciales: " + Alumno1.Ecuaciones
+ "<li> Gender society and human rights: " + Alumno1.Gender
+ "<li> Análisis de requerimientos de software: " + Alumno1.Analisis + "</ul></li>");

document.write("<h1>Marcos Sánchez Lora</h1>");
document.write("<ul><li>Redes logísticas Inteligentes: " + Alumno2.Redes
+ "<li> Análisis de ecuaciones diferenciales: " + Alumno2.Ecuaciones
+ "<li> Gender society and human rights: " + Alumno2.Gender
+ "<li> Análisis de requerimientos de software: " + Alumno2.Analisis + "</ul></li>");

document.write("<h1>Verónica Salazar Hernández</h1>");
document.write("<ul><li>Redes logísticas Inteligentes: " + Alumno3.Redes
+ "<li> Análisis de ecuaciones diferenciales: " + Alumno3.Ecuaciones
+ "<li> Gender society and human rights: " + Alumno3.Gender
+ "<li> Análisis de requerimientos de software: " + Alumno3.Analisis + "</ul></li>");