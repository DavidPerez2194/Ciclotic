const Schema = mongoose.Schema;

const rutasSchema = new Schema({

  nombreruta: "String",
  punto_partida: "String",
  punto_llegada: "String",
  
});


var ruta = mongoose.model("Rutas", rutasSchema);
module.exports = ruta;