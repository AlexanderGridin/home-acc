import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextInputComponent } from '@components-lib/text-input/text-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [TextInputComponent],
})
export class TextInputModule {}
