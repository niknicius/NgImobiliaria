import { Injectable } from '@angular/core';
import {Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes = [];

  constructor() { }


  public add(cliente: Cliente) {
    this.clientes.push(cliente);
  }
}
