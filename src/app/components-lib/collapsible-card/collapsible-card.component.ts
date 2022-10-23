import { Component, Input, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'hac-collapsible-card',
  templateUrl: './collapsible-card.component.html',
  styleUrls: ['./collapsible-card.component.scss'],
})
export class CollapsibleCardComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public showActions!: boolean;

  @ViewChild(MatExpansionPanel)
  private readonly expansionPannel!: MatExpansionPanel;

  public open(): void {
    this.expansionPannel.open();
  }

  public close(): void {
    this.expansionPannel.close();
  }
}
