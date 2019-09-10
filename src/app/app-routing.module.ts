import { ShowClientComponent } from './views/client/show-client/show-client.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';

import {NewClientComponent} from './views/client/new-client/new-client-component';

export const routes: Routes = [
  {path: 'cliente/:id', component: ShowClientComponent},
  {path: 'clientes/new', component: NewClientComponent },
  {path:'', component: AppComponent},
];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }