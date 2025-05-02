const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
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
    fecha: {
        type: Date,
        required: [true, "La fecha es obligatoria"]
    },
    hora: {
        type: String,
        required: [true, "La hora es obligatoria"]
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
    }
    
});

module.exports = mongoose.model('Match', matchSchema);
