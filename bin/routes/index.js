const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");

const usuariosRoutes = require("./usuarios")
const puntosRoutes = require("./puntos")
const bicicletasRoutes = require("./bicicletas")

app.use(bodyParser.json());
app.use(cors())

app.get("/", function(req, res) {
    res.send("Ciclotic");
});

app.use('/usuarios', usuariosRoutes);
app.use('/puntos', puntosRoutes);
app.use('/bicicletas', bicicletasRoutes);

exports.app = app;