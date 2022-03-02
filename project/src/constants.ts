enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}


enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


enum LogoStyle {
  Regular = 'REGULAR',
  Light = 'LIGHT',
}


enum FilmCardParameter {
  Width = '280',
  Height = '175',
  PreviewVideoDelay = 1000,
}


const MAX_GENRES_COUNT = 9;


export {
  AppRoute,
  AuthorizationStatus,
  LogoStyle,
  FilmCardParameter,
  MAX_GENRES_COUNT
};
