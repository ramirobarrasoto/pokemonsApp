const axios = require('axios');
const { Pokemon, Type } = require('../db');

function updatePokemons(req, res) {
	const id = req.params.id;
		const body = req.body;
		return Pokemon
			.update(body, {
				where: {
					id,
				},
			})
			.then((updateElement) => res.send(updateElement))
			.catch((error) => next(error));
}

module.exports = updatePokemons;
