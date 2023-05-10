<template>
  <div class="options-container">
    <button
      v-for="option in pokemonOptions"
      :key="option.id"
      :disabled="chosenPokemon"
      @click="$emit('selection', option)"
    >
      {{ option.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PokemonOptionsComponent',
  props: {
    pokemonOptions: {
      type: Array,
      required: true,
    },
    chosenPokemon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
button {
  background-color: rgb(0, 95, 150);
  color: white;
}

button:hover {
  background-color: rgb(0, 50, 78);
}

button:disabled {
  background-color: rgb(214, 214, 214);
  color: black;
}

.options-container {
  display: flex;
  justify-content: center;
  gap: 16px;

  margin-top: 32px;
}

@media only screen and (max-width: 512px) {
  .options-container {
    flex-direction: column;
  }

  button {
    margin: 0 8px;
  }
}
</style>
