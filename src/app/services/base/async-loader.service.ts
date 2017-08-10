import { Injectable } from "@angular/core";

@Injectable()
export /**
 * UsuarioService
 */
    class AsyncLoaderService {

    constructor() {

    }
    asyncLoader(val: boolean) {
        const dom: Element = document.querySelector('#asyncLoader');
        if (val == true) {
            if (!dom.classList.contains('visible')) dom.classList.add('visible');
        } else {
            if (dom.classList.contains('visible')) dom.classList.remove('visible');
        }
    }
}