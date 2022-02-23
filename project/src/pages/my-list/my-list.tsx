import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {LogoStyle} from '../../constants';
import {Film} from '../../types/film';
import {LoggedInUser} from '../../types/user';

type MyListPageProps = {
  films: Film[];
  user: LoggedInUser;
};


function MyListPage({films, user}: MyListPageProps): JSX.Element {
  const favoriteFilms = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo type={LogoStyle.Regular} />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock user={user} />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}


export default MyListPage;
