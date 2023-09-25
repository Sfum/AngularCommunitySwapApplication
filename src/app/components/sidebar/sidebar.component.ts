import { Component } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  constructor(private categoryService: CategoryService) {}

  optionCategorySelected(selectedCategoryId: number) {
    return this.categoryService.categorySelected(selectedCategoryId)
  }

}
