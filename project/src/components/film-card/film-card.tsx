import {Link} from 'react-router-dom';
import {Film} from '../../types/film';


type FilmCardProps = {
  film: Film;
  active: boolean;
  onHover: (id: number | null) => void;
};


function FilmCard({film, active, onHover}: FilmCardProps): JSX.Element {
  const {previewImage, name, id} = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}


export default FilmCard;
