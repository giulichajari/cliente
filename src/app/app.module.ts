import { BrowserModule } from "@angular/platform-browser";
import { NgModule,Input } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// material
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table' ;
import { MatCardModule } from '@angular/material/card' ;
import { MatDialogModule} from '@angular/material/dialog' ;
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// components
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { HomeComponent } from "./home/home.component";
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DialogClienteComponent } from "./cliente/dialog/dialogcliente.component";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { DialogDeleteComponent } from "./cliente/common/dialogdelete.component";
import { LoginComponent } from "./login/login.component";
import { JwtInterceptor } from "./security/jwt.interceptor";
import { AuthGuard } from "./security/auth.guard";

export const ROUTES: Routes = [
  {
    path: "Home",
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: "",
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "Clientes",
    component: ClienteComponent,
    canActivate: [AuthGuard],
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    DialogClienteComponent,
    DialogDeleteComponent,
    SidenavComponent,
    LoginComponent,
    ClienteComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' }),
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


   
  ],
  providers:[
    {provide : HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}