import Logo from '../logo/logo';
import {LogoType} from '../../constants';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo type={LogoType.Light} />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}


export default Footer;
