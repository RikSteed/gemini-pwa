import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Example of State
  count = 0;
  // Example counter
  counter(){
    this.count++;
  }
  subtractor(){
    this.count--;
  }
}
