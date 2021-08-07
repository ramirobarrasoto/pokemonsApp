const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { v4: uuidv4 } = require('uuid');

async function createPokemons(req, res) {
	const body = req.body;
	const poke = await Pokemon.create({
		id: uuidv4(),
		name: body.name,
		img: body.image,
		life: body.life,
		force: body.force,
		defence: body.defence,
		velocity: body.velocity,
		height: body.height,
		weight: body.weight,
	});

	const lolo = await Pokemon.findByPk(poke.id)
		.then((pokemon) => {
			//console.log(body.type)
			return pokemon.addTypes(body.type);
		})
		.then(() => res.send(200))
		.catch((error) => next(error));
}

module.exports = createPokemons;
