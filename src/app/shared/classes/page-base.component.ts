import { Component, OnInit } from '@angular/core';
import { TabsService } from '@core/modules/tabs/services/tabs/tabs.service';

@Component({
  template: '',
})
export abstract class PageBaseComponent implements OnInit {
  public abstract get title(): string;

  constructor(private readonly tabsService: TabsService) {}

  public ngOnInit(): void {
    this.tabsService.setActiveTabTitle(this.title);
  }
}
