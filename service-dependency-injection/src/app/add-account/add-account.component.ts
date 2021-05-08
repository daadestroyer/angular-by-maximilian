import { AccountService } from './../new-account.service';
import { LoggingServce } from './../logging.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
  providers : [LoggingServce]
})
export class AddAccountComponent   {


  constructor(private loggingServce : LoggingServce , private accountService : AccountService) {

  }



  onCreateAccount(accountName:string,accountStatus:string){
    this.accountService.addAccount(accountName,accountStatus);

    // const service = new LoggingServce();
    this.loggingServce.logStatusChanged(accountStatus);
  }

}
