import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable, of, switchMap, tap} from "rxjs";
import {Post} from "../models/post";
import {userComment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class PostService  {

  private postsJsonUrl = 'assets/json/post-data.json';
  private commentsJsonUrl = 'assets/json/comment-data.json';

  constructor(private http: HttpClient) {}

  posts$ = this.http
    .get<Post[]>(this.postsJsonUrl)
    .pipe(tap((data) => console.log('Product: ', JSON.stringify)));

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsJsonUrl).pipe(
      switchMap((posts) => {
        const postIds = posts.map((post) => post.id);
        return forkJoin(
          of(posts),
          this.http.get<userComment[]>(this.commentsJsonUrl).pipe(
            map((userComments) =>
              userComments.filter((comment) => postIds.includes(comment.comment_postId))
            )
          )
        );
      }),
      map(([posts, userComments]) => {
        for (const post of posts) {
          post.userComments = userComments.filter((comment) => comment.comment_postId === post.id);
        }
        return posts;
      })
    );
  }
}
