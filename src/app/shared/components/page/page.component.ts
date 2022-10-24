import { Component, Input } from '@angular/core';

@Component({
  selector: 'hac-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  @Input() public title = '';
}
