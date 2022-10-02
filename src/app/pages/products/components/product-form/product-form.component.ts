import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBase } from '@shared/classes/form-base.component';

interface FormType {
  name: FormControl<string>;
  price: FormControl<number | null>;
  notes: FormControl<string>;
}

interface FormValueType {
  name: string;
  price: number | null;
  notes: string;
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
  });

  protected initForm(): void {}

  public handleSaveClick(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.form.disable();
      console.log(this.form);
    }
  }
}
