import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../models/post"
import {MatDialog} from "@angular/material/dialog";
import {PostComponent} from "../post.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent {

  constructor(public dialog: MatDialog,
              private router: Router) {}

  @Input() posts: Post | undefined;
  @Output() onAddToWishlistEvent = new EventEmitter<Post>()

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PostComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  addToWishlist(posts: Post) {
    this.onAddToWishlistEvent.emit(posts);
    this.router.navigate(['/wishlist'])

  }

}
