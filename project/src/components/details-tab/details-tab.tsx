import {Film} from '../../types/film';
import {formatRunTime} from './utils';


type DetailsTabProps = {
  film: Film;
};


function DetailsTab({film}: DetailsTabProps): JSX.Element {
  const starring: (string | JSX.Element)[] = new Array(film.starring.length * 2 - 1);

  for (let i = 0; i < film.starring.length - 1; ++i) {
    starring[i * 2] = `${film.starring[i]}, `;
    starring[i * 2 + 1] = <br key={film.starring[i]} />;
  }
  starring[starring.length - 1] = film.starring[film.starring.length - 1];

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{formatRunTime(film.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
}


export default DetailsTab;
