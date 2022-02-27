import {MouseEventHandler} from 'react';
import {makeSlug} from './utils';


type GenreItemProps = {
  genre: string;
  active: boolean;
  onClick: (clickedGenre: string) => void
};


function GenreItem({genre, active, onClick}: GenreItemProps): JSX.Element {
  const clickHandler: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();

    onClick(genre);
  };

  return (
    <li className={`catalog__genres-item ${active ? 'catalog__genres-item--active' : ''}`}>
      <a href={`#${makeSlug(genre)}`} className="catalog__genres-link" onClick={clickHandler}>
        {genre}
      </a>
    </li>
  );
}


export default GenreItem;
