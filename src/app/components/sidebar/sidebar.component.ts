import { Component } from '@angular/core';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  constructor(private postService: PostService) {}

  optionCategorySelected(selectedCategoryId: number) {
    return this.postService.categorySelected(selectedCategoryId)
  }
}
