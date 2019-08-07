const Punto = require("../models/Puntos")

exports.getPuntos = (res) => {
    Punto.find({}, (err, puntos) => {
        if (err) throw err;
        res.send(puntos);
    })
}

exports.getPunto = async (id, res) => {
    const punto = await Punto.findById(id)
    res.send(punto)
}

exports.savePunto = (data, res) => {
    console.log(data)
    const punto = new Punto(data);
    punto.save()
    res.send(punto)
}

exports.updatePunto = async (id, data, res) => {
    const punto = await Punto.findByIdAndUpdate(id, data, { new: true }).exec()
    res.send(punto)
}

exports.deletePunto = async (id, res) => {
    const punto = await Punto.findByIdAndDelete(id).exec()
    res.send(punto)
}
