import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/utils/article';
import { ActivatedRoute } from '@angular/router';
import { MainArticleService } from 'src/app/service/data/MainArticleService';

@Component({
  selector: 'app-main-articles',
  templateUrl: './main-articles.component.html',
  styleUrls: ['./main-articles.component.css'],
  providers: [ MainArticleService ]
})
export class MainArticlesComponent implements OnInit {
  mainArticles: Array<Article> = new Array<Article>();
  activePage: String;

  constructor(private router: ActivatedRoute,
              private maService: MainArticleService) {
    this.activePage = this.router.snapshot.paramMap.get('article');
    maService.getMainArticles(this.activePage).subscribe((ans: Array<Article>) => {
      this.mainArticles = ans;
      console.log("Main-articles from server",this.mainArticles);
    });
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.activePage = params.get('article');
      this.maService.getMainArticles(this.activePage).subscribe((ans: Array<Article>) => {
        this.mainArticles = ans;
      });
    });
  }

}
