import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from '../../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  public clientes: Array<any> = [];

  constructor(
    private router: Router,
    private service: ClienteService) {
    }
    
    ngOnInit(){
        this.clientes = this.getClient();
        console.log(this.clientes);
    }

    getClient(): Cliente[] {
      return this.service.getAll();

    }
    create(){
      this.router.navigate(['/clientes/new']);

    }
    show(id){
      this.router.navigate(['/clientes',id]);
      return false;
    }
    edit(id){
      this.router.navigate(['/clientes',id,'edit']);
      return false;
    }
    destroy (id){
      if(confirm ('Are you sure?')){
      }
      return false;
    }

}
