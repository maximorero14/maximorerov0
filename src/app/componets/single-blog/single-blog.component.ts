import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Article} from '../../entities/article.model';
import { ArticlesService } from '../../servicies/articles.service';
@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.article = this.articlesService.getArticle(id);
      console.log(this.article);
    });
  }

}
