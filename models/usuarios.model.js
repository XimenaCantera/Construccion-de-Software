const BaseDatos = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(nuevoUsuario) {
        this.nombre = nuevoUsuario.nombre || '';
        this.user = nuevoUsuario.username || '';
        this.passwort = nuevoUsuario.passwort || '';
    }

    save() {
        return bcrypt.hash(this.password,12)
        .then((passwordCifrado) => {
            return BaseDatos.execute('INSERT INTO USUARIOS (nombre, user, passwort) values (?, ?, ?)', [this.nombre, this.user, passwordCifrado]);
        })
        .catch((error) => {console.log(error)});
    }

    static fetchOne(user){
        return BaseDatos.execute('SELECT nombre FROM USUARIOS WHERE = (?)', [this.user]);
    }

}