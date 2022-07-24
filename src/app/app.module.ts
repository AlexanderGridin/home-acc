import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@core/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutModule } from '@core/modules/app-layout/app-layout.module';
import { HeaderModule } from '@core/modules/header/header.module';
import { SidebarContainerModule } from '@core/modules/sidebar-container/sidebar-container.module';
import { TabsModule } from '@core/modules/tabs/tabs.module';

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
