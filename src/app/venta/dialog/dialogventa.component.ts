import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    templateUrl:'dialogventa.component.html'
})
export class dialogVentacomponent{
    constructor(
        public dialogRef : MatDialogRef<dialogVentacomponent>,
        public snackBar:MatSnackBar,
        private formBuilder:FormBuilder
    ){

    }
    close(){
        this.dialogRef.close();
    }
}