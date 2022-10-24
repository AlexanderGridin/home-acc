import { Component } from '@angular/core';
import { PageBaseComponent } from '@shared/classes/page-base.component';

@Component({
  selector: 'nn-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss'],
})
export class NotesPageComponent extends PageBaseComponent {
  public get title(): string {
    return 'Notes';
  }
}
