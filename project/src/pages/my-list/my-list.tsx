import {useEffect} from 'react';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {LogoStyle} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavoriteFilms} from '../../store/api-action';
import {LoggedInUser} from '../../types/user';


function MyListPage(): JSX.Element {
  const {userInfo} = useAppSelector((state) => state.user);
  const {favoriteFilms} = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { dispatch(fetchFavoriteFilms((userInfo as LoggedInUser).id)); }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo type={LogoStyle.Regular} />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
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
