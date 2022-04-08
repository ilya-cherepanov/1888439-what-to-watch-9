import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants';
import {filmsData} from './slices/films-data';
import {userData} from './slices/user-data';
import {commentsData} from './slices/comments-data';


const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.Comments]: commentsData.reducer,
});


export {rootReducer};
