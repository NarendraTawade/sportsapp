import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddProductContainerComponent } from './components/add-product-container/add-product-container.component';



@NgModule({
  declarations: [
    AddProductComponent,
    AddProductContainerComponent
  ],
  imports: [
    CommonModule,
    AddProductRoutingModule
  ],
  exports:[
    AddProductComponent
  ]
})
export class AddProductModule { }
