import { Component, Input } from '@angular/core';
import { TableColumn } from './models/table-column.model';

@Component({
  selector: 'hac-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() public columns: Array<TableColumn> = [];
  @Input() public rows: Array<any> = [];
}
