const mongoose = require("mongoose");
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
}

exports.controller = new controller()