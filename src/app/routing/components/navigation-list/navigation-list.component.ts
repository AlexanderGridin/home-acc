import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationLink } from 'app/routing/models/navigation-link.model';

@Component({
  selector: 'nn-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss'],
})
export class NavigationListComponent {
  @Input() navigationLinks: Array<NavigationLink> = [];

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
