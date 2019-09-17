import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientsComponent } from './list-clients.component';
import { ClienteService } from 'src/app/services/cliente.service';



@NgModule({
  declarations: [ListClientsComponent],
  imports: [
    CommonModule
  ]
})
export class ListClientsModule { 
    message: string;

  
}