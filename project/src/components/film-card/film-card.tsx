import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FilmCardParameter} from '../../constants';
import {Film} from '../../types/film';
import PreviewPlayer from '../preview-player/preview-player';


type FilmCardProps = {
  film: Film;
  active: boolean;
  onHover: (id: number | null) => void;
};


function FilmCard({film, active, onHover}: FilmCardProps): JSX.Element {
  const {previewImage, previewVideoLink, name, id} = film;
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  const previewElement = active && isReady
    ? (
      <PreviewPlayer
        src={previewVideoLink}
        poster={previewImage}
        height={FilmCardParameter.Height}
      />
    ) : <img src={previewImage} alt={name} width={FilmCardParameter.Width} height={FilmCardParameter.Height} />;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (active) {
      timer = setTimeout(() => setIsReady(true), FilmCardParameter.PreviewVideoDelay);
    } else {
      setIsReady(false);
    }

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onClick={() => navigate(`/films/${id}`)}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="small-film-card__image">
        {previewElement}
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={`/films/${id}`} onClick={(evt) => evt.preventDefault()}>{name}</a>
      </h3>
    </article>
  );
}


export default FilmCard;
