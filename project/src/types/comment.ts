import {User} from './user';


export type NewComment = {
  comment: string;
  rating: number;
};


export type Comment = NewComment & {
  date: string;
  id: number;
  user: User;
};

