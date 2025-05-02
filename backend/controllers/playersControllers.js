const asyncHandler = require("express-async-handler");
const Player = require("../models/playersModel");

const getPlayers = asyncHandler(async (req, res) => {
    const players = await Player.find();
    res.status(200).json({ players });
});

const createPlayers = asyncHandler(async (req, res) => {
    const { nombre, juego, posicion, edad, pais, contratoExpira } = req.body;

    // Verificar que no falte ningún campo obligatorio
    if (!nombre || !juego || !posicion || !edad || !pais || !contratoExpira) {
        res.status(400);
        throw new Error("Por favor, llena todos los apartados");
    }

    // Crear el nuevo jugador
    const player = await Player.create({
        nombre,
        juego,
        posicion,
        edad,
        pais,
        contratoExpira,
    });

    res.status(201).json({ player });
});

const updatePlayers = asyncHandler(async (req, res) => {
    const player = await Player.findById(req.params.id);

    if (!player) {
        res.status(404);
        throw new Error("Player no encontrado");
    }

    const playerUpdated = await Player.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(playerUpdated);
});

const deletePlayers = asyncHandler(async (req, res) => {
    const player = await Player.findById(req.params.id);

    if (!player) {
        res.status(404);
        throw new Error("Player no encontrado");
    }

    await player.deleteOne();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getPlayers,
    createPlayers,
    updatePlayers,
    deletePlayers,
};
