const axios = require('axios');
const { Pokemon, Type } = require('../db');

async function deletePokemons(req, res) {
	const id = req.params.id;

	return Pokemon
		.destroy({
			where: {
				id,
			},
		})
		.then(() => res.sendStatus(200))
		.catch((error) => next(error));
}

module.exports = deletePokemons;
