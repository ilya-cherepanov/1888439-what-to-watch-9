import {useEffect} from 'react';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import PromoFilm from '../../components/promo-film/promo-film';
import UserBlock from '../../components/user-block/user-block';
import {LogoStyle} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchPromoFilm} from '../../store/api-action';


function MainPage(): JSX.Element {
  const {currentFilm} = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  useEffect(() => { dispatch(fetchPromoFilm()); }, [dispatch]);

  return (
    <>
      <section className="film-card">
        {currentFilm && (
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>
        )}

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo type={LogoStyle.Regular} />

          <UserBlock />
        </header>

        {currentFilm && <PromoFilm promoFilm={currentFilm} />}
      </section>

      <div className="page-content">
        <Catalog />

        <Footer />
      </div>
    </>
  );
}


export default MainPage;
