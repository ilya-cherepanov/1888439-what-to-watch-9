export type User = {
  id: number;
  name: string;
};


export type LoggedInUser = User & {
  avatarUrl: string;
  email: string;
  token: string;
};
