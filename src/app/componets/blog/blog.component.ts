import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/entities/article.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
}
