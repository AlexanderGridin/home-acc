import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hac-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public text = 'Button';
  @Input() public icon = '';
  @Input() public disabled = false;

  @Output() public onClick: EventEmitter<void> = new EventEmitter<void>();

  public handleClick(): void {
    this.onClick.emit();
  }
}
