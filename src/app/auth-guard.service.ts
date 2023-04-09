import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {

    // authenticated : boolean =true

    constructor (private _authService : AuthService, private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       return this._authService.isAuthenticated()
       .then((authenticated) => {
            if (authenticated){
                return true;
            }
            else{
                this.router.navigate(['not-found']);
            }
            return true;
            
        }
       )
    }
}