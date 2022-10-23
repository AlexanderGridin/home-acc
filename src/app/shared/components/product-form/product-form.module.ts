import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputModule } from '@components-lib/text-input/text-input.module';
import { NumericInputModule } from '@components-lib/numeric-input/numeric-input.module';
import { SingleSelectModule } from '@components-lib/single-select/single-select.module';
import { TableModule } from '@components-lib/table/table.module';
import { CardModule } from '@components-lib/card/card.module';
import { TextareaModule } from '@components-lib/textarea/textarea.module';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputModule,
    NumericInputModule,
    SingleSelectModule,
    TableModule,
    CardModule,
    TextareaModule,
  ],
  exports: [ProductFormComponent],
})
export class ProductFormModule {}
