import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Article} from '../../entities/article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html'
})

export class ArticleComponent {
    @Input() article: Article;
    @Output() articleClicked: EventEmitter<number> = new EventEmitter();

    showId(){
        console.log(this.article.id);
        this.articleClicked.emit(this.article.id);
    }
}