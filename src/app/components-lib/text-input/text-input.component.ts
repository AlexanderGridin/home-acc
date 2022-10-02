import { Component, OnInit } from '@angular/core';
import { FormControlBase } from '@components-lib/shared/form-control-base.component';

@Component({
  selector: 'hac-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent extends FormControlBase implements OnInit {
  ngOnInit(): void {}
}
