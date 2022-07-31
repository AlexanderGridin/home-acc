import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationLink } from '@core/models/navigation-link.model';
import { Tab } from '@core/modules/tabs/models';
import { TabsService } from '@core/modules/tabs/services/tabs/tabs.service';
import { NAVIGATION_LINKS } from '@core/static-data/navigation-links';
import { CloseTabData } from '@core/modules/tabs/components/tabs/tabs.component';
import { PagesService } from '@core/services/pages/pages.service';

@Component({
  selector: 'nn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly title = 'nnotes';
  public readonly navigationLinks: Array<NavigationLink> = NAVIGATION_LINKS;

  constructor(
    private readonly router: Router,
    private readonly tabsService: TabsService,
    private readonly pagesService: PagesService
  ) {}

  public handleTabClick(tab: Tab): void {
    this.router.navigate([tab.url]);
  }

  public handleTabClose(data: CloseTabData): void {
    const { closedTab, nextActiveTab } = data;

    this.pagesService.removePage(closedTab.url);

    if (nextActiveTab) {
      this.router.navigate([nextActiveTab.url]);
      return;
    }

    if (!this.tabsService.isTabsExist) {
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
