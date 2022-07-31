import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationLink } from '@core/models/navigation-link.model';

@Component({
  selector: 'nn-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss'],
})
export class NavigationListComponent {
  @Input() navigationLinks: Array<NavigationLink> = [];

  @Output() onLinkClick: EventEmitter<NavigationLink> =
    new EventEmitter<NavigationLink>();

  public handleLinkClick(event: MouseEvent, link: NavigationLink): void {
    event.preventDefault();
    this.onLinkClick.emit(link);
  }
}
