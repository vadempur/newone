import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
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
@ViewChild('pagesize')pagesize:ElementRef;
  constructor(private http: HttpClient) { }
  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);


    



              ngOnInit() {
                this.colDefs= [{
                    headerName:"Name",
                    field:"athlete",
                   
                },
                {
                  headerName:"age",
                  field:"age",
                 
              },
              {
                headerName:"year",
                field:"year",
              
            },
            {
              headerName:"sport",
              field:"sport",
              
          },
          {
            headerName:"gold",
            field:"gold",
           
        },
        {
          headerName:"view",
          template:
          `<button type="button" (click)="alerting()" data-action-type="remove"  class="btn btn-default update">
             View
           </button> 
           
           `,
           suppressMenu: true,
           suppressSorting: true,
        },{
          headerName:"Remove",
          template:
          `
           
           <button type="button" data-action-type="remove"  class="btn btn-default remove">
           Remove
           </button> `,
           suppressMenu: true,
           suppressSorting: true,
        }
    
          ];

          this.paginationPageSize = 10;
          this.paginationNumberFormatter = function(params) {
            return "[" + params.value.toLocaleString() + "]";
          };
          


            } 
            alerting(){
              console.log('hai hello');
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
              // let value = document.getElementById("page-size").nodeValue;
              let anothervalue=this.pagesize.nativeElement.value;
              this.gridApi.paginationSetPageSize(Number(anothervalue));
            }
            public onRowClicked(e) {
            console.log(e.event.target.outerText);
            if(e.event.target.outerText=="VIEW"){
              alert("hai")
            }else if(e.event.target.outerText=="REMOVE"){
              alert("remove")
            }
          }
        
          }
