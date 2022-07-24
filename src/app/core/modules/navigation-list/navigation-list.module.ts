import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationListComponent } from './components/navigation-list/navigation-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationListComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationListComponent],
})
export class NavigationListModule {}
