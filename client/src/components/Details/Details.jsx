import React from 'react';
import { useEffect } from 'react'; //ok1
import { connect } from 'react-redux';
import style from './Details.module.css';
import CardDetails from './CardDetails'
import { getPokemonDetails } from '../../store/actions/pokemonsActions';

function Details({ pokemons, getPokemonDetails}) {
	
	function getPoke() {
		getPokemonDetails();
	}

	useEffect(() => {
		getPoke();
	}, []);

	

	return (
		<div>
			{!pokemons.name ? (
				pokemons.map((pokemon) => 
                <CardDetails 
                id={pokemon.id}
                name={pokemon.name} 
                image={pokemon.img} 
                type={pokemon.types}
                life={pokemon.life}
                force={pokemon.force}
                defence={pokemon.defence}
                velocity = {pokemon.velocity}
                height = {pokemon.height}
                weight={pokemon.weight}
                />)
			) : (
				<h1>cargando</h1>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemonsDetails,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPokemons: () => {
			dispatch(getPokemonDetails());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

 