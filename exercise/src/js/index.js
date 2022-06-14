const data = require('../data/data.json');

const searchPokemon = (name) => {
    const pokemon = data.results.find(pokemon => pokemon.name === name);
    if (pokemon) {
        console.log('Pokemon encontrado');
        console.log(`URL: ${pokemon.url}`);     
    } else {
        console.log(`No se encontró un pokemon con el nombre ${name}`);
    }
};

searchPokemon('limber');
searchPokemon('lim');