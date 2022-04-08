import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-block/user-block';
import {LoadingStatus, LogoStyle} from '../../constants';
import {useAppDispatch, useAppSelector}  from '../../hooks';
import {fetchFilm} from '../../store/api-action';
import NotFoundPage from '../not-found/not-found';


function AddReviewPage(): JSX.Element | null {
  const {currentFilm, currentFilmLoadingStatus} = useAppSelector((store) => store.films);
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentFilm === null) {
      dispatch(fetchFilm(Number(params.id)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (currentFilmLoadingStatus === LoadingStatus.Error) {
    return <NotFoundPage />;
  }

  if (currentFilm === null) {
    return null;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo type={LogoStyle.Regular} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentFilm.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm filmId={currentFilm.id}/>
      </div>

    </section>
  );
}


export default AddReviewPage;
