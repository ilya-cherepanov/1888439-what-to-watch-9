import {memo} from 'react';
import {Link} from 'react-router-dom';
import {LogoStyle, AppRoute} from '../../constants';


type LogoProps = {
  type: LogoStyle;
};


function Logo({type}: LogoProps): JSX.Element {
  const classModifier = type === LogoStyle.Light ? 'logo__link--light' : '';

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


export default memo(Logo);
