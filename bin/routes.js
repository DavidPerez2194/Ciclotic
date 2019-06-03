const express = require("express");
const app = express();
const controller = require("./Controller")


app.get("/", (req, res) => {
    res.send("hola mundo");
});

app.get("/usuarios", (req, res) => {
  let usuarios = [
    { id: "03", nombres: "david", apellido1: "gomez", apellido2: "lopez", edad: "30", sexo: "masculino", telefono: "312456382",
    eps:"comfacor", email:"davideoeo210494@gmail.com" },
      ];
  res.send(usuarios);
});

exports.app = app;