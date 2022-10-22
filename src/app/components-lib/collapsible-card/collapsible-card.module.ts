import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleCardComponent } from './collapsible-card.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [CollapsibleCardComponent],
  imports: [CommonModule, MatExpansionModule],
  exports: [CollapsibleCardComponent],
})
export class CollapsibleCardModule {}
