import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutEstabelecimentoPage } from './layout-estabelecimento.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutEstabelecimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutEstabelecimentoPage]
})
export class LayoutEstabelecimentoPageModule {}
