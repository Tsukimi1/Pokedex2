document.querySelector('#search').addEventListener('click', getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector('#pokemonName').value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.pokemonBox').innerHTML = `
      <div>
        <img
          src="${data.sprites.other['official-artwork'].front_default}"
          alt=""
        />
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Weight: ${data.weight}</p>
        <p>Weight: ${data.height}</p>
      </div>`;
    })
    .catch((err) => {
      document.querySelector('.pokemonBox').innerHTML = `
      <h4>This pokemon doesn't exist 🌧</h4>
      `;
      console.log('Pokemon not found', err);
    });

  e.preventDefault();
}
