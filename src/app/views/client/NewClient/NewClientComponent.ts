import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './NewClientComponent.html',
  styleUrls: ['./NewClientComponent.css']
})


export class NewClientComponent implements OnInit {

  formCliente: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private clienteService: ClienteService) { }

  ngOnInit() {
    this.formCliente = this.fb.group({

      nome: [null, [Validators.required]],
      rg: [null, [Validators.required]],
      orgaoEx: [null, [Validators.required]],
      cadastro: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      tipo: [null, [Validators.required]]

      // tslint:disable-next-line:semicolon
    })
  }

  onSubmit() {
    if (this.formCliente.valid) {

     const cliente = new Cliente(this.formCliente.value.nome, this.formCliente.value.rg,
        this.formCliente.value.orgaoEx, this.formCliente.value.cadastro,
        this.formCliente.value.telefone, this.formCliente.value.tipo);
     this.clienteService.add(cliente);
    }
  }
}
