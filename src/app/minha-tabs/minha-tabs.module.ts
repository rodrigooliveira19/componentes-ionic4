import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinhaTabsPage } from './minha-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: MinhaTabsPage,
    children: [
      { path: 'tab1', 
        loadChildren: '../tab1/tab1.module#Tab1PageModule' },
    
    { path: 'tab2', 
      loadChildren: '../tab2/tab2.module#Tab2PageModule' },
    ]
  }, 
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MinhaTabsPage]
})
export class MinhaTabsPageModule {}
