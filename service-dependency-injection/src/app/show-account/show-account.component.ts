import { LoggingServce } from './../logging.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.css'],
  providers : [LoggingServce]
})
export class ShowAccountComponent implements OnInit {

  @Input() account : {name:string,status:string};
  @Input() id : number;
  @Output() statusChanged = new EventEmitter<{id:number,newStatus:string}>();
  constructor(private loggingServce : LoggingServce ) {}

  ngOnInit(): void {
  }

  onSetTo(status:string){
    this.statusChanged.emit({id:this.id,newStatus:status});
   this.loggingServce.logStatusChanged(status);
  }
}
