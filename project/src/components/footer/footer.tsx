import Logo from '../logo/logo';
import {LogoStyle} from '../../constants';
import {memo} from 'react';


function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo type={LogoStyle.Light} />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}


export default memo(Footer);
