import {
  Component,
  Input,
  QueryList,
  TrackByFunction,
  ViewChildren,
} from '@angular/core';
import { MatTabLink } from '@angular/material/tabs';
import { Tab } from '@shared/modules/tabs/models';

@Component({
  selector: 'nn-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() public tabs: Array<Tab> = [
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

  public trackByFn: TrackByFunction<Tab> = (index: number) => index;

  @ViewChildren(MatTabLink) public tabLinks!: QueryList<MatTabLink>;

  public handleTabClick(tab: Tab): void {
    this.tabs = this.tabs.map((existingTab: Tab) => {
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
  }

  public closeTab(tab: Tab, tabIndex: number): void {
    const updatedTabs: Array<Tab> = this.tabs.filter(
      ({ id }: Tab) => id !== tab.id
    );

    if (!updatedTabs.length || !tab.isActive) {
      this.tabs = updatedTabs;
      return;
    }

    if (tabIndex > 0) {
      updatedTabs[tabIndex - 1].isActive = true;
      this.tabLinks.get(tabIndex - 1)?.focus();
    }

    if (tabIndex === 0) {
      updatedTabs[tabIndex].isActive = true;
      this.tabLinks.get(tabIndex)?.focus();
    }

    this.tabs = updatedTabs;
  }
}
