import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { FormBase } from '@shared/classes/form-base.component';

export interface ProductFormType {
  name: FormControl<string>;
  notes: FormControl<string>;
}

export interface ProductFormValueType {
  name: string;
  notes: string;
}

@Component({
  selector: 'hac-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent extends FormBase<
  ProductFormType,
  ProductFormValueType
> {
  public readonly controlName = 'product';
  public readonly form: FormGroup<ProductFormType> =
    new FormGroup<ProductFormType>({
      name: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      notes: new FormControl<string>('', {
        nonNullable: true,
      }),
    });

  constructor(private readonly formGroupDirective: FormGroupDirective) {
    super();
  }

  protected initForm(): void {
    this.formGroupDirective.form.addControl(this.controlName, this.form);
  }
}
