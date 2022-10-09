export class TableColumn {
  public title: string;
  public field: string;

  constructor({ title, field }: TableColumn) {
    this.title = title;
    this.field = field;
  }
}
