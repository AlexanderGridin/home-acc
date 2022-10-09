import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '../table.component';

@Pipe({ name: 'matTableColumns' })
export class MatTableColumnsPipe implements PipeTransform {
  public transform(value: Array<TableColumn>): Array<string> {
    return value?.map(({ field }: TableColumn) => field) || [];
  }
}
