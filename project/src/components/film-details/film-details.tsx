import {useState} from 'react';
import {Comment} from '../../types/comment';
import {Film} from '../../types/film';
import DetailsTab from '../details-tab/details-tab';
import OverviewTab from '../overview-tab/overview-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import TabItem from '../tab-item/tab-item';


type FilmDetailsProps = {
  film: Film;
  comments: Comment[];
};


function FilmDetails({film, comments}: FilmDetailsProps): JSX.Element {
  const [currentTab, setCurrentTab] = useState('Overview');

  const clickTabHandler = (selectedTab: string): void => {
    setCurrentTab(selectedTab);
  };

  const tabs = ['Overview', 'Details', 'Reviews'];
  const tabSelectors = tabs.map((tab) => (
    <TabItem
      containerClass="film-nav__item"
      linkClass="film-nav__link"
      content={tab}
      active={tab === currentTab}
      onClick={clickTabHandler}
      key={tab}
    />
  ));

  let selectedTab: JSX.Element | null = null;
  switch (currentTab) {
    case 'Overview':
      selectedTab = <OverviewTab film={film} />;
      break;
    case 'Details':
      selectedTab = <DetailsTab film={film} />;
      break;
    case 'Reviews':
      selectedTab = <ReviewsTab comments={comments} />;
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
