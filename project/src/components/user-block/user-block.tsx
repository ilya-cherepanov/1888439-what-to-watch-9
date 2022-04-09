import {MouseEventHandler, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-action';


function UserBlock(): JSX.Element | null {
  const navigate = useNavigate();
  const {authorizationStatus, userInfo} = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleClickAvatar: MouseEventHandler<HTMLImageElement> = useCallback(() => {
    navigate('/mylist');
  }, [navigate]);


  const handleClickLogout: MouseEventHandler<HTMLAnchorElement> = useCallback((evt) => {
    evt.preventDefault();
    dispatch(logoutAction());
  }, [dispatch]);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return (
      <div className="user-block">
        <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
      </div>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={userInfo?.avatarUrl} alt="User avatar" width="63" height="63" onClick={handleClickAvatar} />
        </div>
      </li>
      <li className="user-block__item">
        <a href="/logout" className="user-block__link" onClick={handleClickLogout}>Sign out</a>
      </li>
    </ul>
  );
}


export default UserBlock;
