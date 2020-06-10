import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InventoryMgmtComponent } from './inventory-mgmt/inventory-mgmt.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { InventoryMgmtTableComponent } from './inventory-mgmt/inventory-mgmt-table/inventory-mgmt-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    InventoryComponent,
    InventoryMgmtComponent,
    InventoryMgmtTableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    InventoryComponent
  ]
})
export class InventoryModule { }
