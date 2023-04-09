import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Modules/shared/services/shared.service';

@Component({
  selector: 'app-dashboard-items',
  templateUrl: './dashboard-items.component.html',
  styleUrls: ['./dashboard-items.component.css']
})
export class DashboardItemsComponent implements OnInit {

  public dashboardItems :any =[
    { productName : 'PUMA FUTURE Cricket Bat', productPrice :2000, productCategory:'Cricket',imgSrc:'../../../../../assets/bat-image.avif',
    productDescription:'Age Group 9 - 11 Yrs, Blade Made of Kashmir Willow, Training Playing Level, Bat Grade: Grade 1, Sport Type: Cricket, With Cover, Weight Range 700-1200 g' },
    { productName : 'Yonex Badminton Racket', productPrice :1500, productCategory:'Badminton', imgSrc:'../../../../../assets/badminton.avif',
    productDescription:'Age Group 9 - 11 Yrs, Blade Made of Kashmir Willow, Training Playing Level, Bat Grade: Grade 1, Sport Type: Cricket, With Cover, Weight Range 700-1200 g' },
    { productName : 'Puma Volleyball', productPrice :999, productCategory:'Volleyball',imgSrc:'../../../../../assets/volleyball.avif',
    productDescription:'Age Group 9 - 11 Yrs, Blade Made of Kashmir Willow, Training Playing Level, Bat Grade: Grade 1, Sport Type: Cricket, With Cover, Weight Range 700-1200 g' },
    { productName : 'Hero Cycle', productPrice : 6999, productCategory:'Cycling',imgSrc:'../../../../../assets/cycle.avif',
    productDescription:'Age Group 9 - 11 Yrs, Blade Made of Kashmir Willow, Training Playing Level, Bat Grade: Grade 1, Sport Type: Cricket, With Cover, Weight Range 700-1200 g' },
    { productName : 'Football', productPrice :2000, productCategory:'Football',imgSrc:'../../../../../assets/kids-football-ball.avif',
    productDescription:'Age Group 9 - 11 Yrs, Blade Made of Kashmir Willow, Training Playing Level, Bat Grade: Grade 1, Sport Type: Cricket, With Cover, Weight Range 700-1200 g' },
    { productName : 'Tennis Racket', productPrice :2000, productCategory:'Tennis', imgSrc:'../../../../../assets/tennis-racket.avif',
    productDescription:'Age Group 9 - 11 Yrs, Blade Made of Kashmir Willow, Training Playing Level, Bat Grade: Grade 1, Sport Type: Cricket, With Cover, Weight Range 700-1200 g' },
  ]

  constructor(private _sharedService :SharedService) { }

  ngOnInit(): void {
  }

  public addToCart(e:any){
    console.log(e);
    this._sharedService.addToCart(e)
  }

  public addProduct(e:any) {
    console.log(e)
    Array.prototype.push.apply(this.dashboardItems, e); ;
  }

  public sendProductInfo(e:any){
    this._sharedService.getProductInfo(e)
  }

}
