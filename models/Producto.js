const mongoose = require('mongoose');
const productoSchema = mongoose.Schema({

    nombreProducto: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', productoSchema);