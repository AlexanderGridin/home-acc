import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextInputModule } from '@components-lib/text-input/text-input.module';
import { NumericInputModule } from '@components-lib/numeric-input/numeric-input.module';
import { SingleSelectModule } from '@components-lib/single-select/single-select.module';

const routes: Routes = [
  {
    path: 'add',
    component: ProductFormComponent,
    data: { title: 'Add product' },
  },
  {
    path: ':id',
    component: ProductPageComponent,
    data: { title: 'View product' },
  },
];

@NgModule({
  declarations: [ProductPageComponent, ProductFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    TextInputModule,
    NumericInputModule,
    SingleSelectModule,
  ],
})
export class ProductsModule {}
