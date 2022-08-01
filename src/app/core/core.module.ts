import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from '@core/core.component';
import { AppRoutingModule } from '@core/routing/app-routing.module';
import { AppLayoutModule } from '@core/modules/app-layout/app-layout.module';
import { HeaderModule } from '@core/modules/header/header.module';
import { SidebarContainerModule } from '@core/modules/sidebar-container/sidebar-container.module';
import { TabsModule } from '@core/modules/tabs/tabs.module';
import { NavigationListModule } from '@core/modules/navigation-list/navigation-list.module';
import { PagesContainerDirective } from '@core/directives/pages-container/pages-container.directive';
import { PagesService } from '@core/services/pages/pages.service';

@NgModule({
  declarations: [CoreComponent, PagesContainerDirective],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppLayoutModule,
    HeaderModule,
    SidebarContainerModule,
    TabsModule,
    NavigationListModule,
  ],
  providers: [PagesService],
  exports: [CoreComponent],
})
export class CoreModule {}
