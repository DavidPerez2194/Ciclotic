const express = require("express");
const app = express();
const { controller } = require("./Controller")


app.get("/", (req, res) => {
    res.send("hola mundo");
});

app.get("/usuarios", (req, res) => {
    controller.getUsers(res);
});

exports.app = app;