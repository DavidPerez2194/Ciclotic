const mongoose = require("mongoose");
const User = require("./models/Usuarios")
const reserva = require("./models/Reservas")
const Bicicletas = require("./models/Bicicletas")
const Ubicaciones = require("./models/Ubicaciones")


class controller {
    constructor() {
        this.connect();
    }
    async connect() {
        try {
            await mongoose.connect(
                "mongodb+srv://davidperez:davidperez@cluster0-g616q.mongodb.net/Ciclotic?retryWrites=true&w=majority",
                { useNewUrlParser: true }
            );
            console.log("conectado a la base de datos")
        } catch (e) {
            console.error(e)
        }
    }
    getUsers(res) {
        User.find({}, (err, users) => {
            if (err) throw err;
            res.send(users);
        })

    }
    getBicicletas(res) {
        Bicicletas.find({}, (err, bicicletas) => {
            if (err) throw err;
            res.send(bicicletas);
        })

    }

    getReservas(res) {
        reservas.find({}, (err, reservas) => {
            if (err) throw err;
            res.send(reservas);
        })

    }

    getUbicaciones(res) {
        Ubicaciones.find({}, (err, ubicacion) => {
            if (err) throw err;
            res.send(ubicacion);
        })

    }


    setReservas(reservas, res) {
        User.create(reservas, function(err, NuevoUsuario) {
            if (err) throw err;
            res.send({ estado: 200, NuevoUsuario });

        })
    }

    setUser(usuarios, res) {
        // Se recibe el nuevo usuario en la variable user y se crea a partir del modelo
        User.create(usuarios, function(err, NuevoUsuario) {
            // sihay error se reporta
            if (err) throw err;
            // se retorna la informacion con el nuevo usuario creado
            res.send({ estado: 200, nU: NuevoUsuario });
        });
    }

    setBicicletas(bici, res) {
        // Se recibe el nuevo usuario en la variable user y se crea a partir del modelo
        Bicicletas.create(bici, function(err, NuevaBici) {
            // sihay error se reporta
            if (err) throw err;
            // se retorna la informacion con el nuevo usuario creado
            res.send({ estado: 200, nU: NuevaBici });
        });
    }
    setubicacion(ubicacion, res) {
        // Se recibe el nuevo usuario en la variable user y se crea a partir del modelo
        Ubicaciones.create(ubicacion, function(err, NuevaUbicacion) {
            // sihay error se reporta
            if (err) throw err;
            // se retorna la informacion con el nuevo usuario creado
            res.send({ estado: 200, nU: NuevaUbicacion });
        });
    }
}


exports.controller = new controller();