const express = require('express');
const app = express();

app.use(express.static('public'));

//Ejercicio 1

let ficha = {
    nombre: "Memo",
    edad: "18",
    tipo: "Perro"
}

app.get('/',function(req,res){
    res.send(ficha);
})

//Ejercicio 2


app.get("/adoptar",function(req,res){

    let nombre = req.query.nombre;
    let edad = req.query.edad;
    let tipo = req.query.tipo;

    res.send('adoptar' + nombre + " " + edad  + " "+ tipo);
})


app.listen(3000);