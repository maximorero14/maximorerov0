import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  title = 'maximorero14';
  articles = [{
    id: 1,
    type: 'pepe'
  },
  {
    id: 2,
    type: 'jose'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  clickArticle(id: number){
    console.log('por diosss' + id);
  }
}
