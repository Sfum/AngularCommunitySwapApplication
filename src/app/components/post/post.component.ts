import {ChangeDetectionStrategy, Component, NgZone} from '@angular/core';
import {PostService} from "../../services/post.service";
import {map} from "rxjs";
import {Post} from "../../models/post";
import {WishlistService} from "../../services/wishlist.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent {
  Posts: any = [];

  searchText: any

  constructor(private postService: PostService,
              private wishlistService: WishlistService) {
    this.posts$ = this.postService.postsFiltered$.pipe(
      map(posts => posts.sort((a, b) => b.id - a.id))
    );
  }

  posts$ = this.postService.postsFiltered$

  OnDeletePost(post: Post, i: number) {
    console.log(post);
    if (window.confirm('Are you sure?')) {
      this.postService.deletePost(post).subscribe((res) => {

        this.posts$ = this.posts$.pipe(
          map(posts => posts.filter(p => p !== post))
        );
      });
    }
  }

  onAddToWishlist(posts: Post) {
   this.wishlistService.addToWishlist(posts)
  }

}
