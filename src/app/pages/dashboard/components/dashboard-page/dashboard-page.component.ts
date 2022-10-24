import { Component } from '@angular/core';
import { PageBaseComponent } from '@shared/classes/page-base.component';

@Component({
  selector: 'nn-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent extends PageBaseComponent {
  public get title(): string {
    return 'Dashboard';
  }
}
