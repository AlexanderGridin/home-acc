import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarContainerComponent } from './components/sidebar-container/sidebar-container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarTogglerComponent } from './components/sidebar-toggler/sidebar-toggler.component';

@NgModule({
  declarations: [SidebarContainerComponent, SidebarTogglerComponent],
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatIconModule],
  exports: [SidebarContainerComponent],
})
export class SidebarContainerModule {}
