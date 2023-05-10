<template>
  <div class="score-container">
    <p>Current Score: {{ currentScore }}</p>
    <p>Best Score: {{ bestScore }}</p>
  </div>
</template>

<script>
export default {
  name: 'PokemonScoreComponent',
  props: {
    currentScore: {
      type: Number,
      required: true,
      default: 0,
    },
    bestScore: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style scoped>
.score-container {
  display: flex;
  justify-content: space-around;

  margin: 32px 0;
}

p {
  font-size: 22px;
  font-weight: 700;
}

@media only screen and (max-width: 512px) {
  .score-container {
    display: block;
  }
}
</style>
