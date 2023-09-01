import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title = "Somil's work"
  constructor(){
    setTimeout(() => {
      this.title = "Auto working"
    }, 500);
  }
}
