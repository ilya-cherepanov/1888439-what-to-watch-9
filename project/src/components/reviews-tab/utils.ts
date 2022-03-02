const formatDate = (date: Date): string => (
  date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
);


export {formatDate};
