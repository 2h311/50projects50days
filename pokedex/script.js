const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const poke_container = document.getElementById("poke-container");
const pokemon_count = 5;
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const titleHelper = (text) => text[0].toUpperCase() + text.slice(1);

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  console.log(pokemon);
  const { name, id, types, sprites } = pokemon;

  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name_ = titleHelper(name);
  const id_ = id.toString().padStart(3, "0");

  const poke_types = types.map((type) => type.type.name);
  const poke_type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[poke_type];
  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="${
          sprites.other["official-artwork"].front_default
        }" alt="${name_}" />
    </div>
    <div class="info">
        <span class="number">${id_}</span>
        <h3>${name_}</h3>
        <small class="type">Type: <span>${titleHelper(poke_type)}</span></small>
    </div>
    `;
  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
