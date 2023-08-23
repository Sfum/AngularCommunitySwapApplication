import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
