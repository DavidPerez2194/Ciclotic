const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservaSchema = new Schema({
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
    date: Date,
}, {
        timestamps: true,
    });


var Reserva = mongoose.model("Reserva", reservaSchema);
module.exports = Reserva;