import {memo} from 'react';
import Spinner from '../spinner/spinner';


function LoadingScreen(): JSX.Element {
  return (
    <div style={{position: 'absolute', width: '100%', height: '100vh'}}>
      <Spinner />
    </div>
  );
}


export default memo(LoadingScreen);
