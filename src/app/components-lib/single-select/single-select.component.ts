import { Component, Input, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { FormControlBase } from '@components-lib/shared/form-control-base.component';

export interface SingleSelectItem {
  viewValue: string;
  value: string | number;
}

@Component({
  selector: 'hac-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
})
export class SingleSelectComponent extends FormControlBase {
  @Input() public data: Array<SingleSelectItem> = [];
  @Input() public showClearButton = true;
  @Input() public clearButtonText = 'Очистить';
  @Input() public isLoading = false;

  @ViewChild(MatSelect, { static: true }) select!: MatSelect;

  public handleClearClick(): void {
    this.control.reset();
    this.select.close();
  }
}
