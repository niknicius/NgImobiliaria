import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditClientComponent } from './edit-client.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';


@NgModule({
  declarations: [EditClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class EditClientModule { }
