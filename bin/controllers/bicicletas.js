const Bicicleta = require("../models/Bicicletas")

exports.getBicicletas = async (res) => {
    const bicicletas = await Bicicleta.find().populate('punto')
    res.send(bicicletas)
}

exports.getBicicleta = async (id, res) => {
    const bicicleta = await Bicicleta.findById(id)
    res.send(bicicleta)
}

exports.saveBicicleta = (data, res) => {
    console.log(data)
    const bicicleta = new Bicicleta(data);
    bicicleta.save()
    res.send(bicicleta)
}

exports.updateBicicleta = async (id, data, res) => {
    const bicicleta = await Bicicleta.findByIdAndUpdate(id, data, { new: true }).exec()
    res.send(bicicleta)
}

exports.deleteBicicleta = async (id, res) => {
    const bicicleta = await Bicicleta.findByIdAndDelete(id).exec()
    res.send(bicicleta)
}
