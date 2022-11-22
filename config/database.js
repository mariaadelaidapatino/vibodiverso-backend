const mongoose = require("mongoose");
const host= "localhost";
const port="27017";
const db ="hr";

exports.mongoConnect=()=>{
    const mongoStringConnetion =`mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnetion);
    mongoose.Promise= global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind
        (console, "Mongodb connection error"));
}