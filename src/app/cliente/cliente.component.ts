import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import {Response} from '../models/response';
import { DialogClienteComponent } from './dialog/dialogcliente.component';
import { MatDialog } from '@angular/material/dialog';
import { cliente } from '../models/cliente';
import { HttpHeaders } from '@angular/common/http';
import { DialogDeleteComponent } from './common/dialogdelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({

  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public lst!: any;
  public columnas : string[]=["idCliente","nombreCliente","telefono","condicionIVA","cuit","deuda","direccion",'actions'];
  readonly width:string='300';
  constructor(

    private apiCliente : ApiclienteService,
    private dialog:MatDialog,
    public snackBar:MatSnackBar
  ) {

    }


  ngOnInit(): void {
    this.getClientes();
  }
  getClientes(){
    this.apiCliente.getClientes().subscribe(response=>{
      this.lst = response;
      
    });
  
  }
  openAdd(){
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width:this.width
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.getClientes();
    });
  }
  openEdit(cliente:cliente){
    
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width:this.width,
      data:cliente
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.getClientes();
    });

  }
  delete (cliente:cliente){
    const dialogRef = this.dialog.open(DialogDeleteComponent,{
      width:this.width,
      data:cliente
    });
    dialogRef.afterClosed().subscribe(result=>{
        if (result){
          this.apiCliente.delete(cliente.idCliente).subscribe(response=>{
       
              this.snackBar.open('Cliente eliminado con exito','',{
                duration:2000
              });
              this.getClientes();
            
          })
        }
    });
  }
  }
