import { Component, Output, EventEmitter } from '@angular/core';

enum MenuButtonIcon {
  Menu = 'menu',
  Close = 'close',
}

@Component({
  selector: 'nn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public menuButtonIcon: MenuButtonIcon = MenuButtonIcon.Menu;

  @Output() onMenuButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onUserButtonClick: EventEmitter<void> = new EventEmitter<void>();

  public handleMenuButtonClick(): void {
    this.onUserButtonClick.emit();

    if (this.menuButtonIcon === MenuButtonIcon.Menu) {
      this.menuButtonIcon = MenuButtonIcon.Close;
    } else {
      this.menuButtonIcon = MenuButtonIcon.Menu;
    }
  }

  public handleUserButtonClick(): void {
    this.onUserButtonClick.emit();
  }
}
