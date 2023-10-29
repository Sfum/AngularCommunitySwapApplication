import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PostComponent} from "./components/post/post.component";
import {PostDetailComponent} from "./components/post/post-detail/post-detail.component";
import {PostViewComponent} from "./components/post/post-view/post-view.component";
import {EditPostComponent} from "./components/post/edit-post/edit-post.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts'},
  // { path: 'posts',
  //     loadChildren: () =>import('./components/post-card/post-card.module').then(x => x.PostCardModule)
  // },
  // { path: 'products/:id', component: PostsViewCardComponent},

  {path: 'posts', component: PostComponent},
  {path: 'posts/edit/:id', component: EditPostComponent},
  {path: 'posts/post-view/:id', component: PostViewComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule {
}
