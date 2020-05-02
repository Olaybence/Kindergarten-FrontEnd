import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MenuItemService {
    // Head elements (menuItems[i][0]) is the main menupoints
    // and the following point of the i. array are the subpoints of that menupoint (menuItems[i][1...n])
    menuItems: Array<Array<String>> = new Array<Array<String>>();

    constructor(private http: HttpClient) {
        let serverAnswer = this.http.get('http://localhost:8080/menu-items').subscribe((ans: String[][]) => {
            this.menuItems = ans;
        });
    }

    // GETTERS for the frontEnd

    getMenuItems() : Observable<String[][]> {
        // return this.menuItems;
        return this.http.get<Array<Array<String>>>('http://localhost:8080/menu-items');
    }

    getMenuItem(id: number) {
        return this.http.get<Array<String>>(`http://localhost:8080/menu-items/${id}`);
    }

    // Menu items ////////

    // Add
    addMenuItem(item: String) {
        this.menuItems.push(new Array(item));
    }

    // Update
    updateMenuItem(i: number, updated: String) {
        this.menuItems[0].splice(i, 1, updated);
    }

    // Delete
    deleteMenuItem(i: number) {
        this.menuItems.splice(i, 1);
    }

    // Submenu items ////////

    // Add
    addSubmenuItem(i: number, item: String) {
        this.menuItems[i].push(item);
    }

    // Update
    updateSubmenuItem(i: number, j: number, updated: String) {
        this.menuItems[i].splice(j + 1, 1, updated);
    }

    // Delete
    deleteSubmenuItem(i: number, j: number) {
        this.menuItems[i].splice(j + 1, 1);
    }
}