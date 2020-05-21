export class Article {
    public title: string;
    public content: string;
    public id: number;

    constructor(id: number, title: string, content: string = "") {
        this.title = title;
        this.content = content;
        this.id = id;
    }
}