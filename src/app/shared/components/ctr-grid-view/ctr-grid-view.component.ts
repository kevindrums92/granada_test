import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { NgForm, FormControl, NgControl } from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-ctr-grid-view',
  templateUrl: './ctr-grid-view.component.html',
  styleUrls: ['./ctr-grid-view.component.scss']
})
export class CtrGridViewComponent implements OnInit {
    

  //variable que recibe la definición de las columnas del grid
  @Input() Columns: Array<GridViewColumn>;
  @Input() public DataSource: GridViewDataSource;
  @Input() public Loading: Boolean;
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteClick: EventEmitter<any> = new EventEmitter();
  @Output() onEditClick: EventEmitter<any> = new EventEmitter();

  currentColumn:GridViewColumn;

  promise:Promise<any>;
  modelChanged: Subject<string> = new Subject<string>();

  //Query
  public query: any = {
    page: 1,
    take: 5,
    orderBy: [],
    filterBy:[]
  };

  defaultPagination: number;
  advancedPagination: number;
  paginationSize: number;
  disabledPagination: number;
  isDisabled: boolean;
  constructor() {
    this.defaultPagination = 1;
    this.advancedPagination = 1;
    this.paginationSize = 1;
    this.disabledPagination = 1;
    this.isDisabled = true;

     this.promise = new Promise<any>((resolve, reject) => {
        setTimeout(resolve, 500);
      });
    this.modelChanged
      .debounceTime(500) // wait 300ms after the last event before emitting last event
      //.distinctUntilChanged() // only emit if value is different from previous value
      .subscribe((newValue) => {
        this.promise.then(() => {
          this.currentColumn.Filter = newValue;
          this.doFilter();
        })
      });
  }

  ngOnInit() {
    this.pageChange(1);
    // debounce keystroke events
  }

  getListData(): any {
    return (this.DataSource) ? this.DataSource.data : [];
  }

  canShowFilterRow(): Boolean {
    //return (this.DataSource && this.DataSource.data.length > 0 && this.Columns.filter(function (x) { return x.ColumnFilter; }).length > 0);
    return (this.Columns.filter(function (x) { return x.ColumnFilter; }).length > 0);
  }

  //se ejecuta cuando se cambia de pagina
  pageChange(number) {
    this.query.page = number;
    this.onPageChange.emit(this.query);
  }
  //Se ejecuta cuando se da click en alguna columna para ordenar
  orderByChange(column: GridViewColumn) {
    switch (column.OrderBy) {
      case "ASC":
        column.OrderBy = "DESC"
        break;
      case "DESC":
        column.OrderBy = ""
        break;

      default:
        column.OrderBy = "ASC"
        break;
    }
    if (column.OrderBy == "") {
      this.query.orderBy = this.query.orderBy.filter(function (item: GridViewColumn) { return item != column });
    } else {
      var col: Array<any> = this.query.orderBy.filter(function (item: GridViewColumn) { return item == column });
      if (col.length == 0) {
        this.query.orderBy.push(column);
      }
    }
    console.log(this.query);
    this.onPageChange.emit(this.query);
  }

  changedFilter(event, currentCol) {
    this.currentColumn = currentCol;
    this.modelChanged.next(event);
  }

  doFilter() {
    var colsWithFilters = this.Columns.filter(function (item: GridViewColumn) { return item.Filter });
    this.query.filterBy = colsWithFilters;
    console.log(this.query);
    this.onPageChange.emit(this.query);
  }

  getValueRowCell(itemRow: any, itemCel: GridViewColumn): string {
    var val = itemRow[itemCel.FieldName];
    if (itemCel.RepositoryItem)
      var v = itemCel.RepositoryItem.find(i => i.ValueMember == val.toString());
    if (v)
      return v.DisplayMember;
    else
      return val;
  }

  deleteItem(item:any):void{
    this.onDeleteClick.emit(item);
  }

  editItem(item:any):void{
    this.onEditClick.emit(item);
  }

}

//Entidad Poco de las columnas
export /**
 * Representa cada columna del gridView
 */
  class GridViewColumn {
  public FieldName: string;
  public Caption: string;
  public OrderBy: string;
  public ExcludeOrdering: Boolean;
  public ColumnFilter: Boolean;
  public Filter: string;
  public RepositoryItem: Array<RepositoryItem>;
}
export /**
  * RepositoryItem
  */
  class RepositoryItem {
  public DisplayMember: string;
  public ValueMember: string;
}

export /**
 * GridViewDataSource
 */
  class GridViewDataSource {
  public count: number;
  public data;
}
