import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/Modules/shared/services/shared.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  @Input() productDetail ='';

  productInfo :any =[]

  constructor(private _sharedService : SharedService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.productInfo = this._sharedService.viewProduct()
    console.log(this.productInfo);
  }

  public addToCart(e:any){
    console.log(e);
    this._sharedService.addToCart(e)
  }
}
