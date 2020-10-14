import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Article} from '../../entities/article.model';
import { ArticlesService } from '../../servicies/articles.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html'
})

export class ArticleComponent {
    articles: Article[];
    constructor(
      private articlesService: ArticlesService){
    }
    @Input() article: Article;
    @Output() articleClicked: EventEmitter<string> = new EventEmitter();


    ngOnInit() {
      this.articles = this.articlesService.getAllArticle();
    }
}