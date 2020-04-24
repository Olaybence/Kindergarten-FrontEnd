import { Injectable } from "@angular/core";


@Injectable()
export class Globals {
    adminMode : number = 0;
    userMode : number = 1;
    
    mode : number = this.adminMode;
}