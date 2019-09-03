import { Injectable } from '@angular/core';
import {Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  lastID = 0;

  clientes = [];

  constructor() { }


  public add(cliente: Cliente) {
    if (!cliente.id){
      cliente.id = ++this.lastID;
    }
    this.clientes.push(cliente);
    return cliente;
  }
}
