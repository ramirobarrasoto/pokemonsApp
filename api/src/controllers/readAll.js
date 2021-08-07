const axios = require('axios');
const { Pokemon, Type } = require('../db');

const { POKEMON_URL } = require('../constants');

async function readAll(req, res, next) {
	const { name } = req.query;

	if (name) {
		console.log(name);
		console.log('entraste al if');
		try {
			const pokeOnDB = await Pokemon.findAll({
				where: { name: name },
			});

			if (pokeOnDB.length !== 0) {
				return res.json(pokeOnDB);
			} else {
				const { data } = await axios.get(`${POKEMON_URL}/${name}`);
				const pokeOnApi = {
					id: data.id,
					name: data.name,
					img: data.sprites.other.dream_world.front_default,
					types: data.types.map((c) => {
						return {
							type: c.type.name,
						};
					}),
				};

				return res.json(pokeOnApi);
			}
		} catch {
			return res.status(400).send('POKEMON NO ENCONTRADO');
		}
	}

	//*********************************************************
	//***************Busca todos los pokemons******************
	//*********************************************************

	const pokeOnDB = Pokemon.findAll({
		include: {
			model: Type,
		},
	});

	const pokeOnApi = await axios.get(`${POKEMON_URL}/?limit=40&offset=0.`);
	//console.log(pokeOnApi.data.results)
	const huntInUrl = pokeOnApi.data.results.map((p) => {
		return {
			url: p.url,
		};
	});
	console.log(huntInUrl);
	const huntInUrl2 = huntInUrl.map(async (p) => {
		const url2 = p.url;
		const { data } = await axios.get(`${url2}`);

		return {
			id: data.id,
			name: data.name,
			img: data.sprites.other.dream_world.front_default,
			types: data.types?.map((c) => c.type.name),
		};
	});
	const pokeApi = await Promise.all(huntInUrl2);

	Promise.all([pokeOnDB, pokeApi])
		.then((results) => {
			const [myPokemonResult, apiPokemonResult] = results;
			const response = myPokemonResult.concat(apiPokemonResult);
			res.send(response);
		})
		.catch((error) => next(error));
}

module.exports = readAll;
