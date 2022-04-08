enum AppRoute {
  Main = '/',
  Login = '/login',
  Logout = '/logout',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}


enum APIRoute {
  Comments = '/comments',
  Films = '/films',
  Favorites = '/favorite',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
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


enum HTTPCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}


enum NameSpace {
  User = 'user',
  Films = 'films',
  Comments = 'comments',
}


enum LoadingStatus {
  Nothing = 'nothing',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}


enum FilmDetailsTabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}


enum ReviewFormRestrictions {
  MinRating = 0,
  MinReviewLength = 50,
  MaxReviewLength = 400,
}


const MAX_GENRES_COUNT = 9;

const FILMS_PER_STEP = 8;

const MAX_SIMILAR_FILMS = 4;

const ALL_GENRES_LABEL = 'All genres';


export {
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  LogoStyle,
  FilmCardParameter,
  HTTPCode,
  NameSpace,
  LoadingStatus,
  FilmDetailsTabs,
  ReviewFormRestrictions,
  MAX_GENRES_COUNT,
  FILMS_PER_STEP,
  MAX_SIMILAR_FILMS,
  ALL_GENRES_LABEL
};
