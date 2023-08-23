import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/post";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent {
  panelOpenState = false;

  @Input()
  posts: Post | undefined;

}
