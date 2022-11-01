interface NameAndUrlObject {
  name: string;
  url: string;
}

type Abilities = {
  ability: NameAndUrlObject[];
  is_hidden: boolean;
  slot: number;
};

interface PokemonInterface {
  abilities: Abilities[];
  base_experience: number;
  forms: NameAndUrlObject[];
  game_indices: { version: NameAndUrlObject; game_index: number }[];
  height: number;
  held_items: [];
  id: number;
  is_default: true;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: NameAndUrlObject;
  sprites: {
    back_default: string | null;
    back_female?: string | null;
    back_shiny: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    from_shiny_female: string | null;
    other?: {};
  };
  stats: [];
  types: [];
  weight: number;
}

const poke_container = document.getElementById(
  "poke_container"
)! as HTMLDivElement;
const pokemon_count = 5;
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
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  createPokemonCard(data);
};

const createPokemonCard = (pokemon: PokemonInterface) => {
  const pokemonEl = document.createElement("div")! as HTMLDivElement;
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");

  const poke_types = pokemon.types.map((type) => type.type.name);
  const poke_type = main_types.find(
    (type) => poke_types.indexOf(type) > -1
  ) as string;
  const color = colors[poke_type];
  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
    <div class="img-container"></div>
    `;
  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
  console.log(name, id, poke_types, color);
};

fetchPokemons();
