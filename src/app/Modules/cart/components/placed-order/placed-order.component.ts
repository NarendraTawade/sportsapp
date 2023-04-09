import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Modules/shared/services/shared.service';

@Component({
  selector: 'app-placed-order',
  templateUrl: './placed-order.component.html',
  styleUrls: ['./placed-order.component.css']
})
export class PlacedOrderComponent implements OnInit {
  order: any;

  constructor( private _sharedService : SharedService) { }

  ngOnInit(): void {
    this.order=this._sharedService.getCart()
  }

}
