import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { AddAccountComponent } from './add-account/add-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAccountComponent,
    AddAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
