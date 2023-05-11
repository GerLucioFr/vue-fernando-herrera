import {
  getPokemonData,
  getPokemonIds,
  getPokemonOptions,
  totalPokemons,
} from '@/helpers/getPokemonOptions';

describe('Pokemon Options Test', () => {
  const length = 4;

  it('should to return an N numbers between 0 and totalPokemons array', () => {
    const ids = getPokemonIds(length);
    const hasOnlyNumbers = ids.every((num) => typeof num === 'number');
    const numbersInRange = ids.every((num) => num > 0 && num <= totalPokemons);

    expect(ids).toHaveLength(length);
    expect(hasOnlyNumbers).toBeTruthy();
    expect(numbersInRange).toBeTruthy();
  });

  it('should to return a pokemon object', async () => {
    const pokemon = await getPokemonData(1);
    expect(pokemon).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
    });
  });

  it('should to return an array of N pokemons', async () => {
    const pokemons = await getPokemonOptions(length);

    expect(pokemons).toHaveLength(length);
    pokemons.forEach((pokemon) => {
      expect(pokemon).toEqual({
        id: expect.any(Number),
        name: expect.any(String),
      });
    });
  });
});
