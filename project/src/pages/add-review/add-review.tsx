import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-block/user-block';
import {LogoStyle} from '../../constants';
import {Film} from '../../types/film';
import {LoggedInUser} from '../../types/user';
import NotFoundPage from '../not-found/not-found';


type AddReviewPageProps = {
  films: Film[];
  user: LoggedInUser;
};


function AddReviewPage({films, user}: AddReviewPageProps): JSX.Element {
  const params = useParams();
  const currentFilm = films.find((film) => film.id === Number(params.id));

  if (currentFilm === undefined) {
    return <NotFoundPage />;
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

          <UserBlock user={user} />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
}


export default AddReviewPage;
