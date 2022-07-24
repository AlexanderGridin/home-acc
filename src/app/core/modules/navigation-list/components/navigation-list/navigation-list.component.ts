import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationLink } from '@core/models/navigation-link.model';
import { NAVIGATION_LINKS } from '../../static-data/navigation-links';

@Component({
  selector: 'nn-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss'],
})
export class NavigationListComponent {
  public readonly navigationLinks: Array<NavigationLink> = NAVIGATION_LINKS;

  constructor(private readonly router: Router) {}

  public handleLinkClick(event: MouseEvent, link: NavigationLink): void {
    event.preventDefault();

    this.router.navigate([link.path], {
      state: {
        isNavigatedFromNavigationList: true,
      },
    });
  }
}
