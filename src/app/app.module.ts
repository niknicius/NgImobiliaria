import { EditClientModule } from './views/client/edit-client/edit-client.module';
import { ShowClientModule } from './views/client/show-client/show-client.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewClientComponent } from './views/client/NewClient/NewClientComponent';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NewClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowClientModule,
    EditClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
