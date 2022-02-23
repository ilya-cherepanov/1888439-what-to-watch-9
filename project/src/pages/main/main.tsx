import {MouseEventHandler} from 'react';
import {useNavigate}  from 'react-router-dom';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {LogoStyle} from '../../constants';
import {Film} from '../../types/film';
import {LoggedInUser} from '../../types/user';


type MainPageProps = {
  films: Film[];
  user: LoggedInUser;
};


function MainPage({films, user}: MainPageProps): JSX.Element {
  const navigate = useNavigate();
  const promoFilm = films[0];

  const clickPlayHandler: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    navigate(`/player/${promoFilm.id}`);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo type={LogoStyle.Regular} />

          <UserBlock user={user} />
        </header>

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
                <button className="btn btn--play film-card__button" type="button" onClick={clickPlayHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog films={films} />

        <Footer />
      </div>
    </>
  );
}


export default MainPage;
