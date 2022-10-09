import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [TextareaComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [TextareaComponent],
})
export class TextareaModule {}
