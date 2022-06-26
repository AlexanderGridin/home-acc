import { Component } from '@angular/core';

enum SidenavTogglerIcon {
  Open = 'chevron_right',
  Close = 'chevron_left',
}

@Component({
  selector: 'nn-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
  public isNavOpen = true;
  public sideNavTogglerIcon: SidenavTogglerIcon = SidenavTogglerIcon.Close;

  public handleSideNavTogglerClick(): void {
    this.isNavOpen = !this.isNavOpen;
    this.sideNavTogglerIcon = this.isNavOpen
      ? SidenavTogglerIcon.Close
      : SidenavTogglerIcon.Open;
  }
}
