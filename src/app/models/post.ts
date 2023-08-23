import {userComment} from "./comment";

export interface Post {
  id: number;
  post_name: string;
  post_date: string;
  post_userId: number;
  post_body: string;
  userComments: userComment[];

}
