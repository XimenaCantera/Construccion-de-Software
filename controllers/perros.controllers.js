
const razas = ["Bueagle","Doberman", "Golden", "Husky", "Dálmata", "Chihuahua", "Chilakil", 
"Pug", "<script>alert('Ya te hakie :)                           ')</script>"]

exports.listar =((request, response, next) => {
    response.render('lista',{razas: razas});
});

