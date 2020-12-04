import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtraActivitiesPageRoutingModule } from './extra-activities-routing.module';

import { ExtraActivitiesPage } from './extra-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtraActivitiesPageRoutingModule
  ],
  declarations: [ExtraActivitiesPage]
})
export class ExtraActivitiesPageModule {}
