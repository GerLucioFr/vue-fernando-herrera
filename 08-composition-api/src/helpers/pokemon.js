import { axiosInstance } from '@/http/api';

const url = 'https://pokeapi.co/api/v2';

export const getPokemon = async (id) => {
  const pokemonAPI = axiosInstance(url);
  const res = await pokemonAPI.get(`/pokemon/${id}`);
  return res.data;
};
