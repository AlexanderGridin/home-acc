import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SingleSelectItem } from '@components-lib/single-select/single-select.component';
import { FormBase } from '@shared/classes/form-base.component';

interface FormType {
  name: FormControl<string>;
  price: FormControl<number | null>;
  notes: FormControl<string>;
  singleSelect: FormControl<SSIType | null>;
}

interface FormValueType {
  name: string;
  price: number | null;
  notes: string;
  singleSelect: SSIType | null;
}

interface SSIType {
  id: number;
  name: string;
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
    singleSelect: new FormControl<SSIType | null>(null, [Validators.required]),
  });

  public singleSelectiItems: Array<SingleSelectItem<SSIType>> = [
    {
      viewValue: 'Test 1',
      value: {
        id: 1,
        name: 'test1',
      },
    },
    {
      viewValue: 'Test 2',
      value: {
        id: 2,
        name: 'test2',
      },
    },
    {
      viewValue: 'Test 3',
      value: {
        id: 3,
        name: 'test3',
      },
    },
  ];
  protected initForm(): void {
    this.form.controls.price.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.form.controls.singleSelect.valueChanges.subscribe((value) => {
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
