import { pokemonAxiosInstance } from '@/api/pokemonApi';

describe('Pokemon API Test', () => {
  it('Axios should to has right API url', () => {
    expect(pokemonAxiosInstance.defaults.baseURL).toBe(
      'https://pokeapi.co/api/v2'
    );
  });
});
