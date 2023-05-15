<template>
  <div class="details-container">
    <div v-if="pokemon">
      <h2>Pokemon #{{ pokemon.id }} {{ pokemon.name }}</h2>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
  </div>
</template>

<script>
import { pokemonApi } from '@/http/pokemonApi';

export default {
  name: 'DetailsPage',
  created() {
    this.getPokemon();
  },
  data() {
    return {
      pokemon: null,
    };
  },
  methods: {
    async getPokemon() {
      try {
        const res = await pokemonApi.get(`/${this.id}`);
        this.pokemon = res.data;
        console.log(this.pokemon);
      } catch (error) {
        this.$router.push('/not-found');
      }
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>

<style></style>
