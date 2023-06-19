import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { mapBoxToken } from '../token';

mapboxgl.accessToken = mapBoxToken;

if (!navigator.geolocation) {
  throw new Error('Geolocation is required');
}

createApp(App).use(store).use(router).mount('#app');
