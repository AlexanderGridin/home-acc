import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { SidebarTogglerIcon } from '../../models/enumerations/sidebar-toggler-icon.enum';

@Component({
  selector: 'nn-sidebar-toggler',
  templateUrl: './sidebar-toggler.component.html',
  styleUrls: ['./sidebar-toggler.component.scss'],
})
export class SidebarTogglerComponent implements OnChanges {
  @Input() public isActive = false;
  public icon: SidebarTogglerIcon = SidebarTogglerIcon.NonActive;

  public ngOnChanges(changes: SimpleChanges): void {
    this.handleIsActiveChange(changes.isActive);
  }

  private handleIsActiveChange(isActiveChange: SimpleChange): void {
    if (!isActiveChange) {
      return;
    }

    const { Active, NonActive } = SidebarTogglerIcon;
    this.icon = this.isActive ? Active : NonActive;
  }
}
