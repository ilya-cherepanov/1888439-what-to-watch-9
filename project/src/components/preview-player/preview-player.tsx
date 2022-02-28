type PreviewPlayerProps = {
  src: string;
  height: string | number;
  poster: string;
};


function PreviewPlayer({src, height, poster}: PreviewPlayerProps): JSX.Element {
  return (
    <video src={src} height={height} poster={poster} loop autoPlay muted />
  );
}


export default PreviewPlayer;
