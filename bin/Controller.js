const mongoose = require("mongoose");
const User = require("./models/Usuarios")

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
    postUsers(req, res){
        let usuarios = req.body.users;
        User.create( usuarios, (err, result)=>{
            if(err)throw err;
            res.send({newUser:result})
        })
    }

}


exports.controller = new controller();