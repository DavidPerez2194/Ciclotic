const express = require("express");
const app = express();
const { controller } = require("./Controller");
const bodyParser = require("body-parser");

app.use( bodyParser.json());

app.get("/", function(req, res) {
  res.send("Ciclotic");
});

app.get("/usuarios", (req, res) => {
    controller.getUsers(res);
})
app.post("/usuarios", function(req, res) {
    let { usuarios } = req.body;
    controller.setUser(usuarios, res);
})
app.post("/bicicletas", function(req, res) {
    let { bici } = req.body;
    controller.setBici(bici, res);
})
app.get("/reservas", (req, res) => {
    controller.getReservas(res);
})


app.post("/reservas", (req, res)=>{
    //console.log(req.body);
    controller.postReservas(req, res);
    //res.send('OK')
})


app.get("/:nombre_ruta/bicicletas/:disponible", (req, res) => {
    console.log (req.params)
    res.send("Ok")
    //controller.getUsers(res);
})

app.get("/usuarios/:id", (req, res) => {
    console.log (req.params)
    res.send("Ok")
})

app.get("/usuarios/:id/reservas", (req, res) =>{
    console.log (req.params)
    res.send("Ok")
})

app.get("/usuarios/:id/ubicaciones", (req, res) => {
    console.log (req.params)
    res.send("ok")
})

exports.app = app;