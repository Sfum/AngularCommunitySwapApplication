import { Injectable } from '@angular/core';
import {Category} from "../models/category";
import {BehaviorSubject, catchError, combineLatest, EMPTY, forkJoin, map, of, shareReplay, switchMap, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PostService} from "./post.service";
import {Post} from "../models/post";
import {userComment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  MOCK_URL = 'assets/json/category-data.json';
  private postsJsonUrl = 'assets/json/post-data.json';
  private commentsJsonUrl = 'assets/json/comment-data.json';

  categories$ = this.httpClient
    .get<Category[]>(this.MOCK_URL)
    .pipe(tap((data) => console.log('Category: ', JSON.stringify)));

  constructor(private httpClient: HttpClient,
              private postService: PostService,
              ) {}

  public categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  categoryActionStream$ = combineLatest([
    this.postService.posts$,
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

  postsFiltered$ = combineLatest([
    this.categoryActionStream$,
    this.categories$,
  ]).pipe(
    switchMap(([_, categories]) => {
      return this.httpClient.get<Post[]>(this.postsJsonUrl).pipe(
        switchMap((posts) => {
          const postIds = posts.map((post) => post.id);
          return forkJoin(
            of(posts),
            this.httpClient.get<userComment[]>(this.commentsJsonUrl).pipe(
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
    }),
    shareReplay(1)
  );

categorySelected(selectedCategoryId: number) {
    this.categorySelectedSubject.next(+selectedCategoryId);
  }
}
