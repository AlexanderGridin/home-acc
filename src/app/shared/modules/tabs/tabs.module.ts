import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from '@shared/modules/tabs/components/tabs/tabs.component';

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [TabsComponent],
})
export class TabsModule {}
