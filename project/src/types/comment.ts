import {User} from './user';


export type NewComment = {
  comment: string;
  rating: number;
};


export type Comment = NewComment & {
  date: Date;
  id: number;
  user: User;
};

