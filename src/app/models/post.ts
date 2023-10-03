import {userComment} from "./comment";

export interface Post {
  id: number;
  post_name: string;
  post_date: string;
  post_body: string;
  post_image: string,
  post_categoryId: number,
  post_userId: number,
  userComments: userComment[];
}
