import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../models/category";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sidebar-detail',
  templateUrl: './sidebar-detail.component.html',
  styleUrls: ['./sidebar-detail.component.sass']
})
export class SidebarDetailComponent {

  @Input() filterField$?: Observable<Category[]>;
  @Output() categorySelectedEvent: EventEmitter<number> = new EventEmitter<number>();

  optionSupplierSelected(selectedCategoryId: number) {
    this.categorySelectedEvent.emit(selectedCategoryId);
  }
}
