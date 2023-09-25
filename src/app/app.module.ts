import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import { HeaderComponent } from './shared/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { SidebarDetailComponent } from './components/sidebar/sidebar-detail/sidebar-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarDetailComponent
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
