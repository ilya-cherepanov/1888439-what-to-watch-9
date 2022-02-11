import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {FILM} from './constants';


ReactDOM.render(
  <React.StrictMode>
    <App film={FILM} />
  </React.StrictMode>,
  document.getElementById('root'));
