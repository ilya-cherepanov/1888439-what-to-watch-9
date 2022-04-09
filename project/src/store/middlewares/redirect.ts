import {Middleware} from 'redux';
import {browserHistory} from '../../services/browser-history';
import {rootReducer} from '../root-reducer';


type Reducer = ReturnType<typeof rootReducer>;


const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'redirectTo') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };


export {redirect};
