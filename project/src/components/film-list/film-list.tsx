import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';


type FilmListProps = {
  films: Film[];
};


function FilmList({films}: FilmListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard film={film} active={film.id === activeFilmId} key={film.id} onHover={setActiveFilmId} />)}
    </div>
  );
}


export default FilmList;
