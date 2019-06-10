import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutNossaGeladaPage } from './layout-nossa-gelada.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutNossaGeladaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutNossaGeladaPage]
})
export class LayoutNossaGeladaPageModule {}
