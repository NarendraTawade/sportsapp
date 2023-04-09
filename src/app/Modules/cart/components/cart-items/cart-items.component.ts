import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from 'src/app/Modules/shared/services/shared.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit, OnChanges {

  public cart: any = [];
  public TotalCartCost:any =0;
  constructor(private _sharedService: SharedService) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.cart=this._sharedService.getCart()
    this.getTotalCostofCart(this.cart)
  }

  removeFromCart(i:any, cartItem :any){
    this._sharedService.removeFromCart(i)
    this.updateAfterRemoval(cartItem.productPrice)
    console.log(cartItem.productPrice);
    
  }

  getTotalCostofCart(c: any){
    for(let i=0; i < c.length;i++){
        this.TotalCartCost += c[i].productPrice 
    }
  }

  updateAfterRemoval(e:any){
    this.TotalCartCost -= e
  }
  
}
