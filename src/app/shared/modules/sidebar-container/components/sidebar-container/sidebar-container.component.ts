import { Component } from '@angular/core';

@Component({
  selector: 'nn-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss'],
})
export class SidebarContainerComponent {
  public isNavOpen = true;

  public handleSidebarTogglerClick(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
