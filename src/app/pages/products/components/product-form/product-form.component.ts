import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SingleSelectItem } from '@components-lib/single-select/single-select.component';
import { FormBase } from '@shared/classes/form-base.component';

interface FormType {
  name: FormControl<string>;
  price: FormControl<number | null>;
  notes: FormControl<string>;
  singleSelect: FormControl<number | null>;
}

interface FormValueType {
  name: string;
  price: number | null;
  notes: string;
  singleSelect: number | null;
}

@Component({
  selector: 'hac-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent extends FormBase<FormType, FormValueType> {
  public readonly form: FormGroup<FormType> = new FormGroup<FormType>({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    price: new FormControl<number | null>(null, [Validators.required]),
    notes: new FormControl<string>('', {
      nonNullable: true,
    }),
    singleSelect: new FormControl<number | null>(null, [Validators.required]),
  });

  public singleSelectiItems: Array<SingleSelectItem> = [
    {
      viewValue: 'Test 1',
      value: 1,
    },
    {
      viewValue: 'Test 2',
      value: 2,
    },
    {
      viewValue: 'Test 3',
      value: 3,
    },
  ];
  protected initForm(): void {
    this.form.controls.price.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  public handleSaveClick(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.form.disable();
      console.log(this.form);
    }
  }

  public toggleFormDisabling(): void {
    if (this.form.disabled) {
      this.form.enable();
      return;
    }

    this.form.disable();
  }
}
