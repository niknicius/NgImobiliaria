import { ShowClientComponent } from './views/client/show-client/show-client.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';

import {NewClientComponent} from './views/client/NewClient/NewClientComponent';

export const routes: Routes = [
  {path: 'cliente/:id', component: ShowClientComponent},
  { path: 'client/new', component:NewClientComponent },
  {path:'', component: AppComponent},
];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }