const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AvistamientosSchema = new Schema({
    nombre:{type: String, requires: true, max: 100},
    especie:{type: String, requires: true, max: 40},
    descripcion:{type: String, requires: true, max: 200},
    vereda:{type: String, requires: true, max: 50},    
});

module.exports= mongoose.model("avistamientos", AvistamientosSchema);
