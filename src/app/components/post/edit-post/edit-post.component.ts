import {Component, NgZone} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.sass']
})
export class EditPostComponent {
  getId: any;
  updateForm: FormGroup;

  constructor(private postService: PostService,
              public formBuilder: FormBuilder,
              private router: Router,
              private ngZone: NgZone,
              private activatedRoute: ActivatedRoute,
  ) {

    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.postService.getPost(this.getId).subscribe((post) => {
      this.updateForm.patchValue({
        id: post['id'],
        post_name: post['post_name'],
        post_date: post['post_date'],
        post_body: post['post_body'],
        post_image: post['post_image'],
        post_categoryId: post['post_categoryId'],
        post_userId: post['post_userId'],
        userComments: post['userComments'],

      });
    });

    this.updateForm = this.formBuilder.group({
      id: [''],
      post_name: [''],
      post_date: [''],
      post_body: [''],
      post_image: [''],
      post_categoryId: [''],
      post_userId: [''],
      userComments: [''],
    });

  }

  onEditPost(): Observable<any> {
    return this.postService.updatePost(this.getId, this.updateForm.value);
  }

}
