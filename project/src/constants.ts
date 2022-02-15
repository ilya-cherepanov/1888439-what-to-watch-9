const FILM = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseYear: 2014,
  posterSrc: 'img/the-grand-budapest-hotel-poster.jpg',
};


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


enum LogoType {
  Regular = 'regular',
  Light = 'light',
}


export {FILM, AppRoute, AuthorizationStatus, LogoType};
