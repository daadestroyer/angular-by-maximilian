import { LoggingServce } from './../logging.service';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
  providers : [LoggingServce]
})
export class AddAccountComponent implements OnInit {

   @Output() accountAdded = new EventEmitter<{name:string,status:string}>();

  constructor(private loggingServce : LoggingServce ) {}

  ngOnInit(): void {
  }

  onCreateAccount(accountName:string,accountStatus:string){
    this.accountAdded.emit({name:accountName,status:accountStatus});
    // const service = new LoggingServce();

    this.loggingServce.logStatusChanged(accountStatus);
  }

}
