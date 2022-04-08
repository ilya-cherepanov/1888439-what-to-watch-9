import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import App from './components/app/app';
// import {films} from './mocks/films';
// import {comments} from './mocks/comments';
// import {loggedInUser} from './mocks/user';
import {store} from './store';
import {checkAuth, fetchFilms} from './store/api-action';
import 'react-toastify/dist/ReactToastify.css';


store.dispatch(checkAuth());
store.dispatch(fetchFilms());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
