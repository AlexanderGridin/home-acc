import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderModule } from '../header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TabsModule } from '../tabs/tabs.module';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    HeaderModule,
    MatButtonModule,
    MatIconModule,
    TabsModule,
  ],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
