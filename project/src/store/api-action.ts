import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AppRoute, AuthorizationStatus, LoadingStatus} from '../constants';
import {checkAuthErrorHandle, errorHandle, loginErrorHandle} from '../services/error-handle';
import {api, store} from '../store';
import {dropToken, getToken, saveToken} from '../services/token';
import {Comment, NewComment} from '../types/comment';
import {Film} from '../types/film';
import {AuthData, LoggedInUser} from '../types/user';
import {redirectTo} from './action';
import {setAuthorizationStatus, setUserInfo, resetErrorMessage} from './slices/user-data';
import {loadCurrentFilm, loadFilms, loadFavoriteFilms, loadSimilarFilms, setCurrentFilmLoaded} from './slices/films-data';
import {loadComments, setIsCommentSending} from './slices/comments-data';


const fetchFilms = createAsyncThunk('fetchFilms', async () => {
  try {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  } catch (error) {
    errorHandle(error);
  }
});


const fetchPromoFilm = createAsyncThunk('fetchPromoFilm', async () => {
  try {
    store.dispatch(setCurrentFilmLoaded(LoadingStatus.Loading));
    const {data} = await api.get<Film>(APIRoute.Promo);
    store.dispatch(loadCurrentFilm(data));
    store.dispatch(setCurrentFilmLoaded(LoadingStatus.Loaded));
  } catch (error) {
    store.dispatch(setCurrentFilmLoaded(LoadingStatus.Error));
    errorHandle(error);
  }
});


const fetchFilm = createAsyncThunk('fetchFilm', async (filmId: number) => {
  try {
    store.dispatch(setCurrentFilmLoaded(LoadingStatus.Loading));
    const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    store.dispatch(loadCurrentFilm(data));
    store.dispatch(setCurrentFilmLoaded(LoadingStatus.Loaded));
  } catch (error) {
    store.dispatch(setCurrentFilmLoaded(LoadingStatus.Error));
    errorHandle(error);
  }
});


const fetchSimilarFilms = createAsyncThunk('fetchSimilaFilms', async (filmId: number) => {
  try {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);
    store.dispatch(loadSimilarFilms(data));
  } catch (error) {
    errorHandle(error);
  }
});


const fetchFavoriteFilms = createAsyncThunk('fetchFavoriteFilms', async (userId: number) => {
  try {
    const {data} = await api.get<Film[]>(APIRoute.Favorites);
    store.dispatch(loadFavoriteFilms(data));
  } catch (error) {
    errorHandle(error);
  }
});


const fetchComments = createAsyncThunk('fetchComments', async (filmId: number) => {
  try {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${filmId}`);
    store.dispatch(loadComments(data));
  } catch (error) {
    errorHandle(error);
  }
});


const sendComment = createAsyncThunk('sendComment', async ({filmId, comment}: {filmId: number, comment: NewComment}) => {
  try {
    store.dispatch(setIsCommentSending(true));
    await api.post<Comment>(`${APIRoute.Comments}/${filmId}`, comment);
    store.dispatch(redirectTo(`/films/${filmId}`));
  } catch (error) {
    errorHandle(error);
  } finally {
    store.dispatch(setIsCommentSending(false));
  }
});


const setFavoriteStatus = createAsyncThunk('setFavoriteStatus', async ({filmId, status}: {filmId: number, status: boolean}) => {
  const intStatus = Number(status);
  try {
    const {data} = await api.post<Film>(`${APIRoute.Favorites}/${filmId}/${intStatus}`);
    store.dispatch(loadCurrentFilm(data));
  } catch (error) {
    errorHandle(error);
  }
});


const checkAuth = createAsyncThunk('checkAuth', async () => {
  if (!getToken()) {
    store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    return;
  }

  try {
    const {data} = await api.get(APIRoute.Login);
    store.dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    store.dispatch(setUserInfo(data));
  } catch (error) {
    store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    checkAuthErrorHandle(error);
  }
});


const loginAction = createAsyncThunk('login', async (credentials: AuthData) => {
  try {
    const {data} = await api.post<LoggedInUser>(APIRoute.Login, credentials);
    saveToken(data.token);
    store.dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    store.dispatch(setUserInfo(data));
    store.dispatch(redirectTo(AppRoute.Main));
    store.dispatch(resetErrorMessage());
  } catch (error) {
    loginErrorHandle(error);
    store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});


const logoutAction = createAsyncThunk('logout', async () => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    store.dispatch(setUserInfo(null));
  } catch (error) {
    errorHandle(error);
  }
});


export {
  fetchFilms,
  fetchPromoFilm,
  fetchFilm,
  fetchSimilarFilms,
  fetchFavoriteFilms,
  fetchComments,
  sendComment,
  setFavoriteStatus,
  checkAuth,
  loginAction,
  logoutAction
};
