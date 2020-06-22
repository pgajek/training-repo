import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent implements OnInit {
  arr = ['lista1', 'lista2', 'lista3'];
  constructor() {}

  ngOnInit(): void {}
  remove(item) {
    this.arr = this.arr.filter((element) => element !== item);
  }
}
