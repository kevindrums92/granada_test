import { Component, OnInit } from '@angular/core';
import { CtrGridViewComponent } from "app/shared/components/ctr-grid-view/ctr-grid-view.component";
import { ResultadoServicios } from "app/models/base/resultadoServicios";
import { UsuarioService } from "../../../../services/base/usuario.service";
import { GridViewDataSource } from "app/shared";
import { AsyncLoaderService } from "../../../../services/base/async-loader.service";
import { Usuario } from "app/models/base/usuario";
import { ModalCreateUserComponent } from "app/layout/seguridad/components";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers: [UsuarioService, AsyncLoaderService]
})
export class UsuarioComponent implements OnInit {

  public listUsuarios: GridViewDataSource;
  public loading: boolean;
  constructor(
    private _usuarioService: UsuarioService,
    private _asyncLoaderService: AsyncLoaderService
  ) {
  }

  getListUsuarios(query): any {
    this.loading = true;
    this._usuarioService.getPaginated(query).then((res) => {

      var datasource = new GridViewDataSource();
      datasource.data = res;
      datasource.count = res.length;
      this.listUsuarios = datasource;
      console.log(this.listUsuarios);
      this.loading = false;
    }).catch((res) => {
      this.loading = false;
    });
  }

  pageChange(query: any): void {
    this.getListUsuarios(query);
  }

  onItemAdded(item: Usuario): void {
    this.listUsuarios.data.unshift(item);
  }

  onItemEdited(item: Usuario): void {
    
    let index: number = this.listUsuarios.data.indexOf(this.listUsuarios.data.filter(function(it) {return it.id === item.id})[0]);
    this.listUsuarios.data[index] = item;
  }

  onDeleteClick(item: Usuario) {
    if (confirm('Estas seguro de que quieres eliminar a ' + item.name)) {
      let index: number = this.listUsuarios.data.indexOf(item);
      if (index !== -1) {
        this.listUsuarios.data.splice(index, 1);
      }
    }
  }

  onEditClick(item: Usuario, modal:ModalCreateUserComponent) {
    debugger;
    let duplicateObject = <Usuario> JSON.parse(JSON.stringify(item));
    modal.open(duplicateObject);
  }

  ngOnInit() {
    //this.getListUsuarios();
  }



}
