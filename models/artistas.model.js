const baseDatos = require('../util/database');


const bcrypt = require('bcryptjs');

module.exports = class Artista {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevoArtista) {
      this.nombre = nuevoArtista.nombre || '';
      this.premio = nuevoArtista.premio || 'Siguen las votaciones.';
      this.foto = nuevoArtista.foto || 'https://i.pinimg.com/564x/f4/3c/35/f43c35d5009f0883e6875dcc25a76fa7.jpg';
      this.ubicacion = nuevoArtista.ubicacion || 'Sigue en decisión.';
      this.descripcion = nuevoArtista.descripcion || 'Siguen las votaciones de los fans.';
  }
//GUARDAR LOS ARTISTAS NUEVOS
  save() {
      return baseDatos.execute('INSERT INTO artistas (nombre, foto, ubicacion, descripcion, idPremio) values (?,?,?,?,?)', [this.nombre, this.foto, this.ubicacion, this.descripcion, this.premio]);
  }

  static fetchAll() {
    return baseDatos.execute('SELECT * FROM artistas');
  }

//IMPRIME LOS ARTISTAS

  static fetchOne(id) {
    return baseDatos.execute(
      `SELECT a.nombre, a.foto, a.ubicacion, a.descripcion, p.nombre as premio 
       FROM artistas a, premios p
       WHERE a.idPremio = p.id
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