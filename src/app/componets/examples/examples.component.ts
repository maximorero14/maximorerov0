import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

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
