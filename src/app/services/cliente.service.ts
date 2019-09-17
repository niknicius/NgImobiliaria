import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  lastID = 0;

  clientes = [];

  constructor() {
    let cliente = new Cliente ('Douglas', 8699111, 'SDS-PE', 'Cadastro', '83-996804048', 'Pessoa Física', 1);
    this.add(cliente);
   }

   public getAll(){
     return this.clientes;
   }


  public add(cliente: Cliente) {
    if (!cliente.id) {
      cliente.id = ++this.lastID;
    }
    this.clientes.push(cliente);
    return cliente;
  }

  public getById(id: number){
        for (let i = 0; i <= this.clientes.length; i++){
          if (this.clientes[i].id == id){
            return this.clientes[i];
          }
        }
        throw new Error('ID Inválido');

    }

}
