import {MouseEventHandler} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../constants';
import {useAppSelector} from '../../hooks';
import {Film} from '../../types/film';
import MyListButton from '../my-list-button/my-list-button';

function PromoFilm({promoFilm}: {promoFilm: Film}): JSX.Element | null {
  const {authorizationStatus} = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClickPlay: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    navigate(`/player/${promoFilm.id}`);
  };

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{promoFilm.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{promoFilm.genre}</span>
            <span className="film-card__year">{promoFilm.released}</span>
          </p>

          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button" onClick={handleClickPlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            {authorizationStatus === AuthorizationStatus.Auth && <MyListButton film={promoFilm} />}
          </div>
        </div>
      </div>
    </div>
  );
}


export default PromoFilm;
