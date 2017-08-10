import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from "../models/base/usuario";
import { UsuarioService } from "../services/base/usuario.service";
import { ResultadoServicios } from "../models/base/resultadoServicios";
import { NgForm, FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers:[UsuarioService]
})
export class LoginComponent implements OnInit {

    public loginData:any = {
        uc:"USR_002",
        ps:"123",
    };

    public errorLogin:string;

    constructor(
        public router: Router,
        private _usuarioService:UsuarioService
    ) { }

    ngOnInit() { }

    onSubmit(frm:NgForm){
        if(frm.invalid) {
            Object.keys(frm.controls).forEach(key => {
                frm.controls[key].markAsTouched();
            });
            return; 
        }
        //proceso a hacer el login
        this.router.navigate(['dashboard']);
    }

}
