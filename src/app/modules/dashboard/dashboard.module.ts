import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { dashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { authService } from '../../data/service/authService.service'
import { CommonModule } from '@angular/common';
import { ModalModule } from '../_modal';


@NgModule({
  declarations: [
    dashboardComponent
  ],
  imports: [
    CommonModule,
    dashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule
  ],
  providers: [authService],
  bootstrap: [dashboardComponent]
})
export class dashboardodule { }
