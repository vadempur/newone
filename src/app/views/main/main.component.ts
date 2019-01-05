import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

private searchValue;
private colDefs;
private gridApi;
private gridColumnApi;
private paginationPageSize;
private paginationNumberFormatter;

  constructor(private http: HttpClient) { }
  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);


    



              ngOnInit() {
                this.colDefs= [{
                    headerName:"name",
                    field:"athlete",
                    width:150
                },
                {
                  headerName:"age",
                  field:"age",
                  width:150
              },
              {
                headerName:"year",
                field:"year",
                width:190
            },
            {
              headerName:"sport",
              field:"sport",
              width:210
          },
          {
            headerName:"gold",
            field:"gold",
            width:210
        },
        {
          headerName:"country",
          field:"country",
          width:210
      },
      {
        headerName:"silver",
        field:"silver",
        width:210
    },
    {
      headerName:"bronze",
      field:"bronze",
      width:210
  },
          ];

          this.paginationPageSize = 10;
          this.paginationNumberFormatter = function(params) {
            return "[" + params.value.toLocaleString() + "]";
          };
          

            } 
            onGridReady(params){
              this.gridApi=params.api;
              this.gridColumnApi=params.columnApi;
            this.http
            .get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json')
             .subscribe(data=>{
               params.api.setRowData(data);
             })
            }
            quickSearch() {
             this.gridApi.setQuickFilter(this.searchValue);
            }
            onPageSizeChanged(newPageSize) {
              var value = document.getElementById("page-size");
              this.gridApi.paginationSetPageSize(Number(value));
            }
          }
