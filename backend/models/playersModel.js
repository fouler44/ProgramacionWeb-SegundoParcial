const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    juego: {
        type: String,
        required: [true, "El juego es obligatorio"]
    },
    posicion: {
        type: String,
        required: [true, "La posición es obligatoria"]
    },
    edad: {
        type: String,
        required: [true, "La edad es obligatoria"]
    },
    pais: {
        type: String,
        required: [true, "El pais es obligatorio"]
    },
    contratoExpira: {
        type: Date,
        required: [true, "La fecha es obligatoria"]
    }
})

module.exports = mongoose.model('Player', playerSchema);
