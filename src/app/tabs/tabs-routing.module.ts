/*
Tabs routing module is responsible for handling the routing between the tab-pages.
the tab-pages are routedthrough the tabs page which sets the global layout for the header and
bottom tab
First the required modules are imported.
Then the routes are set for each page included in the tab-pages.
If entering the tabs pages from outside the path will be directed through the tabs page to
add the header and bottom tab.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then( m => m.Tab2PageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'technical',
        loadChildren: () => import('../technical/technical.module').then( m => m.TechnicalPageModule)
      },
      {
        path: 'soft',
        loadChildren: () => import('../soft/soft.module').then( m => m.SoftPageModule)
      },
      {
        path: 'personal-project',
        loadChildren: () => import('../personal-project/personal-project.module').then( m => m.PersonalProjectPageModule)
      },
      {
        path: 'team-project',
        loadChildren: () => import('../team-project/team-project.module').then( m => m.TeamProjectPageModule)
      },
      {
        path: 'extra-activities',
        loadChildren: () => import('../extra-activities/extra-activities.module').then( m => m.ExtraActivitiesPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'hobbies',
        loadChildren: () => import('../hobbies/hobbies.module').then( m => m.HobbiesPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
