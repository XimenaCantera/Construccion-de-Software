const express = require('express');

const router = express.Router();

const razas = ["Bueagle","Doberman", "Golden", "Husky", "Dálmata", "Chihuahua", "Chilakil", 
"Pug", "<script>alert('Ya te hakie :)')</script>"]

router.get('/', (request, response, next) => {
    response.render('lista',{razas: razas});
});

module.exports = router;