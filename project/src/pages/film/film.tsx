import {MouseEventHandler} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from 'react-router-dom';
import FilmDetails from '../../components/film-details/film-details';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {LogoStyle} from '../../constants';
import {Comment} from '../../types/comment';
import {Film} from '../../types/film';
import {LoggedInUser} from '../../types/user';
import NotFoundPage from '../not-found/not-found';


type FilmPageProps = {
  films: Film[];
  comments: Comment[];
  user: LoggedInUser;
};


function FilmPage({films, comments, user}: FilmPageProps): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const currentFilm = films.find((film) => film.id === Number(params.id));

  if (currentFilm === undefined) {
    return <NotFoundPage />;
  }

  const similarFilms = films.slice(0, 4);

  const clickPlayHandler: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    navigate(`/player/${currentFilm.id}`);
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo type={LogoStyle.Regular} />

            <UserBlock user={user} />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
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
                <Link to={`/films/${currentFilm.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <FilmDetails film={currentFilm} comments={comments} />
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
