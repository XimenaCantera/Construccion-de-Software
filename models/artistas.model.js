const artistas = [
  {
  	nombre :"Stray Kids",
    premio:"The Fact Music Awards",
    foto:"https://i.pinimg.com/564x/5f/a3/b4/5fa3b4746866c11ff300a13acaedb0d3.jpg",
    ubicacion: "KSPO Dome, Seúl - Corea del Sur",
    descripcion: "Nominados a los premios de 'Artist Of The Year' y 'Fan N Star Four N Star Award'."
  },
  {
  	nombre:"Harry Styles",
    premio:"MAMA",
    foto: "https://i.pinimg.com/564x/be/85/54/be855458c7b2e4578f50a3422224e265.jpg",
    ubicacion:"Sus sedes cambian y entre ellas se encuentra Corea del Sur, Hong Kong, Japón, Singapur, Vietnam y Macao.",
    descripcion: "Nominado al 'Album más esperado'."
  },
  {
  	nombre:"ATEEZ",
    premio:"AMA",
    foto:"https://i.pinimg.com/564x/95/98/73/959873c705fddc5c344b3b1a71a79f1e.jpg",
    ubicacion:"Microsoft Theater, Los Angeles, California.",
    descripcion:"El grupo a sido nominado al premio 'Popular Star Award - Male Singer'."
  },
  {
  	nombre:"Arctic Monkeys",
    premio:"Billboard Music Awards",
    foto:"https://i.pinimg.com/564x/94/0e/b8/940eb89585e364efbd61e5e5b06098cb.jpg",
    ubicacion:"MGM Grand Garden Arena, Las Vegas",
    descripcion:"La banda nominada a los premios 'Hot 100' y 'Popular Star Award - Male Singer'."
  },
  {
  	nombre:"Jackson Wang",
    premio:"Show Champion",
    foto:"https://i.pinimg.com/564x/92/a3/e7/92a3e78339615b896ade98b78da812b0.jpg",
    ubicacion:"Ilsan, Corea del Sur",
    descripcion:"El solista partició el día 14 de julio del 2021 y gracias a sus fans a podido llevarse a casa el premio."
  }
];

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
        artistas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return artistas;
    }

}