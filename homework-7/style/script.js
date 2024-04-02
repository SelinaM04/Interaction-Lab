let demoPokemon = {};

const pokemonContainer = document.querySelector("#pokemon-container");

function getRandomPokemon() {
  const totalPokemon = 999; 
  const randomInteger = Math.floor(Math.random() * totalPokemon) + 1; 

  const apiURL = `https://pokeapi.co/api/v2/pokemon/${randomInteger}`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      demoPokemon = {
        name: data.name,
        abilities: data.abilities,
        moves: data.moves
      };

      let pokeDOM = `<div class="pokemon">
        <h2>Name: ${demoPokemon.name.charAt(0).toUpperCase() + demoPokemon.name.slice(1)}</h2>
        <h3>Abilities:</h3>
        <ul class="abilities">`;

      demoPokemon.abilities.forEach(ability => {
        pokeDOM += `<li>${ability.ability.name}</li>`;
      });

      pokeDOM += `</ul><h3>Moves:</h3><ul class="moves">`;

      demoPokemon.moves.forEach(move => {
        pokeDOM += `<li>${move.move.name}</li>`;
      });

      pokeDOM += `</ul></div>`;

      pokemonContainer.innerHTML = pokeDOM;
    })
    .catch(error => {
      console.error('Failed to fetch Pokemon data:', error);
    });
}

document.querySelector("#update-pokemon").addEventListener("click", getRandomPokemon);
