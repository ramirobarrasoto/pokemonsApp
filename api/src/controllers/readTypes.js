const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { TYPE_URL } = require('../constants');

async function readTypes(req, res) {
	const { data } = await axios.get(TYPE_URL);

	const allPoke = data.results.map((p) => {
		return {
			name: p.name,
		};
	});
	console.log(allPoke);

	const types = allPoke.map((c) => {
		return {
			id: uuidv4(),
			name: c.name,
		};
	});

	console.log(types);

	const allTypes = await Type.bulkCreate(types);
	//const tipos = await Promise.all(allTypes);

	//console.log(tipos);

	res.json(allTypes);
}

module.exports = readTypes;
