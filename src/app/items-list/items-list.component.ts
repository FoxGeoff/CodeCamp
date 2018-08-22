import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item, ItemsMockService } from '../shared';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() items: Item[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor(private itemsService: ItemsMockService) {
  }

  ngOnInit() {
    this.items = this.getItems();
  }

  getItems(): Item[] {

    return this.itemsService.all();
 
  }
}
