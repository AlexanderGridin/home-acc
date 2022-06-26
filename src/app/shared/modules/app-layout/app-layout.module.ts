import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderModule } from '../header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    HeaderModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
