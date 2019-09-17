import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './NewClientComponent.html',
  styleUrls: ['./NewClientComponent.css']
})


export class NewClientComponent implements OnInit {

  formCliente: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formCliente = this.fb.group({

      nome: [''],
      rg: [''],
      orgaoEx: [''],
      cadastro: [''],
      telefone: [''],
      tipo: ['']

    // tslint:disable-next-line:semicolon
    })
    
  }
  
  onSubmit(cliente: Cliente){
  
  }

}
