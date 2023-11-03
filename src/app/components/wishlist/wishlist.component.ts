import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";
import {WishlistService} from "../../services/wishlist.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit{
  posts: Post[] = [];
  posts$ = this.postService.postsFiltered$

  constructor(private wishlistService: WishlistService,
              private postService: PostService) {
  }
  ngOnInit() {
    this.wishlistService.loadCart();
    this.posts = this.wishlistService.getPost();
  }


  removeFromWishlist(post: Post) {
    this.wishlistService.removePost(post);
  }
}
