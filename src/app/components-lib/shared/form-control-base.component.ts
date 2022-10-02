import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: '',
})
export abstract class FormControlBase {
  @Input() public control: FormControl = new FormControl(null);
  @Input() public label = '';
  @Input() public placeholder = '';
  @Input() public id = '';
}
