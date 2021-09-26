import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "./models/usuario";
import { ApiAuthService } from "./services/apiauth.service";

@Component({
  selector: "app-root",
  styles: [
    `
      .content-container {
        min-height: 100vh;
        box-sizing: border-box;
        padding: 25px;
      }
    `,
  ],
  template: `
  
    <mat-sidenav-container autosize>
      <mat-sidenav
        #sidenav
        fixedInViewport="true"
        mode="side"
        opened="{{ isExpanded }}"
      >
        <side-nav
          (toggleMenu)="toggleMenu()"
          [isExpanded]="isExpanded"
        ></side-nav>
      </mat-sidenav>
      <mat-sidenav-content [style.margin-left.px]="!isExpanded ? 60 : 250">
        <div class="content-container">
          <router-outlet></router-outlet>
          <a *ngIf="usuario" >Cerrar Sesion</a>
        </div>
    
      </mat-sidenav-content>
   
    </mat-sidenav-container>
  `,
})
export class AppComponent {
  title = 'app';
  usuario!: Usuario;
  apiauthService!: ApiAuthService;
  cosntructor( apiauthService: ApiAuthService,
              router:Router
              )
              {
                this.apiauthService.usuario.subscribe(res=>{
                  this.usuario=res;
                  console.log('cambio el objeto' + res);
                });
              }

  
  public isExpanded = false ;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
