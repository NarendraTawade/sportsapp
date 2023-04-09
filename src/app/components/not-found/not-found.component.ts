import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Modules/shared/services/shared.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  msg: any;

  constructor(private _sharedService : SharedService) { }

  ngOnInit(): void {

    
  }

}
