import { Component, Input, TrackByFunction } from '@angular/core';

interface Tab {
  id: number;
  label: string;
  icon?: string;
  isActive: boolean;
}

@Component({
  selector: 'nn-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() public tabs: Array<Tab> = [
    {
      id: 1,
      label: 'Tab 1',
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
  ];

  public trackByFn: TrackByFunction<Tab> = (index: number) => index;

  public handleTabClick({ id }: Tab): void {
    this.tabs = this.tabs.map((existingTab: Tab) => {
      if (id === existingTab.id) {
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
}
