import { Injectable } from "@angular/core";
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiAuthService } from "../services/apiauth.service";

@Injectable ({providedIn:'root'})

export class AuthGuard implements CanActivate{

    constructor(private router : Router,
                private apiauthservice :ApiAuthService)
    {
    }
    
    canActivate(): boolean{
        const usuario = this.apiauthservice.usuarioData;

        if (usuario){
            return true;
        }else{
        this.router.navigate(['login']);
        return false;
    } 
}
}