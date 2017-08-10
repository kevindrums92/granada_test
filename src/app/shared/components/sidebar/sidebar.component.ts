import { Component, Injector } from '@angular/core';
import { LayoutComponent } from "app/layout/layout.component";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive = false;
    showMenu = '';

    public parentComponent:LayoutComponent;
    
    constructor(private inj:Injector){
        this.parentComponent = this.inj.get(LayoutComponent);
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
