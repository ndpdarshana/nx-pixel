import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pixels-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isSidenavOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  sidenavToggler(){
    this.isSidenavOpen = !this.isSidenavOpen;
  }

}
