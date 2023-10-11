import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PostComponent} from "./components/post/post.component";
import {PostDetailComponent} from "./components/post/post-detail/post-detail.component";
import {PostViewComponent} from "./components/post/post-view/post-view.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts'},
  // { path: 'posts',
  //     loadChildren: () =>import('./components/post-card/post-card.module').then(x => x.PostCardModule)
  // },
  //

  // { path: 'products/:id', component: PostsViewCardComponent},

  {path: 'posts', component: PostComponent},
  {path: 'posts/:id', component: PostViewComponent},

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
