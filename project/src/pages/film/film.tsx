import {MouseEventHandler, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from 'react-router-dom';
import FilmDetails from '../../components/film-details/film-details';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import MyListButton from '../../components/my-list-button/my-list-button';
import UserBlock from '../../components/user-block/user-block';
import {AuthorizationStatus, LoadingStatus, LogoStyle, MAX_SIMILAR_FILMS} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFilm, fetchSimilarFilms} from '../../store/api-action';
import NotFoundPage from '../not-found/not-found';


function FilmPage(): JSX.Element | null {
  const navigate = useNavigate();
  const params = useParams();
  const {currentFilm, currentFilmLoadingStatus, similarFilms} = useAppSelector((state) => state.films);
  const isUserAuthorized = useAppSelector((state) => state.user).authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();
  const filmId = Number(params.id);

  useEffect(() => {
    dispatch(fetchFilm(filmId));
    dispatch(fetchSimilarFilms(filmId));
  }, [filmId, dispatch]);

  if (currentFilmLoadingStatus === LoadingStatus.Error) {
    return <NotFoundPage />;
  }

  if (currentFilm === null) {
    return null;
  }

  const handleClickPlay: MouseEventHandler<HTMLButtonElement> = (evt) => {
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

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handleClickPlay}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {isUserAuthorized && <MyListButton film={currentFilm} />}
                {isUserAuthorized && <Link to={`/films/${currentFilm.id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <FilmDetails film={currentFilm} />
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms.slice(0, MAX_SIMILAR_FILMS)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
