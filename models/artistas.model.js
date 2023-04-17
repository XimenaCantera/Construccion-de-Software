const baseDatos = require('../util/database');

const bcrypt = require('bcryptjs');

module.exports = class Artista {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_artista) {
        this.nombre = nuevo_artista.nombre || '';
        this.premio = nuevo_artista.premio || '';
        this.foto = nuevo_artista.foto || 'https://i.pinimg.com/564x/f4/3c/35/f43c35d5009f0883e6875dcc25a76fa7.jpg';
        this.ubicacion = nuevo_artista.ubicacion || '';
        this.descripcion = nuevo_artista.descripcion || '';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
      return baseDatos.execute('INSERT INTO artistas (nombre, idpremio, foto, ubicacion, descripcion) values (?,?,?,?,?)', [this.nombre, this.premio, this.foto, this.ubicacion, this.descripcion]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
      return baseDatos.execute('SELECT * FROM artistas');
    }
    static fetchOne(id) {
      return baseDatos.execute(
        `SELECT a.nombre, a.foto, a.ubicacion, a.descripcion, p.nombre as premio
         FROM artista a, premio p
         WHERE a.idPremio = p.id 
         AND a.id = ?
        `, [id]
      );
    }

    static fetch(id) {
        if (id) {
            return Artista.fetchOne(id);
        } else {
            return Artista.fetchAll();
        }
    }

}