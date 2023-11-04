import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../../../models/post";
import {Router} from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.sass']
})
export class WishlistDetailComponent {


  @Input()  posts!: Post[];

  @Output() removeWishlistEvent: EventEmitter<Post> = new EventEmitter<Post>();

  constructor(
    public router: Router,
    public location: Location) {
  }

  removeFromWishlist(post: Post) {
    this.removeWishlistEvent.emit(post);
  }

  onClickBack() {
    this.location.back();
  }
}
