import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // Change with app-root to access body of page
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // HostBinding (set class on body)
  @HostBinding('class') class = '';
  // Slider Material
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
