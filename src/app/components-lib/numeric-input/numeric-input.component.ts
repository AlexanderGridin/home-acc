import { Component } from '@angular/core';
import { FormControlBase } from '@components-lib/shared/form-control-base.component';

@Component({
  selector: 'hac-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.scss'],
})
export class NumericInputComponent extends FormControlBase {}
