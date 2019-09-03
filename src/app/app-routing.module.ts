import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {NewClientComponent} from './views/client/NewClient/NewClientComponent';

export const routes: Routes = [
    { path: 'client/new', component:NewClientComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }