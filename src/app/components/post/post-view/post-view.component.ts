import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {Post} from "../../../models/post";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.sass']
})
export class PostViewComponent implements OnInit {
  getId: any;
  post?: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
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

}
