import { Component } from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
  posts: Post[] = [];

  constructor(private postService: PostService,
              private categoryService: CategoryService) {
  }

  posts$ = this.postService.productsFiltered$

}
