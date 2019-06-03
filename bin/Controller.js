const mongoose = require("mongoose");
class Controller{
constructor(){
    this.connect();
}
async connect(){
    try{
await mongoose.connect(
"mongodb+srv://davidperez:davidperez@cluster0-g616q.mongodb.net/Ciclotic?retryWrites=true&w=majority"
)
        }  catch(e){
            console.error(e)
    }
}
}