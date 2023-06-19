<template>
  <div class="loading-location" v-if="isLoading && !isUserLocationReady">
    <h1>Please wait</h1>
    <p>Loading your current location...</p>
  </div>
  <div
    class="map-container"
    ref="mapElement"
    v-show="!isLoading && isUserLocationReady"
  ></div>
  <div class="no-location" v-if="!isLoading && !isUserLocationReady">
    <h4>We can't get access to your location</h4>
  </div>
</template>

<script lang="ts" src="./MapComponent"></script>

<style lang="scss" scoped>
.loading-location {
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  color: white;
  background-color: rgba($color: #000000, $alpha: 0.8);

  z-index: 9999;
}

.map-container {
  position: fixed;

  width: 100vw;
  height: 100vh;
}
</style>
