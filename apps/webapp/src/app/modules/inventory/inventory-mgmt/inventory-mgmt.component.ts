import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../../models/inventory.model';

@Component({
  selector: 'pixels-inventory-mgmt',
  templateUrl: './inventory-mgmt.component.html',
  styleUrls: ['./inventory-mgmt.component.css']
})
export class InventoryMgmtComponent implements OnInit {

  constructor() { }

  inventory: Inventory[] = [
    {
      id: 1,
      name: "Test inventory",
      category: "This cat",
      description: "Abra cadabra",
      supplier: "NXG suppliers",
      note: "Text note"
    }, {
      id: 2,
      name: "Inv 2",
      category: "This cat",
      description: "Abra cadabra",
      supplier: "NXG suppliers",
      note: "Text note"
    }, {
      id: 3,
      name: "Inv 3",
      category: "This cat",
      description: "Abra cadabra",
      supplier: "NXG suppliers",
      note: "Text note"
    }
  ]

  ngOnInit(): void {
  }

}
