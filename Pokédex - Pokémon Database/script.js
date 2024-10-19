document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-button');
    const n = document.getElementById("pokemon-name");
    const id = document.getElementById("pokemon-id");
    const w = document.getElementById("weight");
    const h = document.getElementById("height");
    const t = document.getElementById("types");
    const hp = document.getElementById("hp");
    const atk = document.getElementById("attack");
    const def = document.getElementById("defense");
    const spAtk = document.getElementById("special-attack");
    const spDef = document.getElementById("special-defense");
    const spd = document.getElementById("speed");
    const sprite = document.getElementById("sprite"); 

    const typeColors = {
        normal: '#A8A878',
        fighting: '#C03028',
        flying: '#A890F0',
        poison: '#A040A0',
        ground: '#E0C68A',
        rock: '#B8A038',
        bug: '#A8B820',
        ghost: '#705898',
        steel: '#B8B8D0',
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        psychic: '#F85888',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC',
    };

    function fetchPokemonData(input) {
        t.innerHTML = '';
        fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon")
            .then(response => response.json())
            .then(pokemonList => {
                const pokemonArray = pokemonList.results;
                const specificPokemon = pokemonArray.find(pokemon => 
                    pokemon.name === input.toLowerCase() || pokemon.id == input
                );
                if (!specificPokemon) {
                    alert("Pokémon not found");
                    return;
                }
                return fetch(specificPokemon.url);
            })
            .then(response => response.json())
            .then(pokemonData => {
                const extractedData = extractPokemonData(pokemonData);
                populatePokemonData(extractedData);
            })
            .catch(error => console.error('Error:', error));
    }

    function extractPokemonData(pokemon) {
        const baseStats = pokemon.stats.map(stat => ({
            name: stat.stat.name,
            base_stat: stat.base_stat
        }));

        const types = pokemon.types.map(typeInfo => typeInfo.type.name);

        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            base_stats: baseStats,
            types: types,
            weight: pokemon.weight,
            height: pokemon.height
        };
    }

    function populatePokemonData(pokemon) {
        n.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        id.textContent = `#${pokemon.id}`;
        w.textContent = pokemon.weight;
        h.textContent = pokemon.height;
        t.innerHTML = '';
        pokemon.types.forEach(type => {
            const typeElement = document.createElement('span');
            typeElement.textContent = type.toUpperCase();
            typeElement.style.backgroundColor = typeColors[type] || '#FFFFFF';
            typeElement.style.color = '#FFFFFF';
            typeElement.style.padding = '4px';
            typeElement.style.marginRight = '5px';
            typeElement.style.borderRadius = '5px';
            t.appendChild(typeElement);
        });
        hp.textContent = pokemon.base_stats.find(stat => stat.name === "hp").base_stat;
        atk.textContent = pokemon.base_stats.find(stat => stat.name === "attack").base_stat;
        def.textContent = pokemon.base_stats.find(stat => stat.name === "defense").base_stat;
        spAtk.textContent = pokemon.base_stats.find(stat => stat.name === "special-attack").base_stat;
        spDef.textContent = pokemon.base_stats.find(stat => stat.name === "special-defense").base_stat;
        spd.textContent = pokemon.base_stats.find(stat => stat.name === "speed").base_stat;
        sprite.src = pokemon.image;
    }

    searchBtn.addEventListener("click", () => {
        const searchValue = searchInput.value;
        fetchPokemonData(searchValue);
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const searchValue = searchInput.value;
            fetchPokemonData(searchValue);
        }
    });
});
