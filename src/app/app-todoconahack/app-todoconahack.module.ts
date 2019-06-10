import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppTodoconahackPage } from './app-todoconahack.page';

const routes: Routes = [
  {
    path: '',
    component: AppTodoconahackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) 
  ],
  declarations: [AppTodoconahackPage]
})
export class AppTodoconahackPageModule {}
