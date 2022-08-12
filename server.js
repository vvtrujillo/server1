const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//app.use(cors())

require('./config/bd.config'); //acá nos conectamos con la BD

require('./routes/material.routes')(app); //acá tenemos las rutas de las API


app.listen(port, () => console.log('Servidor arriba en el puerto ' + port));