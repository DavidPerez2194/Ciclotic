const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombres : "string",
    apellido1: "string",
    apellido2: "string",
    edad:"string",
    sexo: "string",
    telefono: "string",
    eps:"string",
    foto: "string",
    email: "string",
    imagen:"string"
})

var User = mongoose.model("Usuarios", UserSchema);
module.exports = User;