import { Component, Input } from '@angular/core';

export class TableColumn {
  public title: string;
  public field: string;

  constructor({ title, field }: TableColumn) {
    this.title = title;
    this.field = field;
  }
}

@Component({
  selector: 'hac-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() public columns: Array<TableColumn> = [];
  @Input() public rows: Array<any> = [];
}
