import {useState} from 'react';
import StarRadio from './star-radio';


function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const starRadios: JSX.Element[] = Array(10);
  for (let i = 10; i >= 1; --i) {
    starRadios[10 - i] = (
      <StarRadio
        value={i}
        checked={i === rating}
        onChange={(value) => setRating(value)}
        key={i}
      />
    );
  }

  return (
    <form action="#" className="add-review__form">
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
          onChange={({target}) => setReviewText(target.value)}
          value={reviewText}
        >
        </textarea>

        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}


export default ReviewForm;
