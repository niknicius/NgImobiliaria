import { ShowClientModule } from './views/client/show-client/show-client.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewClientComponent } from './views/client/NewClient/NewClientComponent';
import { ListClientsModule } from './views/client/list-clients/list-clients.module';

@NgModule({
  declarations: [
    AppComponent,
    NewClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListClientsModule,
    ShowClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
