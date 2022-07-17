import { Component, Input, ViewEncapsulation } from '@angular/core';

interface Tab {
  id: number;
  label: string;
  icon?: string;
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
    },
    {
      id: 2,
      label: 'Tab 2',
    },
    {
      id: 3,
      label: 'Tab 3',
    },
  ];

  public trackByFn = (tab: Tab): number => tab.id;
}
