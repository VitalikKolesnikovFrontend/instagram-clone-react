export interface Post {
  id: number;
  content: string;
  createdAt: string;
  postImg: string;
  updatedAt: null;
  user: User;
}
export interface User {
  username: string;
}
