import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _cart: any = [];
  private _cartSubject = new Subject();
  TotalCartCost: any;

  // private _productInfo :any =[];

  private myData : any =[];

  constructor() {}

  public getCartSubjectObservable() {
    return this._cartSubject.asObservable();
  }

  public triggerCartSubject() {
    this._cartSubject.next(this._cart);
  }

  public getCart() {
    console.log(this._cart);
    return this._cart;
  }

  public addToCart(e: any) {
    this._cart.push(e);
    this.triggerCartSubject();
  }

  public removeFromCart(e: any) {
    // const index = e;
    // if (index > -1) {
      this._cart.splice(e, 1); 
    // }
    this.triggerCartSubject();
  }
  
  // public passProduct(e:any){
  //   console.log(e)
  // }

  public getProductInfo(e:any){
    this.myData=[];
    this.myData.push(e)
    console.log(e)
    console.log(this.myData); 
  }
  public viewProduct(){
    return this.myData
  }
}
