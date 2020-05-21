import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/utils/article';
import { ActivatedRoute, Router } from '@angular/router';
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
  artId: number;

  constructor(private routeDir: Router,
              private router: ActivatedRoute,
              private maService: MainArticleService) {
    
    maService.getMainArticles(this.activePage).subscribe((ans: Array<Article>) => {
      this.mainArticles = ans;
      console.log("Main-articles from server",this.mainArticles);
    });
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      console.log('MainArticlesComponent ngOnInit',params);
      this.activePage = params.get('article');
      
      if(this.artId != null && this.artId != NaN) {
        this.maService.getMainArticleById(this.artId).subscribe((ans: Article) => {
          this.mainArticles = [ans];
        });
      } else {
        this.maService.getMainArticles(this.activePage).subscribe((ans: Array<Article>) => {
          this.mainArticles = ans;
        });
      }
    });
  }

  openArticle(i: number) {
    this.routeDir.navigate(['home','id',i]);
  }

}
