import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CDBFreeModule } from 'ng-cdbangular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CDBFreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
