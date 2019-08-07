const mongoose = require("mongoose");


exports.connect = () => {
  mongoose.set('useFindAndModify', false)
    mongoose.connect("mongodb+srv://davidperez:davidperez@cluster0-g616q.mongodb.net/Ciclotic?retryWrites=true&w=majority", {
      keepAlive: 1,
      useNewUrlParser: true,
    });
    return mongoose.connection;
  };