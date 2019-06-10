import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutEstabelecimentoTabPage } from './layout-estabelecimento-tab.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutEstabelecimentoTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutEstabelecimentoTabPage]
})
export class LayoutEstabelecimentoTabPageModule {}
