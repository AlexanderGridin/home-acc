import {
  ComponentRef,
  Directive,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { NavigationEnd, Router, Event, ActivatedRoute } from '@angular/router';
import { Tab } from '@core/modules/tabs/models';
import { TabsService } from '@core/modules/tabs/services/tabs/tabs.service';
import { PagesContainerService } from '@core/modules/pages-container/services/pages-container/pages-container.service';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[nnPagesContainer]',
})
export class PagesContainerDirective implements OnInit {
  constructor(
    private readonly container: ViewContainerRef,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly tabsService: TabsService,
    private readonly service: PagesContainerService
  ) {}

  public ngOnInit(): void {
    this.subscribeToRouterEvents();
  }

  private subscribeToRouterEvents(): void {
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe(this.handleRouterNavigationEnd.bind(this));
  }

  private handleRouterNavigationEnd(): void {
    const url: string = this.router.routerState.snapshot.url;
    const component: Type<any> = this.activatedRoute?.firstChild?.firstChild
      ?.component as Type<any>;
    const existingComponentRef = this.service.componentsRefs.get(url);

    if (!component) {
      return;
    }

    if (this.tabsService.isExist(url) && existingComponentRef) {
      this.service.pages.hideAll();
      this.service.pages.show(url);
      return;
    }

    const title =
      this.activatedRoute?.firstChild?.firstChild?.snapshot?.data?.title;

    this.tabsService.add(new Tab({ label: title ?? '', url, isActive: true }));
    this.service.pages.hideAll();

    const componentRef: ComponentRef<any> =
      this.container.createComponent(component);
    this.service.componentsRefs.add(componentRef, url);
  }
}
