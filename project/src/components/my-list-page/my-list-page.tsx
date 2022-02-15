import FilmCard from '../film-card/film-card';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import {LogoType} from '../../constants';


function MyListPage(): JSX.Element {
  const filmCards: JSX.Element[] = [];

  for (let i = 0; i < 9; ++i) {
    filmCards.push(
      <FilmCard
        imgSrc="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
        title="Fantastic Beasts: The Crimes of Grindelwald"
        key={i}
      />,
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo type={LogoType.Regular} />

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="/logout" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {filmCards}
        </div>
      </section>

      <Footer />
    </div>
  );
}


export default MyListPage;
