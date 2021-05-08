import { AccountService } from './../new-account.service';
import { LoggingServce } from './../logging.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.css'],
  providers : [LoggingServce]
})
export class ShowAccountComponent {

  @Input() account : {name:string,status:string};
  @Input() id : number;

  constructor(private loggingServce : LoggingServce , private accountService : AccountService) {}


  onSetTo(status:string){
    this.accountService.updateStatus(this.id,status);
   this.loggingServce.logStatusChanged(status);
  }
}
