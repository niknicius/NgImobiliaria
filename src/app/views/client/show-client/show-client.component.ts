import { Cliente } from './../../../models/cliente';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit {

  public cliente: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteservice: ClienteService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.cliente = this.clienteservice.getById(id);
    }, error => {
      alert('O cliente não foi identificado');
    })
  }

  loadCliente(id: number): Promise<Cliente>{
    return new Promise((resolve)=> resolve(this.clienteservice.getById(id)));
  }


  edit(){
  this.router.navigate(['/clientes', this.cliente.id, 'edit']);
  return false;
}
}
