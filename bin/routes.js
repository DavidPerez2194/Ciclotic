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
app.post("/usuarios", (req, res)=>{
    //console.log(req.body);
    controller.postUsers(req, res);
    //res.send('OK')
})

app.get("/:nombre_ruta/bicicletas/:disponible", (req, res) => {
    console.log (req.params)
    res.send("Ok")
    //controller.getUsers(res);
})



exports.app = app;