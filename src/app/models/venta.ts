import {Concepto} from  './concepto';

export interface Venta{
    idcliente:number;
    conceptos:Concepto[];
}