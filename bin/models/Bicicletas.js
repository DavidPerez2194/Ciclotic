const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bicicletasSchema = new Schema({
    marca: String,
    color: String,
    Nromarco: String,
    punto: {
        type: mongoose.Schema.ObjectId,
        ref: 'Punto'
    },
    usuario: {
        type: mongoose.Schema.ObjectId,
        ref: 'Usuarios'
    },
});


var Bicicletas = mongoose.model("Bicicletas", bicicletasSchema);
module.exports = Bicicletas;