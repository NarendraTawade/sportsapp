import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardItemsComponent } from './components/dashboard-items/dashboard-items.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { SharedModule } from '../shared/shared.module';
import { AddProductModule } from '../add-product/add-product.module';



@NgModule({
  declarations: [
    DashboardItemsComponent,
    DashboardContainerComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    SharedModule, 
    AddProductModule
  ],
  // exports: [
  //   ViewDetailsComponent
  // ]
})
export class DashboardModule { }
