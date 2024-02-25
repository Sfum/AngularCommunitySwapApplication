import {AfterViewInit, Component, NgZone, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MatSort} from "@angular/material/sort";
import {Post} from "../../../models/post";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.sass']
})
export class PostAdminComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'post_name',
    'post_date',
    'post_body',
    'post_categoryId',
    'post_userId',
    'edit'
  ];
  dataSource: any;
  getId: any;
  updateForm!: FormGroup;
  Posts: Post[] = [];
  posts: Post[] = [];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  vm$ = this.postService.postsFiltered$

  constructor(
      private postService: PostService,
      private router: Router,
      private ngZone: NgZone,
  ) {
    this.dataSource = new MatTableDataSource<Post>();
  }

  ngAfterViewInit() {
    this.loadProducts();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadProducts() {
    this.postService.getPosts().subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onUpdate(): any {
    this.postService
        .updatePost(this.getId, this.updateForm.value)
        .subscribe(
            () => {
              if (window.confirm('Update this selection?'))
                this.ngZone.run(() => this.router.navigateByUrl('/admin'));
            },
            (err) => {
              console.log(err);
            }
        );
  }
}
//
//   delete(id: any, i: any) {
//     console.log(id);
//     if (window.confirm('Do you want to go ahead?')) {
//       this.postService.deletePost(id).subscribe((res) => {
//         this.Posts.splice(i, 1);
//       });
//     }
//     this.ngZone.run(() => this.router.navigateByUrl('/admin'));
//   }
// }
