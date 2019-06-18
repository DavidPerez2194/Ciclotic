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



exports.app = app;