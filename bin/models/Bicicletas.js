const Schema = mongoose.Schema;

const bicicletasSchema = new Schema({

  codigo_bici: "String",
  marca: "String",
  color: "String",
  Nromarco: "string",
  disponible: "string"
});


var bicicleta = mongoose.model("Bicicletas", bicicletasSchema);
module.exports = bicicleta;