import {Film} from '../../types/film';
import {formatRating} from './utils';


type OverviewTabProps = {
  film: Film;
};


function OverviewTab({film}: OverviewTabProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.toFixed(1).replace('.', ',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{formatRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')}</strong></p>
      </div>
    </>
  );
}


export default OverviewTab;
