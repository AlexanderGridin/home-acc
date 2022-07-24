import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from '@core/modules/tabs/components/tabs/tabs.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TabsService } from './services/tabs/tabs.service';

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, MatTabsModule, MatIconModule, MatButtonModule],
  providers: [TabsService],
  exports: [TabsComponent],
})
export class TabsModule {}
