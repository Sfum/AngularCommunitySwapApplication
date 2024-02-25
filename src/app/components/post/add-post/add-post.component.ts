import {Component} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent {
  postForm: FormGroup;
  asyncFilterPipe$ = this.postService.postsFiltered$

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

    // // @ts-ignore
    // this.postService.addPost(this.postForm.value).subscribe(
    //   () => {
    //     console.log('Post added successfully!');
    //   },
    //     // @ts-ignore
    //   (err) => {
    //     console.log('Post Error!');
    //     console.log(err);
    //   }
    // );
  }
}

