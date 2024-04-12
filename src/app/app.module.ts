import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputModule } from './components/input';

// import { CDBFreeModule } from 'ng-cdbangular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputModule
    // CDBFreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
