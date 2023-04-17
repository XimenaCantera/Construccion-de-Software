const BaseDato = require('../util/database');

module.exports = class Premios {

    constructor() {

    }

    save() {

    }

    static fetchAll() {
        return BaseDato.execute('SELECT id, nombre FROM premios');
    }
}