import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {HomeComponent} from './componets/home/home.component';
import {BlogComponent} from './componets/blog/blog.component';
import { ExamplesComponent } from './componets/examples/examples.component';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';
import { SingleBlogComponent } from './componets/single-blog/single-blog.component';
import { ArrocinComponent } from './blogs/arrocin/arrocin.component';
import { ArrocinGameComponent } from './blogs/arrocin-game/arrocin-game.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'single-blog/arrocin',
    component: ArrocinComponent
  },
  {
    path: 'example',
    component: ExamplesComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
