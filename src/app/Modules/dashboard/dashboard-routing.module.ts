import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardItemsComponent } from './components/dashboard-items/dashboard-items.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardItemsComponent,
  },
  {
    path : 'view-details/:id',
    component:ViewDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
