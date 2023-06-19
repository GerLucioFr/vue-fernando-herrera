export interface NavigationResponse {
  routes: Route[];
  waypoints: Waypoint[];
  code: string;
  uuid: string;
}

export interface Route {
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
  legs: Leg[];
  geometry: GeometryNavigation;
}

export interface GeometryNavigation {
  coordinates: Array<[number, number]>;
  type: Type;
}

export enum Type {
  LineString = 'LineString',
}

export interface Leg {
  via_waypoints: any[];
  admins: Admin[];
  weight: number;
  duration: number;
  steps: Step[];
  distance: number;
  summary: string;
}

export interface Admin {
  iso_3166_1_alpha3: string;
  iso_3166_1: string;
}

export interface Step {
  intersections: Intersection[];
  maneuver: Maneuver;
  name: string;
  duration: number;
  distance: number;
  driving_side: DrivingSide;
  weight: number;
  mode: Mode;
  geometry: GeometryNavigation;
  ref?: string;
  destinations?: string;
}

export enum DrivingSide {
  Left = 'left',
  Right = 'right',
  SlightRight = 'slight right',
  Straight = 'straight',
}

export interface Intersection {
  bearings: number[];
  entry: boolean[];
  mapbox_streets_v8?: MapboxStreetsV8;
  is_urban?: boolean;
  admin_index: number;
  out?: number;
  geometry_index: number;
  location: number[];
  in?: number;
  turn_weight?: number;
  turn_duration?: number;
  duration?: number;
  weight?: number;
  railway_crossing?: boolean;
  stop_sign?: boolean;
  lanes?: Lane[];
  classes?: Class[];
  traffic_signal?: boolean;
}

export enum Class {
  Motorway = 'motorway',
  Primary = 'primary',
  PrimaryLink = 'primary_link',
  Secondary = 'secondary',
  SecondaryLink = 'secondary_link',
  Service = 'service',
  Street = 'street',
  TertiaryLink = 'tertiary_link',
  Trunk = 'trunk',
  TrunkLink = 'trunk_link',
}

export interface Lane {
  indications: DrivingSide[];
  valid_indication?: DrivingSide;
  valid: boolean;
  active: boolean;
}

export interface MapboxStreetsV8 {
  class: Class;
}

export interface Maneuver {
  type: string;
  instruction: string;
  bearing_after: number;
  bearing_before: number;
  location: number[];
  modifier?: DrivingSide;
}

export enum Mode {
  Driving = 'driving',
}

export interface Waypoint {
  distance: number;
  name: string;
  location: number[];
}
