import { Injectable } from '@angular/core';
import { Item } from '../shared/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsMockService {
  items: Item[];

  constructor() { }

  all(): Item[] {
    return [
      { "id": 0, "name": "Thing item", "price": 20.56, "description": "This is a thing" },
      { 
        "id": 1, 
        "name": "Red Item", 
        "price": 100, 
        "description": "This is a red item" 
      },
      {
        "id": 2,
        "name": "Orange Item edited",
        "price": 200,
        "description": "This is an orange item"
      },
      {
        "id": 3,
        "name": "Yellow Item",
        "price": 300,
        "description": "This is a yellow item"
      },
      {
        "id": 4,
        "name": "Green Item",
        "price": 400,
        "description": "This is a green item"
      },
      {
        "id": 5,
        "price": 500,
        "name": "Blue Item",
        "description": "This is a blue item"
      },
      {
        "id": 6,
        "name": "Indigo Item",
        "price": 600,
        "description": "This is a indigo item"
      },
      {
        "id": 7,
        "name": "Violet Item",
        "price": 700,
        "description": "This is a violet item"
      }
    ];
  }
  
  load(id) {
     console.log("==> load(id) STUB");
  }

  create(item: Item) {
    console.log("==> create(item) STUB");
  }

  update(item: Item) {
    console.log("==> update(item) STUB");
  }

  delete(item: Item) {
    console.log("==> load(id) STUB");
  }

  search(term: string) {
    console.log("==> load(item) STUB");
  }
}
