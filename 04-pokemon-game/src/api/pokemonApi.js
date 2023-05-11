import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2';

export const pokemonAxiosInstance = axios.create({
  baseURL,
});
