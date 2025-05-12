const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
    juego: {
        type: String,
        required: [true, "El torneo es obligatorio"],
        default: "League of Legends"
    },
    torneo: {
        type: String,
        required: [true, "El torneo es obligatorio"]
    },
    jornada: {
        type: String,
        required: [true, "La jornada es obligatoria"]
    },
    oponente: {
        type: String,
        required: [true, "El oponente es obligatorio"]
    },
    fechaHora: {
        type: Date,
        required: [true, "La fecha y hora son obligatorias"]
    },
    ubicacion: {
        type: String,
        required: [true, "La ubicación es obligatoria"]
    },
    resultado: {
        marcadorLocal: {
            type: Number,
            min: [0, "El marcador local no puede ser negativo"]
        },
        marcadorOponente: {
            type: Number,
            min: [0, "El marcador oponente no puede ser negativo"]
        }
    },
    imagenRival: {
        type: String,
        default: "assets/img/BNK_FEARXlogo_profile.webp"
    }
    
    
});

module.exports = mongoose.model('Match', matchSchema);
