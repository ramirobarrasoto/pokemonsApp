import axios from 'axios';
import { POKEMON_URL } from '../../constants';

export const ADD_POKEMON = 'ADD_POKEMON';
export const REMOVE_POKEMON = 'REMOVE_POKEMON';
export const GET_POKEMONS_DETAIL = 'GET_POKEMONS_DETAIL';
export const GET_POKEMONS = 'GET_POKEMONS';

export function addPokemon(payload) {
	return {
		type: ADD_POKEMON,
		payload,
	};
}

export function removePokemon(id) {
	return {
		type: REMOVE_POKEMON,
		payload: id,
	};
}


export function getPokemonDetails(id) {
	return function (dispatch) {
		return axios.get(`${POKEMON_URL}/${id}`).then((respons) => {
			dispatch({
				type: GET_POKEMONS_DETAIL,
				payload: respons.data,
			});
		});
	};
}



export function getPokemons() {
	return function (dispatch) {
		return axios.get(POKEMON_URL).then((respons) => {
			dispatch({
				type: GET_POKEMONS,
				payload: respons.data,
			});
		});
	};
}
