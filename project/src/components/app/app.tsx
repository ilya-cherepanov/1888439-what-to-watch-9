import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import MyListPage from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film/film';
import AddReviewPage from '../../pages/add-review/add-review';
import PlayerPage from '../../pages/player/player';
import NotFoundPage from '../../pages/not-found/not-found';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {Film} from '../../types/film';
import {LoggedInUser} from '../../types/user';
import {Comment} from '../../types/comment';


type AppProps = {
  films: Film[];
  comments: Comment[];
  user: LoggedInUser;
};


function App({films, comments, user}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage films={films} user={user} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage films={films} user={user}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmPage films={films} comments={comments} user={user} />} />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <AddReviewPage films={films} user={user} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerPage films={films} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
