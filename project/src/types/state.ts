import {store} from '../store';
import {Film} from './film';
import {AuthorizationStatus, LoadingStatus} from '../constants';
import {Comment} from './comment';
import {LoggedInUser} from './user';


export type State = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;


export type CommentsData = {
  comments: Comment[];
  isCommentSending: boolean;
};


export type FilmData = {
  films: Film[];
  isFilmsLoaded: boolean;
  selectedFilms: Film[]
  selectedGenre: string;
  currentFilm: Film | null;
  currentFilmLoadingStatus: LoadingStatus;
  similarFilms: Film[];
  favoriteFilms: Film[];
};


export type UserData = {
  authorizationStatus: AuthorizationStatus;
  userInfo: LoggedInUser | null;
  serverErrorMessage: string;
};
