function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Do not find pokemon with this name ${name}`)
    );
  });
}

export default { fetchPokemon };
