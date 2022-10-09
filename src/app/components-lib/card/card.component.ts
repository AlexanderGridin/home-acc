import { Component, Input } from '@angular/core';

@Component({
  selector: 'hac-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public title = '';
  @Input() public subtitle = '';
  @Input() public useCustomHeader = false;
}
