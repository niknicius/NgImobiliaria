import { ShowClientComponent } from './views/client/show-client/show-client.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';

import {NewClientComponent} from './views/client/NewClient/NewClientComponent';
import { EditClientComponent } from './views/client/edit-client/edit-client.component';

export const routes: Routes = [
  {path: 'clientes/:id', component: ShowClientComponent},
  {path: 'clientes/new', component: NewClientComponent },
  {path: 'clientes/:id/edit', component: EditClientComponent},
  {path:'', component: AppComponent},
];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }