cons db = require ('../until/database');

const perros = [
    { 
        raza: "Beagle", 
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    {
        raza: "Golden",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        raza: "Husky",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        raza: "Chilakil",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        raza: "Pug",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    } 
];

module.exports = class Perro {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_Perro) {
        this.nombre = nuevo_Perro.Nombre || '';
        this.raza = nuevo_Perro.Raza || '';
        this.imagen = nuevo_Perro.Imagen || '';
        this.descripcion = nuevo_Perro_Descripcion || '';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(' INSERT INTO  perros (nombre, imagen, descripcion, idraza) VALUES (?, ?, ?, ?)',
            [this.nombre, this.imagen, this.descripcion, this.raza]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        retutn perros;
    }

}