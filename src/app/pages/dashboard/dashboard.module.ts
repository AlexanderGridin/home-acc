import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageModule } from '@shared/components/page/page.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    data: { title: 'Dashboard' },
  },
];

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageModule],
})
export class DashboardModule {}
