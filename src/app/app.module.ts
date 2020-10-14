import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArticleComponent} from './componets/article/article.component';
import { HomeComponent } from './componets/home/home.component';
import { BlogComponent } from './componets/blog/blog.component';
import { MiniaturaBlogComponent } from './componets/miniatura-blog/miniatura-blog.component';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { HeadComponent } from './componets/head/head.component';
import { FooterComponent } from './componets/footer/footer.component';
import { ExamplesComponent } from './componets/examples/examples.component';
import { SocialComponent } from './componets/social/social.component';
import { SingleBlogComponent } from './componets/single-blog/single-blog.component';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';
import { HeroeComponent } from './componets/heroe/heroe.component';
import { PortadaComponent } from './componets/portada/portada.component';
import { ArrocinComponent } from './blogs/arrocin/arrocin.component';
import { ArrocinGameComponent } from './blogs/arrocin-game/arrocin-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    BlogComponent,
    MiniaturaBlogComponent,
    NavBarComponent,
    HeadComponent,
    FooterComponent,
    ExamplesComponent,
    SocialComponent,
    SingleBlogComponent,
    PageNotFoundComponent,
    HeroeComponent,
    PortadaComponent,
    ArrocinComponent,
    ArrocinGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
