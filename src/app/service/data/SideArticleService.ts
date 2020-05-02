import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'src/app/utils/menuItem';
import { Article } from 'src/app/utils/article';
import { Observable } from 'rxjs';

@Injectable()
export class SideArticleService {
    sideArticles: Array<Article> = new Array<Article>();

    constructor(private http: HttpClient) { }
    
    getSideArticles() : Observable<Array<Article>> {
        return this.http.get<Array<Article>>('http://localhost:8080/side-articles');
    }

    getSideArticle(id: number) : Observable<Article> {
        return this.http.get<Article>(`http://localhost:8080/side-articles/${id}`);
    }
}