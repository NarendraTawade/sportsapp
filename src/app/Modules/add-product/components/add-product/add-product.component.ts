import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/Modules/shared/services/shared.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {
  productName: any;
  productPrice: any;
  productCategory: any;
  productDescription: any;

  @Output() newItemEvent = new EventEmitter<string>();
  imgLink: any;
  msg: any;

  constructor(private _sharedService : SharedService) { }
  ngOnDestroy(): void {
    // this.passToservice()
  }

  addedProduct :any =[]

  ngOnInit(): void {
    // this.passToservice()

    // this._sharedService.getCartSubjectObservable().
    // subscribe((d:any)=>{
    //   this.msg=d
    //   console.log(d);
    // })

  }

  addNewProduct(productName:any, productPrice: any, productCategory:any, productDescription:any, imgLink:any){
    this.productName= productName,
    this.productPrice=productPrice,
    this.productCategory=productCategory,
    this.productDescription=productDescription,
    this.imgLink=imgLink,
    // console.log(this.productCategory)
    this.addedProduct=[{ productName :  this.productName, productPrice :this.productPrice,imgSrc:this.imgLink, productCategory:this.productCategory,
    productDescription:this.productDescription}]

    console.log(this.addedProduct)

    this.newItemEvent.emit(this.addedProduct);
  }

  // passToservice(){
  //   this._sharedService.addToCart(this.addedProduct)
  // }
}
