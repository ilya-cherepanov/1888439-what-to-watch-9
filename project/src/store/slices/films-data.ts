import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, ALL_GENRES_LABEL, LoadingStatus} from '../../constants';
import {Film} from '../../types/film';
import {FilmData} from '../../types/state';


const initialState: FilmData = {
  films: [],
  selectedFilms: [],
  isFilmsLoaded: false,
  selectedGenre: ALL_GENRES_LABEL,
  currentFilm: null,
  currentFilmLoadingStatus: LoadingStatus.Nothing,
  similarFilms: [],
  favoriteFilms: [],
};


export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    loadFilms: (state, action: PayloadAction<Film[]>) => {
      state.films = action.payload;
      state.isFilmsLoaded = true;
    },

    resetGenre: (state) => {
      state.selectedGenre = ALL_GENRES_LABEL;
      state.selectedFilms = state.films;
    },

    selectGenre: (state, action: PayloadAction<{genre: string}>) => {
      state.selectedGenre = action.payload.genre;
      state.selectedFilms = state.films.filter((film) => {
        if (action.payload.genre === ALL_GENRES_LABEL) {
          return true;
        }

        return film.genre === action.payload.genre;
      });
    },

    loadCurrentFilm: (state, action: PayloadAction<Film>) => {
      state.currentFilm = action.payload;
    },

    setCurrentFilmLoaded: (state, action: PayloadAction<LoadingStatus>) => {
      state.currentFilmLoadingStatus = action.payload;
    },

    loadSimilarFilms: (state, action: PayloadAction<Film[]>) => {
      state.similarFilms = action.payload;
    },

    loadFavoriteFilms: (state, action: PayloadAction<Film[]>) => {
      state.favoriteFilms = action.payload;
    },
  },
});


export const {
  loadFilms,
  resetGenre,
  selectGenre,
  loadCurrentFilm,
  setCurrentFilmLoaded,
  loadSimilarFilms,
  loadFavoriteFilms,
} = filmsData.actions;
