import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/utils/article';
import { ActivatedRoute } from '@angular/router';
import { SideArticleService } from 'src/app/service/data/SideArticleService';

@Component({
  selector: 'app-side-articles',
  templateUrl: './side-articles.component.html',
  styleUrls: ['./side-articles.component.css'],
  providers: [ SideArticleService ]
})
export class SideArticlesComponent implements OnInit {
  sideArticles: Array<Article> = new Array<Article>();
  activePage: String;

  constructor(private route: ActivatedRoute,
              private saService: SideArticleService) {
    saService.getSideArticles().subscribe( (ans: Array<Article>) => {
      this.sideArticles = ans;
    });
    
    console.log("Side-articles from server", this.sideArticles);
  }

  ngOnInit(): void {
    this.activePage = this.route.snapshot.params['name']; // From the URL
  }

}
