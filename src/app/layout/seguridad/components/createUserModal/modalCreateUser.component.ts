import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormControl } from '@angular/forms';
import { Usuario } from "app/models/base/usuario";
import { UsuarioService } from "app/services/base/usuario.service";
import { AsyncLoaderService } from "app/services/base/async-loader.service";

@Component({
    selector: 'app-modal-create-user',
    templateUrl: './modalCreateUser.component.html',
    styleUrls: ['./modalCreateUser.component.scss']
})
export class ModalCreateUserComponent {
    closeResult: string;
    modalCreate: NgbModalRef;
    public user: Usuario;
    @Output() onItemAdded: EventEmitter<Usuario> = new EventEmitter();
    @Output() onItemEdited: EventEmitter<Usuario> = new EventEmitter();
    @ViewChild('content') content;

    constructor(private modalService: NgbModal,
        private _usuarioService: UsuarioService,
        private _asyncLoaderService: AsyncLoaderService) {
        this.user = new Usuario();
    }

    open(item?: Usuario) {
        debugger;
        var modalOptions: NgbModalOptions = {
            size: 'lg'
        };
        if (item) {
            this.user = item;
        }else{
            this.user = new Usuario();
        }
        this.modalCreate = this.modalService.open(this.content, modalOptions);
        this.modalCreate.result.then((result) => {
            debugger;
            if (result && result.id) {
                if (item) {
                    this.onItemEdited.emit(result);
                } else {
                    this.onItemAdded.emit(result);
                }
            }
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    onSubmit(frmUser: NgForm) {
        if (frmUser.invalid) {
            Object.keys(frmUser.controls).forEach(key => {
                frmUser.controls[key].markAsTouched();
            });
            return;
        }
        this._asyncLoaderService.asyncLoader(true);
        this._usuarioService.create(this.user).then((res) => {
            console.log(res);
            this._asyncLoaderService.asyncLoader(false);
            frmUser.reset();
            this.modalCreate.close(res);
        }).catch((res) => {
            this._asyncLoaderService.asyncLoader(false);
            frmUser.reset();
            this.modalCreate.close();

        });
        //guardar
    }
}
