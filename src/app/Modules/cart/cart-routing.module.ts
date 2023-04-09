import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { PlacedOrderComponent } from './components/placed-order/placed-order.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

const routes: Routes = [
  {
    path: '',
    component: CartItemsComponent,
  },

  {
    path: 'order-details',
    component: PlacedOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
