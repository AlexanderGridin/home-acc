import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tab } from '@core/modules/tabs/models';

@Injectable()
export class TabsService {
  public tabs$: BehaviorSubject<Array<Tab>> = new BehaviorSubject<Array<Tab>>(
    tabs
  );

  private newTabId: number = 1;

  public addTab(tab: Tab): void {
    const tabs: Array<Tab> = this.tabs$.getValue();
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

  public removeTab(tab: Tab, tabIndex: number): void {
    const tabs: Array<Tab> = this.tabs$.getValue();

    const updatedTabs: Array<Tab> = tabs.filter(({ id }: Tab) => id !== tab.id);

    if (!updatedTabs.length || !tab.isActive) {
      this.tabs$.next(updatedTabs);
      return;
    }

    if (tabIndex > 0) {
      updatedTabs[tabIndex - 1].isActive = true;
    }

    if (tabIndex === 0) {
      updatedTabs[tabIndex].isActive = true;
    }

    this.tabs$.next(updatedTabs);
  }
}

const tabs: Array<Tab> = [
  {
    id: 1,
    label: 'This is very long tab title',
    isActive: false,
    icon: 'edit_square',
  },
  {
    id: 2,
    label: 'Tab 2',
    isActive: false,
    icon: 'bookmark_added',
  },
  {
    id: 3,
    label: 'Tab 3',
    isActive: false,
    icon: 'edit_square',
  },
  {
    id: 4,
    label: 'Tab 4',
    isActive: false,
    icon: 'edit_square',
  },
  {
    id: 5,
    label: 'Tab 5',
    isActive: false,
    icon: 'edit_square',
  },
  {
    id: 6,
    label: 'Tab 6',
    isActive: false,
    icon: 'edit_square',
  },
  {
    id: 7,
    label: 'Tab 7',
    isActive: false,
    icon: 'edit_square',
  },
];
