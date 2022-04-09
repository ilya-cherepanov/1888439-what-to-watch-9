import {useCallback, useState} from 'react';
import {FilmDetailsTabs} from '../../constants';
import {Film} from '../../types/film';
import DetailsTab from '../details-tab/details-tab';
import OverviewTab from '../overview-tab/overview-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import TabSelector from '../tab-item/tab-item';


type FilmDetailsProps = {
  film: Film;
};


function FilmDetails({film}: FilmDetailsProps): JSX.Element | null {
  const [currentTab, setCurrentTab] = useState(FilmDetailsTabs.Overview);

  const handleTabClick = useCallback((selectedTab: string): void => {
    setCurrentTab(selectedTab as FilmDetailsTabs);
  }, []);

  const tabs = [FilmDetailsTabs.Overview, FilmDetailsTabs.Details, FilmDetailsTabs.Reviews];
  const tabSelectors = tabs.map((tab) => (
    <TabSelector
      containerClass="film-nav__item"
      linkClass="film-nav__link"
      content={tab}
      active={tab === currentTab}
      onClick={handleTabClick}
      key={tab}
    />
  ));

  let selectedTab: JSX.Element | null = null;
  switch (currentTab) {
    case FilmDetailsTabs.Overview:
      selectedTab = <OverviewTab film={film} />;
      break;
    case FilmDetailsTabs.Details:
      selectedTab = <DetailsTab film={film} />;
      break;
    case FilmDetailsTabs.Reviews:
      selectedTab = <ReviewsTab filmId={film.id} />;
      break;
  }

  return (
    <div className="film-card__info">
      <div className="film-card__poster film-card__poster--big">
        <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
      </div>

      <div className="film-card__desc">
        <nav className="film-nav film-card__nav">
          <ul className="film-nav__list">
            {tabSelectors}
          </ul>
        </nav>

        {selectedTab}

      </div>
    </div>
  );
}


export default FilmDetails;
