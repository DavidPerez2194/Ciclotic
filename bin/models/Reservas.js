const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservasSchema = new Schema({

  fecha_reserva: "String",
  hora_inicial: "String",
  hora_final: "String",
  id: {type: Schema.Types.ObjectId,
        ref:"Bicicletas"},
 id_usuario: {type: Schema.Types.ObjectId,
        ref:"Usuarios"}
});


var reserva = mongoose.model("Reservas", reservasSchema);
module.exports = reserva;
