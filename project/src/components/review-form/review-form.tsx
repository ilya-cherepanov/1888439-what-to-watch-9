import {FormEventHandler, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {sendComment} from '../../store/api-action';
import {NewComment} from '../../types/comment';
import StarRadio from './star-radio';
import {validateReviewForm} from './utils';


type ReviewFormProps = {
  filmId: number;
};


function ReviewForm({filmId}: ReviewFormProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const dispatch = useAppDispatch();
  const {isCommentSending} = useAppSelector((state) => state.comments);

  const isValid = validateReviewForm(rating, reviewText);

  const starRadios: JSX.Element[] = Array(10);
  for (let i = 10; i >= 1; --i) {
    starRadios[10 - i] = (
      <StarRadio
        value={i}
        checked={i === rating}
        disabled={isCommentSending}
        onChange={(value) => setRating(value)}
        key={i}
      />
    );
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    const newComment: NewComment = {
      rating,
      comment: reviewText,
    };

    dispatch(sendComment({filmId, comment: newComment}));
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {starRadios}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          disabled={isCommentSending}
          onChange={({target}) => setReviewText(target.value)}
          value={reviewText}
        >
        </textarea>

        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isValid || isCommentSending}>Post</button>
        </div>

      </div>
    </form>
  );
}


export default ReviewForm;
