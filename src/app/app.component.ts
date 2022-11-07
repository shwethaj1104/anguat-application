import { Component, OnInit } from '@angular/core';
import { getData } from './data';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rowData: any = [];
  public defaultColDef: any;
  public columnDefs: any;
  showSideBar: boolean = false;
  constructor() { }
  ngOnInit() {

    this.columnDefs = [
      { headerName: 'SI No', field: 'orderId' },
      { headerName: 'Ordered By', field: 'orderedBy' },
      { headerName: 'Account Type', field: 'account' },
      { headerName: 'Order Date', field: 'orderDate' },
      { headerName: 'Order Total', field: 'orderTotal' },
    ]

    this.defaultColDef = {
      sortable: true,
      resizable: true,
      flex: 1,
      filter: true
    };

    this.rowData = getData

  }
  showSidebar() {
    this.showSideBar = true
    const ele = document.querySelector<HTMLElement>(".container-header")!;
    if (ele.style.display === "none") {
      ele.style.display = "block"
    } else {
      ele.style.display = "none"
    }
  }
}
