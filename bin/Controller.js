const mongoose = require("mongoose");
const User = require("./models/Usuarios")
const reserva = require("./models/Reservas")

class controller{
constructor(){
    this.connect();
}
async connect(){
    try{
await mongoose.connect(
"mongodb+srv://davidperez:davidperez@cluster0-g616q.mongodb.net/Ciclotic?retryWrites=true&w=majority",
{useNewUrlParser:true}
);
console.log("conectado a la base de datos")
        }  catch(e){
            console.error(e)
    }
}
getUsers(res){
    User.find({}, (err, users)=>{
        if(err) throw err;
        res.send(users);
 } )

    }

    getReservas(res){
    reservas.find({}, (err, reservas)=>{
        if(err) throw err;
        res.send(reservas);
 } )

    }

    setReservas(reservas,res){
        User.create(reservas, function( err, NuevoUsuario){
            if (err) throw err;
            res.send({estado: 200, NuevoUsuario});

    })

    setUsuarios(usuarios,res)
        User.create(usuarios, function( err, NuevoUsuario){
            if (err) throw err;
            res.send({estado: 200, NuevoUsuario});

    });

}}


exports.controller = new controller();