import {Component,  OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { ApiAuthService } from "../services/apiauth.service";
import { FormGroup,FormControl,FormBuilder, Validators } from "@angular/forms";
@Component({templateUrl:'login.component.html'})
export class LoginComponent implements OnInit{
  

    public loginForm = this.fb.group({

       user:['',Validators.required],
       password : ['',Validators.required] 
    });
    constructor(public apiauth:ApiAuthService,
        private router:Router,
        private fb:FormBuilder){
           
          if (this.apiauth.usuarioData){
      
              this.router.navigate(['/']);
          }
    }
    ngOnInit(){
        
         
       
    }
    login(){
  
        this.apiauth.login(this.loginForm.value).subscribe(response =>{

            if (response.exito===1)   {
                 this.router.navigate(['/Home']);
            }
            });
       
    }
}
