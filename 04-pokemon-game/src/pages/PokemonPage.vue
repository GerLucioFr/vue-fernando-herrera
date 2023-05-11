<template>
  <div class="container">
    <h1>Who is this Pokemon?</h1>

    <div class="game-container" v-if="selectedPokemon && pokemonOptions.length">
      <PokemonPictureComponent
        :id="selectedPokemon.id"
        :showImage="chosenPokemon"
      />
      <PokemonOptionsComponent
        :pokemonOptions="pokemonOptions"
        :chosenPokemon="chosenPokemon"
        @selection="handleSelection"
      />

      <PokemonScoreComponent
        :currentScore="currentScore"
        :bestScore="bestScore"
      />

      <div class="fade-in" v-if="chosenPokemon && rightSelection">
        <h3>Excellent, is {{ selectedPokemon.name }}</h3>
        <button @click="resetTurn">Next</button>
      </div>

      <div class="fade-in" v-if="gameOver">
        <h2>Game Over</h2>
        <h4>Correct Pokemon was: {{ selectedPokemon.name }}</h4>
        <button @click="resetGame">Play again</button>
      </div>
    </div>

    <h3 v-else>Loading data...</h3>
  </div>
</template>

<script>
import PokemonPictureComponent from '@/components/pokemon/PokemonPictureComponent.vue';
import PokemonOptionsComponent from '@/components/pokemon/PokemonOptionsComponent.vue';
import PokemonScoreComponent from '@/components/pokemon/PokemonScoreComponent.vue';
import { getPokemonOptions } from '@/helpers/getPokemonOptions';
import { generateRandomNumber } from '@/helpers/number';
export default {
  name: 'PokemonPage',
  components: {
    PokemonOptionsComponent,
    PokemonPictureComponent,
    PokemonScoreComponent,
  },
  data() {
    return {
      pokemonOptions: [],
      selectedPokemon: null,
      chosenPokemon: false,
      rightSelection: false,
      gameOver: false,
      currentScore: 0,
      bestScore: 0,
    };
  },
  mounted() {
    this.getPokemons();
    this.getBestScore();
  },
  methods: {
    async getPokemons() {
      this.pokemonOptions = await getPokemonOptions(4);
      const selectedId = generateRandomNumber(
        0,
        this.pokemonOptions.length - 1
      );
      this.selectedPokemon = this.pokemonOptions[selectedId];
    },
    handleSelection(selection) {
      this.chosenPokemon = true;
      this.rightSelection = this.selectedPokemon.id === selection.id;

      if (this.rightSelection) {
        this.currentScore++;
        if (this.currentScore > this.bestScore) {
          this.setBesScore(this.currentScore);
        }
      } else {
        this.gameOver = true;
      }
    },
    resetGame() {
      this.currentScore = 0;
      this.gameOver = false;
      this.resetTurn();
    },
    resetTurn() {
      this.selectedPokemon = null;
      this.chosenPokemon = false;
      this.getPokemons();
    },
    getBestScore() {
      this.bestScore = Number(localStorage.getItem('bestScore'));
    },
    setBesScore(score) {
      this.bestScore = score;
      localStorage.setItem('bestScore', score);
    },
  },
};
</script>

<style>
button {
  background-color: rgb(54, 0, 104);
  color: white;
}

button:hover {
  background-color: rgb(33, 0, 65);
}
</style>
