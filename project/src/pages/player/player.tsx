import {MouseEventHandler} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Film} from '../../types/film';
import {formatTime} from './utils';
import NotFoundPage from '../not-found/not-found';


type PlayerProps = {
  films: Film[];
};


function PlayerPage({films}: PlayerProps): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();

  const currentFilm = films.find((film) => film.id === Number(params.id));

  if (currentFilm === undefined) {
    return <NotFoundPage />;
  }

  const runtimeInSeconds = currentFilm.runTime * 60;

  const clickExitHandler: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    navigate(-1);
  };

  return (
    <div className="player">
      <video src={currentFilm.videoLink} className="player__video"></video>

      <button type="button" className="player__exit" onClick={clickExitHandler}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"></progress>
            <div className="player__toggler" style={{left: '0%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTime(runtimeInSeconds)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}


export default PlayerPage;
