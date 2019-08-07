const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombres: String,
    apellido1: String,
    apellido2: String,
    edad: String,
    sexo: String,
    telefono: String,
    eps: String,
    foto: String,
    email: String
}, {
    timestamps: true,
})

var User = mongoose.model("Usuarios", UserSchema);
module.exports = User;