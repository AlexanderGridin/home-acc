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
import { CloseTabData } from '@core/modules/tabs/models/close-tab-data.model';

@Component({
  selector: 'nn-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  public trackByFn: TrackByFunction<Tab> = (index: number) => index;

  @Output() clickOnTab: EventEmitter<Tab> = new EventEmitter<Tab>();
  @Output() closeTab: EventEmitter<CloseTabData> =
    new EventEmitter<CloseTabData>();

  constructor(private readonly service: TabsService) {}

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
