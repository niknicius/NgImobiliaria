import { ShowClientModule } from './views/client/show-client/show-client.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
