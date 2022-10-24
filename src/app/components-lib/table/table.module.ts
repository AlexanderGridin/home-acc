import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTableColumnsPipe } from './pipes/mat-table-columns.pipe';

@NgModule({
  declarations: [TableComponent, MatTableColumnsPipe],
  imports: [CommonModule, MatTableModule],
  exports: [TableComponent],
})
export class TableModule {}
