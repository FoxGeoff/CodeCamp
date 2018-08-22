import { Component, OnInit } from '@angular/core';
import { Item } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  currentItem: Item;

  constructor() { }

  ngOnInit() {
    this.getItems();
    this.resetCurrentItem();
  }

  //todo: code stub
  getItems(): any {
    console.log("==> todo getItems()")
    return null;
  }

  resetCurrentItem() {
    this.currentItem = { id: null, name: '', price: 0, description: '' };
  }

  selectItem(item) {
    console.log("==> selectItem(item) =" + item.id);
    this.currentItem = item;
  }

  //todo: code stub
  deleteItem(item) {
    console.log("==> selectItem(item) =" + item.id);
    this.getItems();
    this.resetCurrentItem();
  }

}
