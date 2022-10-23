import { Component } from '@angular/core';
import { PageBaseComponent } from '@shared/classes/page-base.component';

@Component({
  selector: 'hac-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent extends PageBaseComponent {
  public get title(): string {
    return 'Товары';
  }
}
