const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historialSchema = new Schema({
    usuario: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Usuarios',
    },
    bicicleta: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Bicicletas',
    },
    punto: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Puntos',
    },
}, {
        timestamps: true,
    });


var Historial = mongoose.model("Historial", historialSchema);
module.exports = Historial;