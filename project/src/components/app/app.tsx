import MainPage, { MainPageProps } from '../main-page/main-page';

type AppProps = {
  film: MainPageProps;
};

function App({film}: AppProps): JSX.Element {
  return <MainPage {...film} />;
}

export default App;
