const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ubicacionesSchema = new Schema({

  direccion: "String",
  hora_actual: "String",
  fecha_actual: "String",
   _id: {type: Schema.Types.ObjectId,
        ref:"Usuarios"}
});


var Ubicaciones = mongoose.model("Ubicaciones", ubicacionesSchema);
module.exports = Ubicaciones;
