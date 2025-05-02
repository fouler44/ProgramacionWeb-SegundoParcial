const express = require('express');
const router = express.Router();
const {getMatches, createMatch, updateMatch, deleteMatch} = require("../controllers/matchesControllers");

router.get('/', getMatches);

router.post('/', createMatch);

router.put('/:id', updateMatch);

router.delete('/:id', deleteMatch);

module.exports = router;
