import {MouseEventHandler, useEffect, useState} from 'react';
import {ALL_GENRES_LABEL, FILMS_PER_STEP, MAX_GENRES_COUNT} from '../../constants';
import FilmList from '../film-list/film-list';
import TabSelector from '../tab-item/tab-item';
import {getTopGenres} from './utils';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {selectGenre, resetGenre} from '../../store/slices/films-data';


function Catalog(): JSX.Element {
  const [countFilms, setCountFilms] = useState(FILMS_PER_STEP);
  const {films, selectedGenre, selectedFilms} = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  useEffect(() => { dispatch(resetGenre()); }, [dispatch]);

  const topGenres = getTopGenres(films, MAX_GENRES_COUNT);
  const genreSelectors: JSX.Element[] = [ALL_GENRES_LABEL].concat(topGenres).map((genre) => (
    <TabSelector
      containerClass="catalog__genres-item"
      linkClass="catalog__genres-link"
      content={genre}
      active={genre === selectedGenre}
      onClick={(clickedGenre) => {
        dispatch(selectGenre({genre: clickedGenre}));
        setCountFilms(FILMS_PER_STEP);
      }}
      key={genre}
    />
  ));

  const handleClickMore: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();

    setCountFilms(countFilms + FILMS_PER_STEP);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {genreSelectors}
      </ul>

      <FilmList films={selectedFilms.slice(0, countFilms)} />

      {selectedFilms.length > countFilms && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleClickMore}>Show more</button>
        </div>
      )}
    </section>
  );
}


export default Catalog;
