import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') class = '';
  toggleTheme = new FormControl();
  // Example of State
  count = 0;

  ngOnInit(): void {
    this.toggleTheme.valueChanges.subscribe((theme)=>{
      const darkTheme = 'dark';
      this.class = theme ? darkTheme:'';
    })
  }
  // Example counter
  counter(){
    this.count++;
  }
  subtractor(){
    this.count--;
  }
  
}
