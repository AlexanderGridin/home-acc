import {
  Component,
  OnInit,
  Output,
  TrackByFunction,
  EventEmitter,
  Type,
} from '@angular/core';
import { Tab } from '@core/modules/tabs/models';
import { TabsService } from '@core/modules/tabs/services/tabs/tabs.service';
import { Observable } from 'rxjs';
import { CloseTabData } from '@core/modules/tabs/models/close-tab-data.model';
import { NavigationEnd, Router, Event, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nn-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  public trackByFn: TrackByFunction<Tab> = (index: number) => index;

  @Output() clickOnTab: EventEmitter<Tab> = new EventEmitter<Tab>();
  @Output() closeTab: EventEmitter<CloseTabData> =
    new EventEmitter<CloseTabData>();

  constructor(
    private readonly router: Router,
    private readonly service: TabsService,
    private readonly activatedRoute: ActivatedRoute
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

    if (!component) {
      return;
    }

    if (this.service.isExist(url)) {
      this.service.activeteByUrl(url);
      return;
    }

    const title =
      this.activatedRoute?.firstChild?.firstChild?.snapshot?.data?.title;
    this.service.add(new Tab({ label: title ?? '', url, isActive: true }));
  }

  public get tabs$(): Observable<Array<Tab>> {
    return this.service.tabs$;
  }

  public handleTabClick(tab: Tab): void {
    this.service.makeActive(tab);
    this.clickOnTab.emit(tab);
  }

  public handleCloseTabClick(tab: Tab): void {
    const nextActiveTab = this.service.remove(tab);
    this.closeTab.emit({ closedTab: tab, nextActiveTab });
  }
}
