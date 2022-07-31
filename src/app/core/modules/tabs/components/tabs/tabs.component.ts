import {
  Component,
  OnInit,
  Output,
  TrackByFunction,
  EventEmitter,
} from '@angular/core';
import { Tab } from '@core/modules/tabs/models';
import { TabsService } from '@core/modules/tabs/services/tabs/tabs.service';
import { Observable } from 'rxjs';

// TODO: move to separate file
export type CloseTabData = {
  closedTab: Tab;
  nextActiveTab: Tab | null;
};

@Component({
  selector: 'nn-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  public trackByFn: TrackByFunction<Tab> = (index: number) => index;

  @Output() onTabClick: EventEmitter<Tab> = new EventEmitter<Tab>();
  @Output() onTabClose: EventEmitter<CloseTabData> =
    new EventEmitter<CloseTabData>();

  constructor(private readonly service: TabsService) {}

  public get tabs$(): Observable<Array<Tab>> {
    return this.service.tabs$;
  }

  public handleTabClick(tab: Tab): void {
    this.service.makeTabActive(tab);
    this.onTabClick.emit(tab);
  }

  public closeTab(tab: Tab): void {
    const nextActiveTab = this.service.removeTab(tab);
    this.onTabClose.emit({ closedTab: tab, nextActiveTab });
  }
}
