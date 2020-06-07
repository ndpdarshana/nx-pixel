import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';



@NgModule({
  declarations: [
    FinanceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FinanceComponent
  ]
})
export class FinanceModule { }