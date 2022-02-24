import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import {LogoStyle} from '../../constants';


function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo type={LogoStyle.Regular} />
      </header>

      <div style={{marginBottom: 40}}>
        <h1 className="page-title" style={{textAlign: 'center'}}>404 Not Found</h1>
      </div>

      <Footer />
    </div>
  );
}


export default NotFoundPage;
