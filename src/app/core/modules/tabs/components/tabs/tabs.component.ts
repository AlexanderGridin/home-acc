import { Component, TrackByFunction } from '@angular/core';
import { Tab } from '@core/modules/tabs/models';
import { TabsService } from '@core/modules/tabs/services/tabs/tabs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'nn-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  public trackByFn: TrackByFunction<Tab> = (index: number) => index;

  constructor(private readonly service: TabsService) {}

  public get tabs$(): Observable<Array<Tab>> {
    return this.service.tabs$;
  }

  public handleTabClick(tab: Tab): void {
    this.service.makeTabActive(tab);
  }

  public closeTab(tab: Tab, tabIndex: number): void {
    this.service.removeTab(tab, tabIndex);
  }
}
