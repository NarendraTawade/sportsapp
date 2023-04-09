import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/Modules/shared/services/shared.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  count: any =0;

  constructor(private _sharedService : SharedService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._subscribeEvents();
    this.activatedRoute.fragment.subscribe((res:any)=>{
      console.log(res);
      this.jumpToSection(res)
    })
  }

  private _subscribeEvents() {
    this._sharedService.getCartSubjectObservable() .subscribe({
      next:(res:any)=>{
        this.count=res.length;
      },
      error:(error:any)=>{
        console.log(error);
      }

    })
  }

  jumpToSection(section:any){
    setTimeout(()=>{
      document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
    }, 1000)
  }

}
