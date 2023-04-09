import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit, OnChanges {

  eve =true
  @Input() totalCost : any
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.disable()
  }

  ngOnInit(): void {
  }

  disable(){
    if(this.totalCost==0){
      this.eve=true;
    }
    else{
      this.eve=false;
    }
  }

  

}
