import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from './../../../models/cliente';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  public cliente: Cliente;
  private formCliente: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteservice: ClienteService,
    private fb: FormBuilder

  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.cliente = this.clienteservice.getById(id);
      console.log(this.cliente);
    }, error => {
      alert('O cliente não foi identificado');
    });

    this.formCliente = this.fb.group({
      nome: [this.cliente.nome],
      cadastro: [this.cliente.cadastro],
      orgaoEx: [this.cliente.orgaoEx],
      rg: [this.cliente.rg],
      telefone: [this.cliente.telefone],
      tipo: [this.cliente.tipo]
    })
  }
  


  onSubmit(form: any){
    this.cliente.nome = form.nome;
    this.cliente.cadastro = form.cadastro;
    this.cliente.orgaoEx = form.orgaoEx;
    this.cliente.rg = form.rg;
    this.cliente.telefone = form.telefone;
    this.cliente.tipo = form.tipo;
    this.clienteservice.update(this.cliente);
    alert("Salvo com Sucesso!");
    this.router.navigate(['/clientes', this.cliente.id])
    

  }

  }

