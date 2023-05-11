import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import { pokemonOptionsMock } from '../mocks/pokemons.mock';

describe('Pokemon Page Test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  it('should to match with snapshot', () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonOptions: pokemonOptionsMock,
          selectedPokemon: pokemonOptionsMock[3],
          chosenPokemon: true,
          rightSelection: true,
          gameOver: false,
          currentScore: 1,
          bestScore: 0,
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should to call getPokemons on mounted', () => {
    const getPokemonsSpy = jest.spyOn(PokemonPage.methods, 'getPokemons');
    shallowMount(PokemonPage);

    expect(getPokemonsSpy).toHaveBeenCalled();
  });

  it('should to exists child components', () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonOptions: pokemonOptionsMock,
          selectedPokemon: pokemonOptionsMock[3],
          chosenPokemon: true,
          rightSelection: true,
          gameOver: false,
          currentScore: 1,
          bestScore: 0,
        };
      },
    });

    expect(wrapper.find('.pokemon-container').exists()).toBeTruthy();
    expect(wrapper.find('.options-container').exists()).toBeTruthy();
    expect(wrapper.find('.score-container').exists()).toBeTruthy();
  });

  it('should to call handle answer method with right selection', async () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonOptions: pokemonOptionsMock,
          selectedPokemon: pokemonOptionsMock[3],
          chosenPokemon: false,
          rightSelection: false,
          gameOver: false,
          currentScore: 0,
          bestScore: 0,
        };
      },
    });
    const successMessage = `Excellent, is ${pokemonOptionsMock[3].name}`;
    const failMessage = `Correct Pokemon was: ${pokemonOptionsMock[3].name}`;

    await wrapper.vm.handleSelection(pokemonOptionsMock[3]);
    const subtitle = wrapper.find('h3');

    expect(wrapper.vm.chosenPokemon).toBeTruthy();
    expect(subtitle.text()).toBe(successMessage);

    await wrapper.vm.handleSelection(pokemonOptionsMock[2]);
    const subtitleError = wrapper.find('h4');
    expect(subtitleError.text()).toBe(failMessage);
  });
});
