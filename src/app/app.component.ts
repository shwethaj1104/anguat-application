import { Component, OnInit } from '@angular/core';
import { getData } from './data';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  rowData: any = [];
  public defaultColDef: any;
  public columnDefs: any;
  constructor(){}
  ngOnInit(){
    this.columnDefs = [
      { headerName: 'SI No', field: 'orderId', flex:1},
      { headerName: 'Ordered By', field: 'orderedBy'},
      { headerName: 'Account Type', field: 'account'},
      { headerName: 'Order Date', field: 'orderDate' },
      { headerName: 'Order Total', field: 'orderTotal' },
    ]
    this.defaultColDef = {
      sortable: true,
      minWidth: 100,
      resizable: true,
    };
    console.log(getData)
    this.rowData=getData
  }
}
