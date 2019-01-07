import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { MatButtonModule,
   MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import { NavbarModule, WavesModule,
   ButtonsModule, DropdownModule, MDBBootstrapModule, PopoverModule, ModalModule, TooltipModule, TableModule } from 'angular-bootstrap-md';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule} from 'ag-grid-angular';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './views/header/header.component';
import { MainComponent } from './views/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { MatrlComponent } from './views/matrl/matrl.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MainComponent,
    MatrlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
   
    AppRoutingModule,
   
    
    NavbarModule,
    MatButtonModule,
    FormsModule,
    TableModule,
    MatCardModule,
     MatMenuModule,
      MatToolbarModule,
       MatIconModule,
        MatAutocompleteModule,
         MatInputModule,
         MatFormFieldModule,
         MatProgressBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    WavesModule.forRoot(),
    
   
    ButtonsModule.forRoot(),
    DropdownModule.forRoot(),
    ModalModule, TooltipModule, PopoverModule,
    MDBBootstrapModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
