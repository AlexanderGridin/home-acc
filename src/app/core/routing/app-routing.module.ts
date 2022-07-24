import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { EmptyPageComponent } from '@core/components/empty-page/empty-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyPageComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
