import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.css']
})
export class ShowAccountComponent implements OnInit {

  @Input() account : {name:string,status:string};
  @Input() id : number;
  @Output() statusChanged = new EventEmitter<{id:number,newStatus:string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onSetTo(status:string){
    this.statusChanged.emit({id:this.id,newStatus:status});
    console.log('A server status changed, new status: ' + status);
  }
}
