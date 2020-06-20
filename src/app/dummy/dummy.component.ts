import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  public dummyData: number;

  constructor() { }

  ngOnInit(): void {
  }

  showData(data: number) {
    this.dummyData = data;
  }

}
