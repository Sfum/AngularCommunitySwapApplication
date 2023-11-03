import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailComponent} from './components/post/post-detail/post-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import {HeaderComponent} from './shared/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {SidebarDetailComponent} from './components/sidebar/sidebar-detail/sidebar-detail.component';

import {FilterPipe} from './directives/text-filter.directive';
import {MatSidenavModule} from '@angular/material/sidenav';

import {SidebarNavComponent} from "./shared/sidebar/sidebar.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import { AddPostComponent } from './components/post/add-post/add-post.component';

import {AppRoutingModule} from "./app.routing-module";
import {RouterLink, RouterOutlet} from "@angular/router";
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { PostViewComponent } from './components/post/post-view/post-view.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PostAdminComponent } from './components/post/post-admin/post-admin.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import { PostCommentComponent } from './components/post/post-comment/post-comment.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishlistDetailComponent } from './components/wishlist/wishlist-detail/wishlist-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarDetailComponent,
    FilterPipe,
    SidebarNavComponent,
    AddPostComponent,
    EditPostComponent,
    PostViewComponent,
    RegisterComponent,
    LoginComponent,
    PostAdminComponent,
    PostCommentComponent,
    WishlistComponent,
    WishlistDetailComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
