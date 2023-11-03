import {Component, Input} from '@angular/core';
import {Post} from "../../../models/post";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.sass']
})
export class PostCommentComponent {

  @Input() posts: Post | undefined;

  panelOpenState = false;
}
