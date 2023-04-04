const express = require('express');

const router = express.Router();

const premios = [
  {
    premio:"The Fact Music Awards",
    foto:"https://asset.kompas.com/crops/mSUPvS6OWTXRyL91QuDcLTY6ptA=/208x72:1072x648/750x500/data/photo/2020/09/21/5f683d59e1bf0.jpg",
    ubicacion: "KSPO Dome, Seúl - Corea del Sur",
    descripcion: "The Fact Music Awards (abreviados como TMA) son unos premios surcoreanos presentados por The Fact y organizados por Fan N Star. Se otorgan a aquellos que han contribuido a la ola coreana."
  },
  {
    premio:"MAMA",
    foto: "https://i.pinimg.com/564x/1e/1e/36/1e1e366f1aa1ec0a9d598936db2b1b39.jpg",
    ubicacion:"Sus sedes cambian y entre ellas se encuentra Corea del Sur, Hong Kong, Japón, Singapur, Vietnam y Macao.",
    descripcion: "Los MAMA Awards son unos premios surcoreanos de música presentados anualmente por la compañía de entretenimiento CJ E&M. La mayoría de los premios son otorgados a artistas de K-pop, aunque algunos también son entregados a otros artistas asiáticos."
  },
  {
    premio:"AMA",
    foto:"https://i.pinimg.com/564x/04/44/b9/0444b92dece3a332d7b11bc25445c3a0.jpg",
    ubicacion:"Microsoft Theater, Los Angeles, California.",
    descripcion:"American Music Awards (AMA) son premios entregados a lo mejor de la música, reconocen a los artistas más populares. Fueron creados por el presentador de televisión Dick Clark en 1973 para competir con los premios Grammy."
  },
  {
    premio:"Billboard Music Awards",
    foto:"https://i.pinimg.com/564x/07/03/c7/0703c7bf2462289cce230356f893c0c9.jpg",
    ubicacion:"MGM Grand Garden Arena, Las Vegas",
    descripcion:"Los Billboard Music Awards son unos premios entregados anualmente por Billboard, una revista estadounidense dedicada a la industria musical."
  },
  {
    premio:"Show Champion",
    foto:"https://i.pinimg.com/564x/92/c2/d2/92c2d2f60bde0cb3db923e0d22cf6a05.jpg",
    ubicacion:"Ilsan, Corea del Sur",
    descripcion:"Show Champion (Hangul: 쇼 챔피언) es un programa de música surcoreano que se transmite en vivo todos los miércoles a las 18:00 KST en Bitmaru Broadcasting Center en Ilsan MBC Music. Es presentado por la comediante Kim Shin-young y varios MC invitados."
  }
];

router.get('/', (request, response, next) => {
    response.render('lista', {premios: premios});
});

module.exports = router;