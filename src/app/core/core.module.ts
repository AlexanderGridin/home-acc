import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from '@core/core.component';
import { AppLayoutModule } from '@core/modules/app-layout/app-layout.module';
import { HeaderModule } from '@core/modules/header/header.module';
import { SidebarContainerModule } from '@core/modules/sidebar-container/sidebar-container.module';
import { TabsModule } from '@core/modules/tabs/tabs.module';
import { PagesContainerModule } from './modules/pages-container/pages-container.module';
import { AppRoutingModule } from 'app/routing/app-routing.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppLayoutModule,
    HeaderModule,
    SidebarContainerModule,
    TabsModule,
    PagesContainerModule,
  ],
  exports: [CoreComponent],
})
export class CoreModule {}
