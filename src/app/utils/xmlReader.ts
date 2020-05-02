import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class XMLReader {
    public menuObj: any;
    public articlesObj: any;

    constructor(private _http: HttpClient) {
        this.loadXMLs();
    }

    loadXMLs() {
        this._http.get('/assets/xmls/menuItems.xml',
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'text/xml')
                    .append('Access-Control-Allow-Methods', 'GET')
                    .append('Access-Control-Allow-Origin', '*')
                    .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
                responseType: 'text'
            })
            .subscribe((data) => {
                this.menuObj = this.parseMenuXML(data);
            });

        this._http.get('/assets/xmls/articles.xml',
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'text/xml')
                    .append('Access-Control-Allow-Methods', 'GET')
                    .append('Access-Control-Allow-Origin', '*')
                    .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
                responseType: 'text'
            })
            .subscribe((data) => {
                this.articlesObj = this.parseArticlesXML(data);
            });
    }

    parseMenuXML(data) {
        return new Promise(resolve => {
            let k: string | number,
                arr = [],
                parser = new xml2js.Parser(
                    {
                        trim: true,
                        explicitArray: true
                    });
            console.log('parseMenuXML');
            console.log('k',k);
            console.log('arr',arr);
            console.log('parser',parser);
            parser.parseString(data, function (err, result) {
                let obj = result.menu;
                for (k in obj.item) {
                    let item = obj.item[k];
                    arr.push({
                        id: item.id[0],
                        title: item.title[0],
                        subitems: item.subitems[0],
                        articles: item.articles[0],
                        main: item.main[0]
                    });
                }
                resolve(arr);
            });
        });
    }

    parseArticlesXML(data) {
        return new Promise(resolve => {
            let k: string | number,
                arr = [],
                parser = new xml2js.Parser(
                    {
                        trim: true,
                        explicitArray: true
                    });
            console.log('parseArticlesXML');
            console.log('k',k);
            console.log('arr',arr);
            console.log('parser',parser);
            parser.parseString(data, function (err, result) {
                let obj = result.Employee;
                for (k in obj.emp) {
                    let item = obj.emp[k];
                    arr.push({
                        id: item.id[0],
                        title: item.title[0],
                        body: item.body[0],
                        links: item.links[0],
                        images: item.images[0]
                    });
                }
                resolve(arr);
            });
        });
    }
}