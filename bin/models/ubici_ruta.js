const Schema = mongoose.Schema;

const unionSchema = new Schema({


  _id: {id:objectid,
        ref:"Bicicletas"},
 _id: {id:objectid,
        ref:"Rutas"}
});


var rutas = mongoose.model("ubici_ruta", unionSchema);
module.exports = rutas;