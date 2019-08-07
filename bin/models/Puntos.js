const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puntoSchema = new Schema({
  nombre: String,
  direccion: String,
}, {
  timestamps: true,
});


var Puntos = mongoose.model("Punto", puntoSchema);
module.exports = Puntos;
