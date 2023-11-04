import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {Post} from "../../../models/post";
import { Location} from "@angular/common";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.sass']
})
export class PostViewComponent implements OnInit {
  getId: any;
  post?: Post;

  @Output() onAddToWishlistEvent: EventEmitter<Post> = new EventEmitter<Post>()

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    public location: Location
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.postService.getPost(id).subscribe((post) => {
        this.post = post;
      });
    }
  }

  onClickBack() {
    this.location.back()
  }

  addToWishlist(post: Post) {
    this.onAddToWishlistEvent.emit(post)
  }
}
