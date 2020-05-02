export class MenuItem {
    public title: string;
    public reference: string;

    constructor(title: string, subItems: Array<string> = new Array<string>(), reference: string = "") {
        this.title = title;
        this.reference = reference;
        // console.log(this);
    }
}