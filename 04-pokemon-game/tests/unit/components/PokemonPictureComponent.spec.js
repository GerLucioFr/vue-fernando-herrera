import { shallowMount } from '@vue/test-utils';
import PokemonPictureComponent from '@/components/pokemon/PokemonPictureComponent';

describe('Pokemon Picture Component Test', () => {
  it('should to match with snapshot', () => {
    const wrapper = shallowMount(PokemonPictureComponent, {
      props: {
        id: 1,
        showImage: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should to show hidden image about pokemon with id 100', () => {
    const src =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg';
    const wrapper = shallowMount(PokemonPictureComponent, {
      props: {
        id: 100,
        showImage: false,
      },
    });
    const [hiddenImage, image] = wrapper.findAll('img');

    expect(hiddenImage.exists()).toBeTruthy();
    expect(hiddenImage.classes('hidden-pokemon')).toBeTruthy();
    expect(hiddenImage.attributes('src')).toBe(src);
    expect(image).toBeFalsy();
  });

  it('should to show image is showImage is true', () => {
    const wrapper = shallowMount(PokemonPictureComponent, {
      props: {
        id: 1,
        showImage: true,
      },
    });
    const [, image] = wrapper.findAll('img');

    expect(image.exists()).toBeTruthy();
    expect(image.classes('fade-in')).toBeTruthy();
  });
});
