import { Injectable } from '@angular/core';

import { Article } from '../entities/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
    articles: Article[] = [{
        id: 'arrocin',
        category: 'informatica',
        title: 'Arrocin',
        img: '',
        description: 'lsandloasndlsandlkasndlkasldksanldas kldans lkdnasm dlosandasndljkasjd aslkdjnasljkodnlkasndlsa dlkasnlkdnsalodnalosknd aslkdnaklsndlkasndlkasndlkaslkd laskndlkjanslkdnaslkd aslkndlaskndlasd ,as',
        dateCrated: new Date(2016, 10, 30)
      }];


    getAllArticle(){
        return this.articles;
    }

    getArticle(id: string){
      return this.articles.find(item => id == item.id)
    }
}