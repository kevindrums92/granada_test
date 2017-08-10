import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule,
    NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";

import { StatModule } from '../../shared';
import { SeguridadRoutingModule } from "app/layout/seguridad/seguridad-routing.module";
import { PageHeaderModule } from "app/shared/modules";
import { UsuarioComponent, ModalCreateUserComponent } from "./components";
import { CtrGridViewComponent } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        SeguridadRoutingModule,
        StatModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [
        CtrGridViewComponent,
        UsuarioComponent,
        ModalCreateUserComponent
    ]
})
export class SeguridadModule { }
