import {MouseEventHandler, useCallback} from 'react';
import {useAppDispatch} from '../../hooks';
import {setFavoriteStatus} from '../../store/api-action';
import {Film} from '../../types/film';


type MyListButtonProps = {
  film: Film;
};


function MyListButton({film}: MyListButtonProps) {
  const dispatch = useAppDispatch();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((evt) => {
    evt.preventDefault();
    dispatch(setFavoriteStatus({filmId: film.id, status: !film.isFavorite}));
  }, [film.id, film.isFavorite, dispatch]);

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
