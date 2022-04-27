import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';
import { ListRoutes } from './list.routing';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ListRoutes),
    SharedComponentsModule
  ]
})
export class ListModule { }
