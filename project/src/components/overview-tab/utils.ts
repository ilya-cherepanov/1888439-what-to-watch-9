const formatRating = (score: number): string => {
  if (score >= 0 && score < 3) {
    return 'Bad';
  } else if (score >= 3 && score < 5) {
    return 'Normal';
  } else if (score >= 5 && score < 8) {
    return 'Good';
  } else if (score >= 8 && score < 10) {
    return 'Very good';
  } else if (score === 10) {
    return 'Awesome';
  }

  return '';
};


export {formatRating};
