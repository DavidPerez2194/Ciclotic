const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservasSchema = new Schema({

  fecha_reserva: "String",
  hora_inicial: "String",
  hora_final: "String",
  _id: {id:objectid,
        ref:"Bicicletas"},
 _id: {id:objectid,
        ref:"Usuarios"}
});


var reserva = mongoose.model("Reservas", reservasSchema);
module.exports = reserva;
