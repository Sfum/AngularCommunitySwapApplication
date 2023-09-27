import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../models/post";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent {

  constructor() {}

  panelOpenState = false;

  @Input()
  posts: Post | undefined;

}
