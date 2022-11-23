const mongoose = require("mongoose");
// const host= "localhost";
// const port="27017";
// const db ="hr";
const host= "admin";
const port="@micluster.orbni5f.mongodb.net";
const db ="hr";
//mongodb+srv://admin:admin@micluster.orbni5f.mongodb.net/hr?retryWrites=true&w=majority
exports.mongoConnect=()=>{
    //const mongoStringConnetion =`mongodb://${host}:${port}/${db}`;

    const mongoStringConnetion =`mongodb+srv://admin${host}:${port}/${db}?retryWrites=true&w=majority`;

    mongoose.connect(mongoStringConnetion);
    mongoose.Promise= global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind
        (console, "Mongodb connection error"));
}