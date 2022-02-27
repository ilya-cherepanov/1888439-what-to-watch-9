import {useState} from 'react';
import {MAX_GENRES_COUNT} from '../../constants';
import {Film} from '../../types/film';
import FilmList from '../film-list/film-list';
import GenreItem from './genre-item';
import {getTopGenres} from './utils';


type FilmListProps = {
  films: Film[]
};


function Catalog({films}: FilmListProps): JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState('All genres');

  const topGenres = getTopGenres(films, MAX_GENRES_COUNT);
  const genreItems: JSX.Element[] = ['All genres'].concat(topGenres).map((genre) => (
    <GenreItem
      genre={genre}
      active={genre === selectedGenre}
      onClick={(clickedGenre) => setSelectedGenre(clickedGenre)}
      key={genre}
    />
  ));

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {genreItems}
      </ul>

      <FilmList films={films} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}


export default Catalog;
