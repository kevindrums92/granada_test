import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        return true;
        // if (localStorage.getItem('content_obj')) {
        //     return true;
        // }

        // this.router.navigate(['/login']);
        // return false;
    }
}
