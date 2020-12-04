import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraActivitiesPage } from './extra-activities.page';

const routes: Routes = [
  {
    path: '',
    component: ExtraActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraActivitiesPageRoutingModule {}
