const express = require('express')
const router = express.Router()
const {getPlayers, createPlayers, updatePlayers, deletePlayers} = require("../controllers/playersControllers")

router.get('/', getPlayers)

router.post('/', createPlayers)

router.put('/:id', updatePlayers)

router.delete('/:id', deletePlayers)

module.exports = router