import { Component, Input } from '@angular/core';

@Component({
  selector: 'hac-collapsible-card',
  templateUrl: './collapsible-card.component.html',
  styleUrls: ['./collapsible-card.component.scss'],
})
export class CollapsibleCardComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public showActions!: boolean;
}
