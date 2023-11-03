import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() {}

  posts: any[] = [];

  addToWishlist(post: any) {
    if (!this.postInWishlist(post)) {
      post.quantity = 1;
      this.addProductToWishlist(post);
      this.posts = [...this.getPost()];
      post.in_wishlist = !post.in_wishlist;
    } else {
    }
  }
  getPost() {
    return this.posts;
  }
  addProductToWishlist(addedProduct: any) {
    this.posts.push(addedProduct);
    this.saveCart();
  }
  saveCart(): void {
    localStorage.setItem('wishlist_items', JSON.stringify(this.posts));
  }
  loadCart(): void {
    this.posts =
      JSON.parse(localStorage.getItem('wishlist_items') as any) || [];
  }
  postInWishlist(post: any): boolean {
    return this.posts.findIndex((x: any) => x.id === post.id) > -1;
  }
  removePost(post: any) {
    const index = this.posts.findIndex((x: any) => x.id === post.id);

    if (index > -1) {
      this.posts.splice(index, 1);
      this.saveCart();
    }
  }
}
