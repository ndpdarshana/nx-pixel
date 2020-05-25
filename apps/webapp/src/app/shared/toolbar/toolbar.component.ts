import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pixels-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toggleSidenav.emit();
  }

}
