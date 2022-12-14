import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    data: { title: 'Dashboard' },
  },
];

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
