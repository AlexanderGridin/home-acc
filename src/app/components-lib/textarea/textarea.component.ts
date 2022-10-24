import { Component } from '@angular/core';
import { FormControlBase } from '@components-lib/shared/form-control-base.component';

@Component({
  selector: 'hac-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent extends FormControlBase {}
