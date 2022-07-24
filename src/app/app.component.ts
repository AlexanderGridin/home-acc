import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationLink } from '@core/models/navigation-link.model';
import { NAVIGATION_LINKS } from '@core/static-data/navigation-links';

@Component({
  selector: 'nn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly title = 'nnotes';
  public readonly navigationLinks: Array<NavigationLink> = NAVIGATION_LINKS;

  constructor(private readonly router: Router) {}

  public handleNavigationLinkClick(link: NavigationLink): void {
    this.router.navigate([link.path], {
      state: {
        isNavigatedFromNavigationList: true,
      },
    });
  }
}
