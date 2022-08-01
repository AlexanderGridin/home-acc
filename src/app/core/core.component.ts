import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationLink } from '@core/models/navigation-link.model';
import { Tab } from '@core/modules/tabs/models';
import { TabsService } from '@core/modules/tabs/services/tabs/tabs.service';
import { NAVIGATION_LINKS } from '@core/static-data/navigation-links';
import { CloseTabData } from '@core/modules/tabs/models/close-tab-data.model';
import { PagesContainerService } from '@core/modules/pages-container/services/pages-container/pages-container.service';

@Component({
  selector: 'nn-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent {
  public readonly navigationLinks: Array<NavigationLink> = NAVIGATION_LINKS;

  constructor(
    private readonly router: Router,
    private readonly tabsService: TabsService,
    private readonly pagesContainerService: PagesContainerService
  ) {}

  public handleTabClick(tab: Tab): void {
    this.router.navigate([tab.url]);
  }

  public handleTabClose(data: CloseTabData): void {
    const { closedTab, nextActiveTab } = data;

    this.pagesContainerService.pages.remove(closedTab.url);

    if (nextActiveTab) {
      this.router.navigate([nextActiveTab.url]);
      return;
    }

    if (this.tabsService.isEmpty) {
      this.router.navigate(['/']);
    }
  }

  public handleNavigationLinkClick(link: NavigationLink): void {
    this.router.navigate([link.path], {
      state: {
        isNavigatedFromNavigationList: true,
      },
    });
  }
}
