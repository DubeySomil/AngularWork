import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Somil's work"
  constructor(){
    setTimeout(() => {
      this.title = "Auto working"
    }, 5000);
  }
}
