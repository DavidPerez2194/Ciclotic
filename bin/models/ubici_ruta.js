const Schema = mongoose.Schema;

const unionSchema = new Schema({


  _id: {type: Schema.Types.ObjectId,
        ref:"Bicicletas"},
 _id: {type: Schema.Types.ObjectId,
        ref:"Rutas"}
});


var rutas = mongoose.model("ubici_ruta", unionSchema);
module.exports = rutas;