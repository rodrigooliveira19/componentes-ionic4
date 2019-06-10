import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutCssUtilitiesTwoPage } from './layout-css-utilities-two.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutCssUtilitiesTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutCssUtilitiesTwoPage]
})
export class LayoutCssUtilitiesTwoPageModule {}
