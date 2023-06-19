import { MutationTree } from 'vuex';
import { MapState } from './state';
import mapboxgl from 'mapbox-gl';
import { Feature } from '@/interfaces';

export const mapsMutationsMethods = {
  setMap: 'setMap',
  setPlaceMarkers: 'setPlaceMarkers',
  setRoute: 'setRoute',
  setDuration: 'setDuration',
  setDistance: 'setDistance',
};

const mutation: MutationTree<MapState> = {
  setMap(state: MapState, map: mapboxgl.Map): void {
    state.map = map;
  },

  setPlaceMarkers(state: MapState, places: Feature[]): void {
    if (!state.map) {
      return;
    }

    state.markers.forEach((marker) => marker.remove());
    state.markers = [];

    for (const place of places) {
      const customPopup = new mapboxgl.Popup()
        .setLngLat(place.center)
        .setHTML(`<h4>${place.text}</h4>`);

      const customMarker = new mapboxgl.Marker()
        .setLngLat(place.center)
        .setPopup(customPopup)
        .addTo(state.map);

      state.markers.push(customMarker);
    }
    if (state.map?.getLayer('Route')) {
      state.map.removeLayer('Route');
      state.map.removeSource('Route');
      state.distance = undefined;
      state.duration = undefined;
    }
  },

  setRoute(state: MapState, coordinates: Array<[number, number]>): void {
    const start = coordinates[0];
    const end = coordinates[coordinates.length - 1];

    const bounds = new mapboxgl.LngLatBounds([...start, ...end]);
    for (const coord of coordinates) {
      bounds.extend(coord);
    }

    state.map?.fitBounds(bounds, {
      padding: 150,
    });

    const sourceData: mapboxgl.AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates,
            },
          },
        ],
      },
    };

    if (state.map?.getLayer('Route')) {
      state.map.removeLayer('Route');
      state.map.removeSource('Route');
    }

    state.map?.addSource('Route', sourceData);

    state.map?.addLayer({
      id: 'Route',
      type: 'line',
      source: 'Route',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': 'black',
        'line-width': 3,
      },
    });
  },

  setDuration(state: MapState, duration: number): void {
    state.duration = duration;
  },

  setDistance(state: MapState, distance: number): void {
    state.distance = distance;
  },
};

export default mutation;
