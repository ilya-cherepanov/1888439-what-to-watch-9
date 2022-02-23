import {Comment} from '../types/comment';

const comments: Comment[] = [
  {
    id: 1,
    user: {
      id: 14,
      name: 'Corey',
    },
    rating: 1.6,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: new Date('2022-01-22T15:13:26.388Z'),
  },
  {
    id: 2,
    user: {
      id: 12,
      name: 'Isaac',
    },
    rating: 9.7,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: new Date('2022-02-05T15:13:26.388Z'),
  },
  {
    id: 3,
    user: {
      id: 16,
      name: 'Mollie',
    },
    rating: 9.7,
    comment: 'I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.',
    date: new Date('2022-02-13T15:13:26.388Z'),
  },
  {
    id: 4,
    user: {
      id: 12,
      name: 'Isaac',
    },
    rating: 6.5,
    comment: 'This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.',
    date: new Date('2022-01-23T15:13:26.388Z'),
  },
];


export {comments};
