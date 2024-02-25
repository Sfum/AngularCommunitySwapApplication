import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import {
    BehaviorSubject,
    catchError,
    combineLatest,
    EMPTY,
    map,
    Observable,
    shareReplay,
    throwError
} from "rxjs";
import {Post} from "../models/post";
import {CategoryService} from "./category.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private categoryService: CategoryService,
              private firestore: AngularFirestore) {
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
  postsFiltered$ = combineLatest([
    this.categoryActionStream$,
    this.categoryService.categories$,
  ]).pipe(
    map(([post, categories]) =>
      post.map(
        (post) =>
          ({
            ...post,
            post_categoryId: categories.find((c) => post.post_categoryId === c.id)?.[
              'category_name'
              ],
          } as unknown as Post)
      )
    ),
    shareReplay(1)
  );


  categorySelected(selectedCategoryId: number) {
    this.categorySelectedSubject.next(+selectedCategoryId);
  }

  getPosts(): Observable<any[]> {
    return this.firestore.collection('posts').valueChanges();
  }

  addPost(post: Post): Promise<any> {
    return this.firestore.collection('posts').add(post);

  }

  getPost(id: string): Observable<any> {
    const productRef = this.firestore.collection('posts').doc<Post>(id);
    return productRef.valueChanges().pipe(
      catchError((error) => {
        console.error('Error getting post: ', error);
        return throwError('Something went wrong while fetching the post');
      })
    );
  }

  updatePost(id: string, post: Post): Observable<void> {
    return new Observable((observer) => {
      this.firestore.collection('posts').doc(id).update(post)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          console.error('Error updating product: ', error);
          observer.error('Something went wrong while updating the product');
        });
    });
  }

}
