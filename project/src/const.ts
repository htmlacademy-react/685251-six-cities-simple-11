export const ratingTitles = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
];

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export enum AppRoute {
  Main = '/',
  MainEmpty = '/no-offers',
  Login = '/login',
  Room = '/offer/:id',
  NotFound = '*'
}

export enum APIRoute {
  Hotels = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortTypes {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export const enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export type City = {
  name: CityName;
  location: {
    latitude: number;
      longitude: number;
      zoom: number;
  };
}
export const cities: City[] = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
    name: CityName.Paris,
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
    name: CityName.Cologne,
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 10,
    },
    name: CityName.Brussels,
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: CityName.Amsterdam,
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
    name: CityName.Hamburg,
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
    name: CityName.Dusseldorf,
  },
];

export const START_CITY = cities[0];
export const SELECT_CARD_DEFAULT = 1;
export const TOKEN_DEFAULT = 'x-token';
export const MAX_OFFER_IMAGES_COUNT = 6;
export const MAX_REVIEW_COUNT = 10;
export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;
