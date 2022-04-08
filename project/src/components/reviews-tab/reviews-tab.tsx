import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchComments} from '../../store/api-action';
import ReviewCard from './review-card';


type ReviewsTabProps = {
  filmId: number;
};


function ReviewsTab({filmId}: ReviewsTabProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {comments} = useAppSelector((state) => state.comments);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { dispatch(fetchComments(filmId)); }, [filmId]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment, index) => index % 2 === 0 && <ReviewCard comment={comment} key={comment.id} />)}
      </div>
      {
        comments.length > 1 && (
          <div className="film-card__reviews-col">
            {comments.map((comment, index) => index % 2 === 1 && <ReviewCard comment={comment} key={comment.id} />)}
          </div>
        )
      }
    </div>
  );
}


export default ReviewsTab;
