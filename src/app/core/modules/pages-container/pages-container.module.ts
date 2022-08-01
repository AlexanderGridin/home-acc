import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesContainerDirective } from '@core/modules/pages-container/directives/pages-container/pages-container.directive';
import { PagesContainerService } from '@core/modules/pages-container/services/pages-container/pages-container.service';

@NgModule({
  declarations: [PagesContainerDirective],
  imports: [CommonModule],
  providers: [PagesContainerService],
  exports: [PagesContainerDirective],
})
export class PagesContainerModule {}
