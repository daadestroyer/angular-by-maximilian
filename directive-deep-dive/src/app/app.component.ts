import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-deep-dive';
  // numbers = [1,2,3,4,5];
  oddNumber = [1,3,5];
  evenNumber = [2,4,6];
  onlyOdd = true;
  value=Math.round(Math.random()*6);
}
