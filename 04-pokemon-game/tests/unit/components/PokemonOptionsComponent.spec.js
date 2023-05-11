import { shallowMount } from '@vue/test-utils';
import PokemonOptionsComponent from '@/components/pokemon/PokemonOptionsComponent';
import { pokemonOptionsMock } from '../mocks/pokemons.mock';

describe('Pokemon Options Component Test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptionsComponent, {
      props: {
        pokemonOptions: pokemonOptionsMock,
        chosenPokemon: false,
      },
    });
  });

  it('should to match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should to show pokemons options in buttons', () => {
    const buttons = wrapper.findAll('button');

    expect(buttons).toHaveLength(4);
    buttons.forEach((button, index) => {
      expect(button.text()).toBe(pokemonOptionsMock[index].name);
    });
  });

  it('should to emit selected pokemon on click', async () => {
    const buttons = wrapper.findAll('button');

    buttons.forEach((button, index) => {
      button.trigger('click');
      const emited = wrapper.emitted('selection')[index][0];
      expect(emited).toStrictEqual(pokemonOptionsMock[index]);
    });
  });
});
