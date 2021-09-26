import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response} from '../models/response';
import { cliente } from '../models/cliente';
const httpOption = {
  headers :new HttpHeaders({
 
 
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {


  url: string = 'https://localhost:44355/Cliente';

  constructor(
    private http: HttpClient
    ) { 
    
  }
  getClientes():Observable<Response>{

    return this.http.get<Response>(this.url);
    
  }
  add(cliente:cliente): Observable<Response>{
    return this.http.post<Response>(this.url,cliente,httpOption);
  }
  edit(cliente:cliente):Observable<Response>{

    return this.http.put<Response>(`${this.url}/${cliente.idCliente}`,cliente,httpOption);
  }
  delete(id:number):Observable<Response>{
    return this.http.delete<Response>(`${this.url}/${id}`);
  }
}
