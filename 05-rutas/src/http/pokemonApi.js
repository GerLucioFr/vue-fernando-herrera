import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

export const pokemonApi = axios.create({ baseURL });
