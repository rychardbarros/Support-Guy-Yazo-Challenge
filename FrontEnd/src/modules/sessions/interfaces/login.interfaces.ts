export interface IUser {
  user: User;
}

type User = {
  username: string;
  password: string;
  first_name: string;
  source_image: string;
};
