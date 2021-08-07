const axios = require('axios');
const { Pokemon, Type } = require('../db');

const { POKEMON_URL } = require('../constants');


async function readAllPokemons (req, res) {
    const id = req.params.id;
    console.log(id)
    try {
        if (id.length > 6) {
            const pokeOnDB = await Pokemon.findByPk(id);
            console.log(pokeOnDB);
            return res.json(pokeOnDB);
        } else {
            const { data } = await axios.get(`${POKEMON_URL}/${id}`);
            const pokemon = {
                id: data.id,
                name: data.name,
                img: data.sprites.other.dream_world.front_default,
                life: data.stats[0].base_stat,
                force: data.stats[1].base_stat,
                defence: data.stats[2].base_stat,
                velocity: data.stats[5].base_stat,
                height: data.height,
                weight: data.weight,
            };
            return res.json(pokemon);
        }

    } catch {
        return res.status(400).send('POKEMON NO ENCONTRADO');
    }
};

module.exports= readAllPokemons;