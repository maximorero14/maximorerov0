import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArticleComponent} from './componets/article/article.component';
import { HomeComponent } from './componets/home/home.component';
import { BlogComponent } from './componets/blog/blog.component';
import { SimpleBlogComponent } from './componets/simple-blog/simple-blog.component';
import { MiniaturaBlogComponent } from './componets/miniatura-blog/miniatura-blog.component';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    BlogComponent,
    SimpleBlogComponent,
    MiniaturaBlogComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
