import { useEffect } from 'react'; //ok1
import { connect } from 'react-redux';
import Card from './Card';
import style from './Cards.module.css';
import { getPokemons } from '../../store/actions/pokemonsActions';

function Cards({ pokemons, getPokemons }) {
	function getPoke() {
		getPokemons();
	}

	useEffect(() => {
		getPoke();
	}, []);

	return (
		<div className={style.cards}>
			{!pokemons.name ? (
				pokemons.map((pokemon) => (
					<Card name={pokemon.name} image={pokemon.img} type={pokemon.types} id={pokemon.id} />
				))
			) : (
				<h1>cargando</h1>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemonsLoaded,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPokemons: () => {
			dispatch(getPokemons());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
