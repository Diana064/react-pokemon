import PokemonForm from 'components/PokemonForm';
import PokemonInfo from 'components/PokemonInfo';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonInfo={this.state.pokemonName} />
        <ToastContainer />
      </div>
    );
  }
}
// componentDidMount() {
//   this.setState({ isLoading: true });
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(res => res.json())
//   .then(pokemon => this.setState({ pokemon }))
//   .finally(() => this.setState({ isLoading: false }));
// }
