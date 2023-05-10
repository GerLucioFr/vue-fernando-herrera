<template>
  <div class="pokemon-container">
    <img class="hidden-pokemon" :src="imageSource" alt="pokemon" />
    <img class="fade-in" v-if="showImage" :src="imageSource" alt="pokemon" />
  </div>
</template>

<script>
export default {
  name: 'PokemonPictureComponent',
  computed: {
    imageSource() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`;
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    showImage: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  position: absolute;

  height: 200px;
  width: 100vw;
  margin-left: -50vw;

  pointer-events: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
