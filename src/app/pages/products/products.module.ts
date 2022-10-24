import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductFormModule } from '@shared/components/product-form/product-form.module';
import { AddProductCollapsibleCardComponent } from './components/add-product-collapsible-card/add-product-collapsible-card.component';
import { CollapsibleCardModule } from '@components-lib/collapsible-card/collapsible-card.module';
import { ButtonModule } from '@components-lib/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PageModule } from '@shared/components/page/page.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
    data: { title: 'Товары' },
  },
];

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductsPageComponent,
    AddProductCollapsibleCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductFormModule,
    CollapsibleCardModule,
    ButtonModule,
    ReactiveFormsModule,
    PageModule,
  ],
})
export class ProductsModule {}
