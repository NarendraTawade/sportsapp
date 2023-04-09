import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      )
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    // canActivate :[AuthGuard]
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./Modules/cart/cart.module').then(
        (m) => m.CartModule
      ),
  },
  {
    path: 'add-product',
    loadChildren: () =>
      import('./Modules/add-product/add-product.module').then(
        (m) => m.AddProductModule
      ),
  },
  {
    path : 'not-found',
    component: NotFoundComponent,
  },
  {
    path :'**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
