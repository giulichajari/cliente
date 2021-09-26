import { Component, Inject, INJECTOR } from "@angular/core";
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiclienteService } from "src/app/services/apicliente.service";
import { cliente } from "src/app/models/cliente"; 
@Component({

    templateUrl:'dialogcliente.component.html'

})
export class DialogClienteComponent{
    public nombre!: string;
    public idcliente!: number;
    constructor(

        public dialogRef: MatDialogRef<DialogClienteComponent>,
        public apiCliente: ApiclienteService,
        public snackBar:MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public cliente:cliente
    ){
        if (this.cliente !== null){
           this.nombre = cliente.nombreCliente;


        }
       
    }
    close(){

        this.dialogRef.close();
    }
    addcliente(){
        const cliente: cliente = {idCliente:0, nombreCliente:this.nombre};
        this.apiCliente.add(cliente).subscribe(response=>{
           
                this.dialogRef.close();
                this.snackBar.open('Cliente insertado con exito','',{
                    duration:2000
        });
            
        })
    }
    editcliente(){
        const cliente:cliente={nombreCliente:this.nombre,idCliente:this.cliente.idCliente};
        this.apiCliente.edit(cliente).subscribe(response=>{
           
            this.dialogRef.close();
            this.snackBar.open('Cliente editado con exito','',{
                duration:2000
    });
        
    })
    }
}