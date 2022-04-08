import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import {AppRoute, LogoStyle} from '../../constants';
import {Link} from 'react-router-dom';


function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo type={LogoStyle.Regular} />
      </header>

      <div style={{marginBottom: 40, textAlign: 'center'}}>
        <h1 className="page-title" style={{textAlign: 'center', marginBottom: 20}}>404 Not Found</h1>
        <Link to={AppRoute.Main} style={{color: '#dfcf77'}}>Go to main</Link>
      </div>

      <Footer />
    </div>
  );
}


export default NotFoundPage;
