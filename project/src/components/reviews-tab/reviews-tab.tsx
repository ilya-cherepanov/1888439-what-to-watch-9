import {Comment} from '../../types/comment';
import ReviewCard from './review-card';


type ReviewsTabProps = {
  comments: Comment[];
};


function ReviewsTab({comments}: ReviewsTabProps): JSX.Element {
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
