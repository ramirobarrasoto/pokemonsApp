import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import{ addPokemon, removePokemon,getPokemonDetails,getPokemons } from '../../store/actions'




export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.getPokemons(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {this.props.pokemonsLoaded?.map(pokemon=>( //mapeo los componenetes que recibe una movie y devuelve
           <li key={movie.imdbID}>
             <Link to={`/pokemon/${pokemon.id}`}> {movie.Title}</Link>
             <button onClick={() => this.props.addMovieFavorite(movie)}>Fav</button>
           </li>
         ))}
        </ul>
      </div> 
  
}

function mapStateToProps(state) {
  return {
    pokemonsLoaded: state.pokemonsLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getPokemons: pokemon => dispatch(getPokemons(pokemon))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);

//export default Buscador;
