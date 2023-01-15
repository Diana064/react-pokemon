import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonApi from './services/pokemon-api';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonInfo;
    const nextName = this.props.pokemonInfo;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      pokemonApi
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
    console.log(this.state.pokemon);
  }
  //'idle'
  //'pending'
  //'resolve'
  //'rejected'
  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonInfo } = this.props;

    switch (status) {
      case 'resolved':
        return <PokemonDataView pokemon={pokemon} />;

      case 'pending':
        return <PokemonPendingView pokemonName={pokemonInfo} />;

      case 'rejected':
        return <PokemonErrorView message={error.message} />;

      default:
        return <h1>Please enter Pokemon Name</h1>;
    }
  }
}
