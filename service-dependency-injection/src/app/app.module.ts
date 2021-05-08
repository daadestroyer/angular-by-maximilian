import { LoggingServce } from './logging.service';
import { AccountService } from './new-account.service';
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
  providers: [LoggingServce,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
