const asyncHandler = require("express-async-handler");
const Match = require("../models/matchesModel");


const getMatches = asyncHandler(async (req, res) => {
    const matches = await Match.find();
    res.status(200).json({ matches });
});



const createMatch = asyncHandler(async (req, res) => {
    const { torneo, jornada, oponente, fecha, hora, ubicacion } = req.body;

    if (!torneo || !jornada || !oponente || !fecha || !hora || !ubicacion) {
        res.status(400);
        throw new Error("Por favor llena todos los campos obligatorios");
    }

    const match = await Match.create({
        torneo,
        jornada,
        oponente,
        fecha,
        hora,
        ubicacion
    });

    res.status(201).json({ match });
});



const updateMatch = asyncHandler(async (req, res) => {
    const match = await Match.findById(req.params.id);
    if (!match) {
        res.status(404);
        throw new Error('Partido no encontrado');
    }

    const updatedMatch = await Match.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });

    res.status(200).json(updatedMatch);
});




const deleteMatch = asyncHandler(async (req, res) => {
    const match = await Match.findById(req.params.id);
    if (!match) {
        res.status(404);
        throw new Error('Partido no encontrado');
    }

    await match.deleteOne();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getMatches,
    createMatch,
    updateMatch,
    deleteMatch
};
