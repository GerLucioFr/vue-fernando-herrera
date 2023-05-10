import { generateRandomNumber } from './number';
import axios from 'axios';

const totalPokemons = 650;

const getPokemonIds = (count) => {
  let ids = [];
  let index = 0;
  while (index < count) {
    ids.push(generateRandomNumber(1, totalPokemons));
    index++;
  }
  return ids;
};

const getPokemonName = async (id = 1) => {
  const baseURL = 'https://pokeapi.co/api/v2';
  const axiosInstance = axios.create({
    baseURL,
  });
  try {
    const res = await axiosInstance.get(`/pokemon/${id}`);
    return res.data.name;
  } catch (err) {
    return '';
  }
};

export const getPokemonOptions = async (count) => {
  let names = [];
  const ids = getPokemonIds(count);
  for (const id of ids) {
    const name = await getPokemonName(id);
    names.push({ id, name });
  }
  return names;
};
