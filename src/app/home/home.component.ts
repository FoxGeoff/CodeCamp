import { Component, OnInit } from '@angular/core';
import { Item, Widget } from '../shared';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[];
  widgets: Widget[];
  constructor() { }

  ngOnInit() {
  }

}
