import {Routes, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import MyListPage from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film/film';
import AddReviewPage from '../../pages/add-review/add-review';
import PlayerPage from '../../pages/player/player';
import NotFoundPage from '../../pages/not-found/not-found';
import {AppRoute, AuthorizationStatus} from '../../constants';
import HistoryRouter from '../history-route/history-route';
import {browserHistory} from '../../services/browser-history';
import {useAppDispatch, useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import {useEffect} from 'react';
import {checkAuth, fetchFilms} from '../../store/api-action';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state.user);
  const {isFilmsLoaded} = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchFilms());
  }, [dispatch]);

  if (authorizationStatus === AuthorizationStatus.Unknown || !isFilmsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ToastContainer />
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<FilmPage />} />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <AddReviewPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player} element={<PlayerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </>
  );
}


export default App;
