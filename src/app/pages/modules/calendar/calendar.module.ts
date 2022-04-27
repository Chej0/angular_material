import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { CalendarRoutes } from './calendar.routing';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CalendarRoutes)
  ]
})
export class CalendarModule { }
