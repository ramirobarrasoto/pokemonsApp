import {ADD_POKEMON, REMOVE_POKEMON, GET_POKEMONS_DETAIL,GET_POKEMONS } from '../actions/pokemonsActions';

const initialState = {
	//Aca es array por que cargo varios objetos pokemon
	pokemons: [],
	pokemonsLoaded:[],
	//Aca es objeto por que es un solo pokemon con sus propiedades
	pokemonDetail:{}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case ADD_POKEMON:
			return {
				...state,
				pokemons: state.pokemons.concat(action.payload),
			};
	

		case REMOVE_POKEMON:
			return {
				...state,
				pokemons: state.pokemons.filter(pokemon=>pokemon.id !== action.payload),
			};
		

		case GET_POKEMONS:
			return {
				...state,
				pokemonsLoaded: action.payload,
			};
		

		case GET_POKEMONS_DETAIL:
			return {
				...state,
				pokemonDetail: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;