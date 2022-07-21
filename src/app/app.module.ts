import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@core/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutModule } from '@shared/modules/app-layout/app-layout.module';
import { HeaderModule } from '@shared/modules/header/header.module';
import { SidebarContainerModule } from '@shared/modules/sidebar-container/sidebar-container.module';
import { TabsModule } from '@shared/modules/tabs/tabs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppLayoutModule,
    HeaderModule,
    SidebarContainerModule,
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
