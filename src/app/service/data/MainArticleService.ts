import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/utils/article';
import { Observable } from 'rxjs';

@Injectable()
export class MainArticleService {
    mainArticles: Array<Article> = new Array<Article>();

    constructor(private http: HttpClient) { }

    getMainArticles(page: String = "") : Observable<Array<Article>> {
        console.log('getMainArticles page',page);
        return this.http.get<Array<Article>>(`http://localhost:8080/main-articles/${page}`);
    }

    getMainArticleById(id: number) : Observable<Article> {
        return this.http.get<Article>(`http://localhost:8080/main-articles/${id}`);
    }
}