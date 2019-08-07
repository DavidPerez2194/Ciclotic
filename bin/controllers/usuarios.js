const User = require("../models/Usuarios")

exports.getUsers = (res) => {
    User.find({}, (err, users) => {
        if (err) throw err;
        res.send(users);
    })
}

exports.getUser = async (id, res) => {
    const user = await User.findById(id)
    res.send(user)
}

exports.saveUser = (data, res) => {
    console.log(data)
    const user = new User(data);
    user.save()
    res.send(user)
}

exports.updateUser = async (id, data, res) => {
    const user = await User.findByIdAndUpdate(id, data, { new: true }).exec()
    // console.log(user)
    res.send(user)
}

exports.deleteUser = async (id, res) => {
    const user = await User.findByIdAndDelete(id).exec()
    // console.log(user)
    res.send(user)
}
