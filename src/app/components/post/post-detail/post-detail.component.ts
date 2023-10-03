import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../models/post";
import {MatDialog} from "@angular/material/dialog";
import {PostComponent} from "../post.component";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent {

  constructor(public dialog: MatDialog) {}

  panelOpenState = false;

  @Input()
  posts: Post | undefined;

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PostComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
