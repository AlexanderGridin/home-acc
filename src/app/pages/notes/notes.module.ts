import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesPageComponent } from './components/notes-page/notes-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageModule } from '@shared/components/page/page.module';

const routes: Routes = [
  {
    path: '',
    component: NotesPageComponent,
    data: { title: 'Notes' },
  },
];

@NgModule({
  declarations: [NotesPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageModule],
})
export class NotesModule {}
