import {ReviewFormRestrictions} from '../../constants';


const validateReviewForm = (rating: number, reviewText: string): boolean => (
  rating > ReviewFormRestrictions.MinRating
    && reviewText.length > ReviewFormRestrictions.MinReviewLength
    && reviewText.length < ReviewFormRestrictions.MaxReviewLength
);


export {validateReviewForm};
