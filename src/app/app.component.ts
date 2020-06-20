import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp abcd';
  num: number = 2;
  arr = ["lista1", "lista2", "lista3"];

  add() {
    this.num = this.num + 1
  }
}
