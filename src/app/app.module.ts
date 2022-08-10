import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { footerModule } from '../app/shared/components/footer/footer.component';
import { headerModule } from '../app/shared/components/header/header.component';
import { bodyModule } from '../app/shared/components/body/body.component';
import { authentication } from '../app/shared/components/auth-layout/authentication.component';
import { HttpClientModule } from  '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    footerModule,
    headerModule,
    bodyModule,
    authentication,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,      
    DataTablesModule,
    NgxPaginationModule           
  ],
  providers: [],    
  bootstrap: [AppComponent]
})
export class AppModule { 

}
