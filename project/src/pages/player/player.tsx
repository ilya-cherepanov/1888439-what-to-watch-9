import {MouseEventHandler, ReactEventHandler, useCallback, useEffect, useRef, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {formatTime, getProgressInPercents} from './utils';
import NotFoundPage from '../not-found/not-found';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFilm} from '../../store/api-action';
import Spinner from '../../components/spinner/spinner';
import {LoadingStatus}  from '../../constants';


function PlayerPage(): JSX.Element | null {
  const {currentFilm, currentFilmLoadingStatus} = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showSpinner, setShowSpinner] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentFilm === null) {
      dispatch(fetchFilm(Number(params.id)));
    }
  }, [currentFilm, params.id, dispatch]);

  const handleClickExit: MouseEventHandler<HTMLButtonElement> = useCallback((evt) => {
    evt.preventDefault();

    if (currentFilm !== null) {
      navigate(`/films/${currentFilm.id}`);
    }
  }, [currentFilm, navigate]);

  const handleTimeUpdate: ReactEventHandler<HTMLVideoElement> = useCallback((evt) => {
    const videoElement = evt.target as HTMLVideoElement;
    setCurrentTime(videoElement.currentTime);
  }, []);

  const handleClickPlay: MouseEventHandler<HTMLButtonElement> = useCallback((evt) => {
    evt.preventDefault();
    if (!videoRef.current) {
      return;
    }

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleClickFullscreen: MouseEventHandler<HTMLButtonElement> = useCallback((evt) => {
    evt.preventDefault();
    if (!playerRef.current) {
      return;
    }

    if (document.fullscreenElement === null) {
      playerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  if (currentFilmLoadingStatus === LoadingStatus.Error) {
    return <NotFoundPage />;
  }

  if (currentFilm === null) {
    return null;
  }

  const progressInPercents =
    videoRef.current === null ? 0 : getProgressInPercents(currentTime, videoRef.current.duration);

  return (
    <div className="player" ref={playerRef}>
      {showSpinner && <Spinner />}
      <video
        src={currentFilm.videoLink}
        className="player__video"
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(!isPlaying)}
        onWaiting={() => setShowSpinner(true)}
        onPlaying={() => setShowSpinner(false)}
      />

      <button type="button" className="player__exit" onClick={handleClickExit}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={String(progressInPercents)} max="100"></progress>
            <div className="player__toggler" style={{left: `${progressInPercents}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTime(currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleClickPlay}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.name}</div>

          <button type="button" className="player__full-screen" onClick={handleClickFullscreen}>
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
