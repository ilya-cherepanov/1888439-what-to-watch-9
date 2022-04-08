import {
  AWESOME_RATING,
  BadRating,
  GoodRating,
  NormalRating,
  RatingName,
  VeryGoodRating
} from '../../constants';


const formatRating = (score: number): string => {
  if (score >= BadRating.From && score < BadRating.Before) {
    return RatingName.Bad;
  } else if (score >= NormalRating.From && score < NormalRating.Before) {
    return RatingName.Normal;
  } else if (score >= GoodRating.From && score < GoodRating.Before) {
    return RatingName.Good;
  } else if (score >= VeryGoodRating.From && score < VeryGoodRating.Before) {
    return RatingName.VeryGood;
  } else if (score === AWESOME_RATING) {
    return RatingName.Awesome;
  }

  return '';
};


export {formatRating};
