import {MouseEventHandler} from 'react';
import {useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setFavoriteStatus} from '../../store/api-action';
import {Film} from '../../types/film';


type MyListButtonProps = {
  film: Film;
};


function MyListButton({film}: MyListButtonProps) {
  const {authorizationStatus} = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();

    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }

    dispatch(setFavoriteStatus({filmId: film.id, status: !film.isFavorite}));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={film.isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}


export default MyListButton;
