import { Cliente } from './../../../models/cliente';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { PromiseState, resolve } from 'q';



@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit {

  public cliente: Cliente;

  constructor(
    private route: ActivatedRoute,
    private clienteservice: ClienteService) { }

  ngOnInit() {
    /*this.route.params
    .switchMap((params: Params) => this.loadCliente(+params['id']))
    .subscribe((cliente: Cliente) => this.cliente = cliente); */
  }

  loadCliente(id: number): Promise<Cliente>{
    return new Promise((resolve)=> resolve(this.clienteservice.getById(id)));
  }
}
