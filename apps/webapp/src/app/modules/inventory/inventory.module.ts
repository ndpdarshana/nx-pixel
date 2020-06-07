import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    InventoryComponent
  ]
})
export class InventoryModule { }
