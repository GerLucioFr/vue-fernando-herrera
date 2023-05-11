import { pokemonAxiosInstance } from '@/api/pokemonApi';
import { generateRandomNumber } from './number';

export const totalPokemons = 650;

export const getPokemonIds = (count) => {
  let ids = [];
  let index = 0;
  while (index < count) {
    ids.push(generateRandomNumber(1, totalPokemons));
    index++;
  }
  return ids;
};

export const getPokemonData = async (id = 1) => {
  try {
    const res = await pokemonAxiosInstance.get(`/pokemon/${id}`);
    const { name } = res.data;
    return { id, name };
  } catch (err) {
    return {};
  }
};

export const getPokemonOptions = async (count) => {
  let pokemonPromises = [];
  const ids = getPokemonIds(count);

  for (const id of ids) {
    pokemonPromises.push(getPokemonData(id));
  }
  return await Promise.all(pokemonPromises);
};
