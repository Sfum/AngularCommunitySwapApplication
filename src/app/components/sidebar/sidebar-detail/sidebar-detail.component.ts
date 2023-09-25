import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../models/category";

@Component({
  selector: 'app-sidebar-detail',
  templateUrl: './sidebar-detail.component.html',
  styleUrls: ['./sidebar-detail.component.sass']
})
export class SidebarDetailComponent {

  @Output() categorySelectedEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private categoryService: CategoryService) {
  }
  optionSupplierSelected(selectedCategoryId: number) {
    this.categorySelectedEvent.emit(selectedCategoryId);
  }
  filterField$ = this.categoryService.categories$

}
