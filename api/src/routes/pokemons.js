const { Router } = require('express');
const createPokemons = require('../controllers/createPokemons');
const deletePokemons = require('../controllers/deletePokemons');
const readAll = require('../controllers/readAll');
const readAllById = require('../controllers/readAllById');
const updatePokemons = require('../controllers/updatePokemons');

const router = Router();

//creo las rutas
//obtengo todos los pokemons
router.get('/', readAll);
router.get('/:id', readAllById);
router.post('/', createPokemons);
router.delete('/:id', deletePokemons);
router.put('/:id', updatePokemons);

module.exports = router;
