import {Component, OnInit} from '@angular/core';
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit{
  panelOpenState = false;
  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
