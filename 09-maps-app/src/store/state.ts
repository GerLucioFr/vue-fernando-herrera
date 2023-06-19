import { MapState } from './map/state';
import { PlacesState } from './places/state';

export interface State {
  places: PlacesState;
  map: MapState;
}
