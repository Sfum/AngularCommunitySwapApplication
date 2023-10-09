import {Component, NgZone} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {userComment} from "../../../models/comment";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent {
  postForm: FormGroup;
  asyncFilterPipe$ = this.postService.productsFiltered$

  constructor(private postService: PostService,
              public formBuilder: FormBuilder,
  ) {
    this.postForm = this.formBuilder.group({
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

  onSubmit(): any {
    this.postService.addPost(this.postForm.value).subscribe(
      () => {
        console.log('Post added successfully!');
      },

      (err) => {
        console.log('Post Error!');
        console.log(err);
      }
    );
  }
}

