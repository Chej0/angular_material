import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './pages/layouts/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'calendar', loadChildren: () => import('./pages/modules/calendar/calendar.module').then(m => m.CalendarModule) },
      { path: 'list/:id', loadChildren: () => import('./pages/modules/list/list.module').then(m => m.ListModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
