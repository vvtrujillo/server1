const mongoose = require('mongoose');

const MaterialSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:[true, 'el nombre es requerido']
    },
    codigo:{
        type: Number,
        required:[true, 'el codigo es requerido']
    },
    cantidad:{
        type: Number,
        required:[true,'la cantidad es requerida']
    }

}, {timestamps:true});

const Material = mongoose.model('Material', MaterialSchema);

module.exports = Material;