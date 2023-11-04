import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  filterField$: Observable<Category[]>;

  constructor(private postService: PostService,
              private categoryService: CategoryService) {

    this.filterField$ = this.categoryService.categories$;
  }

  optionCategorySelected(selectedCategoryId: number) {
    this.postService.categorySelected(selectedCategoryId);
  }
}
