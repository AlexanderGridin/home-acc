import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tab } from '@core/modules/tabs/models';

@Injectable()
export class TabsService {
  public tabs$: BehaviorSubject<Array<Tab>> = new BehaviorSubject<Array<Tab>>(
    []
  );

  private newTabId: number = 1;

  public addTab(tab: Tab): void {
    const tabs: Array<Tab> = this.tabs$.getValue().map((tab: Tab) => ({
      ...tab,
      isActive: false,
    }));

    tab.id = this.newTabId;
    this.newTabId++;
    tabs.push(tab);

    this.tabs$.next(tabs);
  }

  public makeTabActive(tab: Tab): void {
    const tabs: Array<Tab> = this.tabs$.getValue();
    const updatedTabs: Array<Tab> = tabs.map((existingTab: Tab) => {
      if (tab.id === existingTab.id) {
        return {
          ...existingTab,
          isActive: true,
        };
      }

      return {
        ...existingTab,
        isActive: false,
      };
    });

    this.tabs$.next(updatedTabs);
  }

  public removeTab(tab: Tab): Tab | null {
    const tabs: Array<Tab> = this.tabs$.getValue();
    const tabIndex: number = tabs.findIndex(({ url }) => url === tab.url);
    const updatedTabs: Array<Tab> = tabs.filter(({ id }: Tab) => id !== tab.id);
    let nextActiveTab: Tab | null = null;

    if (!updatedTabs.length) {
      this.tabs$.next(updatedTabs);
      return nextActiveTab;
    }

    if (tabIndex > 0) {
      nextActiveTab = updatedTabs[tabIndex - 1];
      nextActiveTab.isActive = true;
    }

    if (tabIndex === 0) {
      nextActiveTab = updatedTabs[tabIndex];
      nextActiveTab.isActive = true;
    }

    this.tabs$.next(updatedTabs);
    return nextActiveTab;
  }

  public isTabExist(url: string): boolean {
    return this.tabs$.getValue().some((tab: Tab) => tab.url === url);
  }

  public get isTabsExist(): boolean {
    return Boolean(this.tabs$.getValue().length);
  }
}
