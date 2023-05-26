import { getPokemon } from '@/helpers/pokemon';
import { ref } from 'vue';

const usePokemon = (id = 1) => {
  const pokemon = ref();
  const isLoading = ref(false);

  const searchPokemon = async (id) => {
    try {
      if (!id) {
        return;
      }
      isLoading.value = true;
      pokemon.value = await getPokemon(id);
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
    }
  };

  searchPokemon(id);

  return {
    pokemon,
    isLoading,
    searchPokemon,
  };
};

export default usePokemon;
