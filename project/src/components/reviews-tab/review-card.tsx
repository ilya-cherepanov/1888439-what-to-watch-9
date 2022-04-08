import {Comment} from '../../types/comment';
import {formatDate} from './utils';


type ReviewCardProps = {
  comment: Comment;
};


function ReviewCard({comment}: ReviewCardProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date}>{formatDate(comment.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating.toFixed(1)}</div>
    </div>
  );
}


export default ReviewCard;
