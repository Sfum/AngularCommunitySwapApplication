import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  EMPTY,
  forkJoin,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
  tap
} from "rxjs";
import {Post} from "../models/post";
import {userComment} from "../models/comment";
import {CategoryService} from "./category.service";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsJsonUrl = 'http://localhost:8000';
  private commentsJsonUrl = 'http://localhost:8000/comment';

  constructor(private http: HttpClient,
              private categoryService: CategoryService,
              private userService: UserService) {
  }

  public categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  categoryActionStream$ = combineLatest([
    this.getPosts(),
    this.categorySelectedAction$,
  ]).pipe(
    map(([posts, selectedCategoryId]) =>
      posts.filter((post) =>
        selectedCategoryId ? post.post_categoryId == selectedCategoryId : true
      )
    ),
    catchError((err) => {
      return EMPTY;
    })
  );
  productsFiltered$ = combineLatest([
    this.categoryActionStream$,
    this.categoryService.categories$,
    this.userService.users$
  ]).pipe(
    map(([post, categories, users]) =>
      post.map(
        (post) =>
          ({
            ...post,
            post_categoryId: categories.find((c) => post.post_categoryId === c.id)?.[
              'category_name'
              ],
            post_userId: users.find((u) => post.post_userId === u.id)?.[
              'user_name'
              ],
          } as unknown as Post)
      )
    ),
    shareReplay(1)
  );

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
  categorySelected(selectedCategoryId: number) {
    this.categorySelectedSubject.next(+selectedCategoryId);
  }
}
