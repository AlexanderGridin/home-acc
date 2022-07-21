import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from '@shared/modules/tabs/components/tabs/tabs.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, MatTabsModule, MatIconModule, MatButtonModule],
  exports: [TabsComponent],
})
export class TabsModule {}
