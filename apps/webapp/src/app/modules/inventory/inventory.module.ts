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
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AddItemDialogBoxComponent } from './inventory-mgmt/add-item-dialog-box/apply-leave-dialog-box.component';

@NgModule({
  declarations: [
    InventoryComponent,
    InventoryMgmtComponent,
    InventoryMgmtTableComponent,
    AddItemDialogBoxComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    InventoryComponent
  ]
})
export class InventoryModule { }
