import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { SharedModule } from '../shared/shared.module';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { PlacedOrderComponent } from './components/placed-order/placed-order.component';



@NgModule({
  declarations: [
    CartItemsComponent,
    CartContainerComponent,
    PlaceOrderComponent,
    PlacedOrderComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ],
  exports:[
    
  ]
})
export class CartModule { }
