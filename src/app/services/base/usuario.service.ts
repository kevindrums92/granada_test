import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import { VariablesGlobales } from "../../global";
import { Usuario } from "../../models/base/usuario";
import { ResultadoServicios } from "../../models/base/resultadoServicios";
import { AsyncLoaderService } from "app/services/base/async-loader.service";

@Injectable()
export /**
 * UsuarioService
 */
class UsuarioService {
    private urlServicios:string;
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private _http:Http,private _asyncLoaderService: AsyncLoaderService) {
        this.urlServicios = VariablesGlobales.URL_BASE_API + "users";
        var objSesion = localStorage.getItem('content_obj');
        if (objSesion) {
            var objJsonSesion = JSON.parse(objSesion);
            this.headers.append("Content-St",objJsonSesion.content_st);
        }
        
    }

    private handleError(error: any): Promise<any> {
        //if(this._asyncLoaderService) this._asyncLoaderService.asyncLoader(false);
        console.error('Ha ocurrido un error: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getPaginated(data:any):Promise<Array<Usuario>>{
        return this._http.get(this.urlServicios,{
            headers:this.headers
        })
            .toPromise()
            .then((res:Response) => {
                var resultado = res.json() as Array<Usuario>;
                return resultado;
            })
            .catch(this.handleError)
    }

    create(photo:Usuario): Promise<Usuario> {
        return this._http
            .post(this.urlServicios, JSON.stringify(photo), {headers: this.headers})
            .toPromise()
            .then((res:Response) => {
                var resultado = res.json() as Usuario;
                return resultado;
            })
            .catch(this.handleError);
    }
}