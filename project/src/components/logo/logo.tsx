import {Link} from 'react-router-dom';
import {LogoType, AppRoute} from '../../constants';


type LogoProps = {
  type: LogoType;
};


function Logo({type}: LogoProps): JSX.Element {
  const classModifier = type === LogoType.Light ? 'logo__link--light' : '';

  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={`logo__link ${classModifier}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}


export default Logo;
