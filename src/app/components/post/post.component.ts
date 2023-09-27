import { Component } from '@angular/core';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {

  searchText: any

  constructor(private postService: PostService) {
  }
  posts$ = this.postService.productsFiltered$
}
