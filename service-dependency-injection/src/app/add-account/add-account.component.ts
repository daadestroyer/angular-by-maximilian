import { LoggingServce } from './../logging.service';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

   @Output() accountAdded = new EventEmitter<{name:string,status:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreateAccount(accountName:string,accountStatus:string){
    this.accountAdded.emit({name:accountName,status:accountStatus});
    const service = new LoggingServce();
    service.logStatusChanged(accountStatus);
  }

}
