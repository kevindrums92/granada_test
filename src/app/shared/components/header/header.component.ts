import { Component, OnInit, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutComponent } from "app/layout/layout.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public parentComponent:LayoutComponent;

    constructor(private translate: TranslateService, private inj:Injector) {
        this.parentComponent = this.inj.get(LayoutComponent);
     }

    ngOnInit() {}

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('content_obj');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
