import {Film} from '../../types/film';


const countGenres = (films: Film[]): Map<string, number> => {
  const genres = new Map<string, number>();

  for (const {genre} of films) {
    if (genres.has(genre)) {
      genres.set(genre, genres.get(genre) as number + 1);
    } else {
      genres.set(genre, 1);
    }
  }

  return genres;
};


const sortGenres = (genres: Map<string, number>): [string, number][] =>
  Array.from(genres).sort((lhs, rhs) => rhs[1] - lhs[1]);


const getTopGenres = (films: Film[], maxGenresCount = 9): string[] => {
  const countedGenres = countGenres(films);

  return sortGenres(countedGenres).map(([genre]) => genre).slice(0, maxGenresCount);
};


const makeSlug = (genre: string): string =>
  genre.trim().toLowerCase().replace(/ /g, '-').replace(/&/g, 'and');


export {getTopGenres, makeSlug};
