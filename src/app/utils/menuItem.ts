export class MenuItem {
    public title: string;
    public reference: string;
    public subItems: Array<MenuItem>;

    constructor(title: string, subItems: Array<string> = new Array<string>(), reference: string = "") {
        this.title = title;
        this.subItems = new Array<MenuItem>();
        for(let i = 0; i < subItems.length; i++) {
            this.subItems.push(new MenuItem(subItems[i]) );
        }
        this.reference = reference;
    }

    createMenu(obj: any) {
        
    }
}